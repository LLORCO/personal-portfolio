export function currentPath() {
  if (typeof window === "undefined") return "/";
  return window.location.pathname.replace(/\/$/, "") || "/";
}

export function isMemoryAirPath(pathname = currentPath()) {
  return pathname === "/memory-air";
}
