/* Spinning counter — adapted from the free recipe at transitions.dev.
   Terms: https://transitions.dev/terms.html */

const STEP = (50 * Math.PI) / 180;
const ENTER_MS = 120;
const FADE_END = 1.8;
const LAND_AT = 0.6;
const ARRIVE_AT = 0.29;
const CLEAR_MS = 200;

function token(name, fallback) {
  const value = parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name));
  return Number.isNaN(value) ? fallback : value;
}

function length(el, name, fallbackEm) {
  const probe = document.createElement("span");
  probe.style.cssText = `position:absolute;visibility:hidden;width:var(${name})`;
  el.appendChild(probe);
  const px = probe.getBoundingClientRect().width;
  probe.remove();
  return px || fallbackEm * (parseFloat(getComputedStyle(el).fontSize) || 24);
}

function bezier([x1, y1, x2, y2]) {
  const at = (a, b, t) => 3 * a * t * (1 - t) * (1 - t) + 3 * b * t * t * (1 - t) + t * t * t;
  return (x) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let lo = 0;
    let hi = 1;
    let t = x;
    for (let i = 0; i < 20; i += 1) {
      if (at(x1, x2, t) < x) lo = t;
      else hi = t;
      t = (lo + hi) / 2;
    }
    return at(y1, y2, t);
  };
}

function readTokens(el) {
  const css = getComputedStyle(document.documentElement);
  const match = css.getPropertyValue("--reel-ease").match(/cubic-bezier\(([^)]+)\)/);
  return {
    stepDur: token("--reel-step-dur", 130),
    stagger: token("--reel-stagger", 90),
    ease: bezier(match ? match[1].split(",").map(parseFloat) : [0.35, -0.02, 0.43, 1]),
    offset: length(el, "--reel-side-offset", 0.52),
    sideScale: token("--reel-side-scale", 0.7),
    sideBlur: length(el, "--reel-side-blur", 0.083),
    sideOpacity: token("--reel-side-opacity", 0.17),
    centerScale: token("--reel-center-scale", 0.9),
    centerBlur: length(el, "--reel-center-blur", 0.042),
    anticDur: token("--reel-antic-dur", 100),
    anticScale: token("--reel-antic-scale", 0.94),
    anticLift: length(el, "--reel-antic-lift", 0.125),
    landDur: token("--reel-land-dur", 740),
    landPeak: token("--reel-land-peak", 1.03),
  };
}

function smooth(x) {
  const t = Math.max(0, Math.min(1, x));
  return t * t * (3 - 2 * t);
}

function wave(s) {
  return s >= 1 ? 0 : Math.exp(-3 * s) * Math.cos(3 * Math.PI * s) * (1 - s);
}

const WAVE_TROUGH = (() => {
  let low = 0;
  for (let i = 1; i < 400; i += 1) low = Math.min(low, wave(i / 400));
  return -low;
})();

export function buildColumns(el, str) {
  el.replaceChildren();
  const cols = [];
  for (const ch of str) {
    if (ch < "0" || ch > "9") {
      const sep = document.createElement("span");
      sep.className = "t-reel-sep";
      sep.textContent = ch;
      el.appendChild(sep);
      continue;
    }
    const col = document.createElement("span");
    col.className = "t-reel-col";
    const sizer = document.createElement("span");
    sizer.className = "t-reel-sizer";
    sizer.textContent = "0";
    col.appendChild(sizer);
    const cells = [];
    for (let d = 0; d < 10; d += 1) {
      const cell = document.createElement("span");
      cell.className = "t-reel-digit";
      cell.textContent = String(d);
      col.appendChild(cell);
      cells.push(cell);
    }
    el.appendChild(col);
    cols.push({ cells, digit: +ch });
  }
  return cols;
}

function rest(col, digit) {
  col.cells.forEach((cell, d) => {
    cell.style.transform = "none";
    cell.style.filter = "none";
    cell.style.zIndex = "";
    cell.style.opacity = d === digit ? "1" : "0";
  });
}

function look(dist, middle, o) {
  const angle = Math.min(dist * STEP, Math.PI / 2);
  const face = (Math.cos(angle) - Math.cos(STEP)) / (1 - Math.cos(STEP));
  return {
    angle,
    scale: o.sideScale + (middle - o.sideScale) * face,
    back: dist <= 1 ? 1 + (o.sideOpacity - 1) * dist : o.sideOpacity * (1 - (dist - 1) / (FADE_END - 1)),
  };
}

