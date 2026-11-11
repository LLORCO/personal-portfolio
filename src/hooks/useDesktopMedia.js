import { useState } from "react";

const DESKTOP_QUERY = "(min-width: 1024px)";

export function matchesDesktop() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia(DESKTOP_QUERY).matches;
}

export function useDesktopInitialOpen() {
  return useState(matchesDesktop);
}
