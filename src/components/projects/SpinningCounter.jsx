import { useEffect, useRef } from "react";
import { roll, showIdle, showValue } from "../../lib/spinningCounter";

export default function SpinningCounter({ value, inView, reducedMotion }) {
  const reelRef = useRef(null);
  const ranRef = useRef(false);
  const digits = String(value).length;

  useEffect(() => {
    const el = reelRef.current;
    if (!el) return undefined;

    if (reducedMotion) {
      ranRef.current = true;
      showValue(el, value);
      return undefined;
    }

    if (!inView) {
      showIdle(el, digits);
      return undefined;
    }

    if (ranRef.current) {
      showValue(el, value);
      return undefined;
    }

    ranRef.current = true;
    return roll(el, 0, value);
  }, [digits, inView, reducedMotion, value]);

  const visible = reducedMotion || inView ? String(value) : "0".repeat(digits);

  return (
    <div
      ref={reelRef}
      className="t-reel font-heading text-[4rem] font-bold leading-none tracking-tight text-moss-950 dark:text-vibe-300 sm:text-[5rem]"
      aria-label={reducedMotion || inView ? String(value) : "0"}
    >
      {visible}
    </div>
  );
}
