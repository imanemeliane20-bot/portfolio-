import { useCallback } from "react";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenisInstance(l: Lenis) {
  lenisInstance = l;
}

export function useLenisScroll() {
  const scrollTo = useCallback((target: string) => {
    // "Home" → scroll to very top
    if (target === "#" || target === "#home") {
      if (lenisInstance) {
        lenisInstance.scrollTo(0, { duration: 1.4 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // All other sections
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