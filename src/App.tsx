import { useEffect, useState, lazy, Suspense } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import "./index.css";
import { setLenisInstance } from "./hooks/useLenisScroll";
import Loader from "./elements/Loader";
gsap.registerPlugin(ScrollTrigger);

// lazy components
const Hero = lazy(() => import("./elements/Hero"));
const Nav = lazy(() => import("./Nav"));
const Services = lazy(() => import("./elements/Services"));
const Experiences = lazy(() => import("./elements/Experiences"));
const SkillsSection = lazy(() => import("./elements/Skills"));
const Projects = lazy(() => import("./elements/Projects"));
const Contact = lazy(() => import("./elements/Contact"));
const Footer = lazy(() => import("./elements/Footer"));


function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let lenis: Lenis | null = null;
    let rafId: number | null = null;

    const startLenis = () => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      setLenisInstance(lenis);

      lenis.on("scroll", ScrollTrigger.update);

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    };

    // ✅ start Lenis AFTER idle
    const idle =
      window.requestIdleCallback ||
      ((cb: any) => setTimeout(cb, 1));

    idle(startLenis);

    // ✅ delay heavy rendering
    const idleRender =
      window.requestIdleCallback ||
      ((cb: any) => setTimeout(cb, 1));

    idleRender(() => setReady(true));

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) {
        lenis.off("scroll", ScrollTrigger.update);
        lenis.destroy();
        lenis = null;
      }
    };
  }, []);

  return (
    <div>
      <Suspense fallback={null}>
        <Loader duration={2660} />
      </Suspense>

      <div className="min-h-screen bg-background flex flex-col">
        <Suspense fallback={null}>
          <Nav />
          <Hero />

          {ready && (
            <main className="flex-1">
              <Services />
              <Experiences />
              <SkillsSection />
              <Projects />
              <Contact />
              <Footer />
            </main>
          )}
        </Suspense>
      </div>
    </div>
  );
}

export default App;