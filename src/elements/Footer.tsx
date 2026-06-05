import { useEffect, useRef } from "react";
import FooterData from "../Data/Footer.json";
import { useLenisScroll } from "../hooks/useLenisScroll";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const { logo, copyright, navLinks } = FooterData;

export default function Footer() {
  const scrollTo = useLenisScroll();
  const divRef = useRef<HTMLDivElement>(null);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    scrollTo(`#${link.toLowerCase()}`);
  };
useGSAP(()=>{
if (!divRef.current) return;
gsap.from(divRef.current,{
  opacity:0,
  y:50,
  duration:0.3,
  ease:"back.out",
  scrollTrigger:{
    trigger:divRef.current,
    start:"top bottom",
    refreshPriority: -2
  }
})
},{
  scope:divRef
})
// ✅ recalculate after everything else has set up
useEffect(() => {
  const t = setTimeout(() => ScrollTrigger.refresh(), 600);
  return () => clearTimeout(t);
}, []);
  return (
    <footer className="w-full bg-background border-t border-white/10 px-6 lg:px-20 py-10">
      <div ref={divRef} className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <span
          className="text-3xl text-secondary font-caveat"
         
        >
          {logo}
        </span>

        {/* Copyright */}
        <p
          className="text-secondary font-caveat text-xl"
         
        >
          © {new Date().getFullYear()} {copyright}
        </p>

        {/* Nav links */}
        <nav className="flex items-center gap-3 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleClick(e, link)}
              className="text-base lg:text-lg font-caveat font-medium tracking-widest uppercase text-secondary hover:text-accent transition-colors duration-200"
             
            >
              {link}
            </a>
          ))}
        </nav>

      </div>
    </footer>
  );
}