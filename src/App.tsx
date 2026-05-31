import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Contact from "./elements/Contact";
import Experiences from "./elements/Experiences";
import Footer from "./elements/Footer";
import Hero from "./elements/Hero";
import Loader from "./elements/Loader";
import Projects from "./elements/Projects";
import Services from "./elements/Services";
import SkillsSection from "./elements/Skills";
import "./index.css";
import Nav from "./Nav";
import { setLenisInstance } from "./hooks/useLenisScroll";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Make instance available to nav/footer hooks
    setLenisInstance(lenis);

    // Keep GSAP ScrollTrigger in sync with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div>
      <Loader duration={2660} />
      <div className="min-h-screen bg-background flex flex-col">
        <Nav />
        <main className="flex-1">
          <Hero />
          <Services />
          <Experiences />
          <SkillsSection />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;