function place(col, pos, spread, middle, o, land) {
  const radius = o.offset / Math.sin(STEP);
  col.cells.forEach((cell, d) => {
    let p = (((d - pos) % 10) + 10) % 10;
    if (p > 5) p -= 10;
    const dist = Math.abs(p);
    if (dist >= FADE_END) {
      cell.style.opacity = "0";
      return;
    }
    const l = look(dist, middle, o);
    let y = (p < 0 ? 1 : -1) * radius * Math.sin(l.angle);
    const blur = (o.centerBlur + (o.sideBlur - o.centerBlur) * Math.min(dist, 1)) * spread;
    const away = Math.max(0, Math.min(1, (dist - 0.3) / 0.5));
    let opacity = l.back * (1 - (1 - spread) * away);
    let scale = l.scale;
    let z = 100 - Math.round(dist * 10);
    if (land && d === col.digit) {
      y = y * land.arrive + land.lift;
      scale = land.scale;
      opacity = land.opacity;
      z = 200;
    }
    cell.style.transform = `translateY(${y.toFixed(2)}px) scale(${scale.toFixed(4)})`;
    cell.style.filter = blur > 0.01 ? `blur(${blur.toFixed(2)}px)` : "none";
    cell.style.opacity = opacity.toFixed(3);
    cell.style.zIndex = String(z);
  });
}

export function showValue(el, value) {
  const str = value.toLocaleString("en-US");
  el.setAttribute("aria-label", str);
  const cols = buildColumns(el, str);
  cols.forEach((col) => rest(col, col.digit));
}

export function showIdle(el, digits = 2) {
  const zeros = "0".repeat(digits);
  el.setAttribute("aria-label", "0");
  const cols = buildColumns(el, zeros);
  cols.forEach((col) => rest(col, 0));
}

export function roll(el, from, to) {
  const str = to.toLocaleString("en-US");
  el.setAttribute("aria-label", str);
  const cols = buildColumns(el, str);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    cols.forEach((col) => rest(col, col.digit));
    return () => {};
  }
  const o = readTokens(el);
  const fromDigits = String(from).padStart(cols.length, "0").slice(-cols.length);
  cols.forEach((col, i) => {
    col.from = +fromDigits[i];
    rest(col, col.from);
    if (col.from === col.digit) col.done = true;
  });
  const t0 = performance.now();
  let raf = 0;
  const tick = () => {
    const t = performance.now() - t0;
    let running = false;
    cols.forEach((col, i) => {
      if (col.done) return;
      const local = t - i * o.stagger;
      if (local <= 0) {
        running = true;
        return;
      }
      const total = (col.digit - col.from + 10) % 10;
      const pos = col.from + total * o.ease(local / (total * o.stepDur));
      const enter = Math.min(1, local / ENTER_MS);
      if (col.landAt === undefined && col.from + total - pos < LAND_AT) col.landAt = t;
      const since = col.landAt === undefined ? -1 : t - col.landAt;
      if (since >= o.anticDur + o.landDur) {
        rest(col, col.digit);
        col.done = true;
        return;
      }
      running = true;
      const middle = 1 + (o.centerScale - 1) * enter;
      let spread = enter;
      let land = null;
      if (since >= 0) {
        if (!col.landFrom) col.landFrom = look(col.from + total - pos, middle, o);
        const arrive = 1 - smooth(since / (o.anticDur + o.landDur * ARRIVE_AT));
        if (since < o.anticDur) {
          const a = smooth(since / o.anticDur);
          land = {
            scale: col.landFrom.scale + (o.anticScale - col.landFrom.scale) * a,
            lift: -o.anticLift * a,
            opacity: col.landFrom.back + (1 - col.landFrom.back) * a,
            arrive,
          };
        } else {
          const sp = since - o.anticDur;
          const sn = sp / o.landDur;
          const w = wave(sn);
          land = {
            scale: sn < 1 / 6 ? 1 + (o.anticScale - 1) * w : 1 - ((o.landPeak - 1) * w) / WAVE_TROUGH,
            lift: -o.anticLift * w,
            opacity: 1,
            arrive,
          };
          spread = 1 - Math.min(1, sp / CLEAR_MS);
        }
      }
      place(col, pos, spread, middle, o, land);
    });
    if (running) raf = requestAnimationFrame(tick);
  };
  tick();
  return () => cancelAnimationFrame(raf);
}
