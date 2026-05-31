import { useCallback } from "react";
import Lenis from "lenis";

// Grab the Lenis instance that App.tsx created
let lenisInstance: Lenis | null = null;

export function setLenisInstance(l: Lenis) {
  lenisInstance = l;
}

export function useLenisScroll() {
  const scrollTo = useCallback((target: string) => {
    const el = document.querySelector(target);
    if (!el) return;
    if (lenisInstance) {
      lenisInstance.scrollTo(el as HTMLElement, { duration: 1.4, offset: -70 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return scrollTo;
}