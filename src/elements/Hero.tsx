import brushPC from '../assets/clearBrushingPC.webp'
import brushSM from '../assets/clearBrushingSM.webp';
import avatarPC from '../assets/avatarPC.webp'
import avatarSM from '../assets/avatarSM.webp'

import { ArrowDownToLine, Mail, MapPin } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import CountUp from 'react-countup';
import HeroData from "../Data/Hero.json";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const socialIcons: Record<string, JSX.Element> = {
  facebook: <BiLogoFacebook />,
  instagram: <BiLogoInstagram />,
  X: <FaXTwitter />,
  linkedin: <BiLogoLinkedin />,
};

export default function Hero() {
  const { greeting, name, typeAnimation, tagline, experience, email, location, cv, socials } = HeroData;
  const sequence = typeAnimation.flatMap((text) => [text, 2000]);

  // Refs
  const greetingRef   = useRef<HTMLSpanElement>(null);
  const nameRef       = useRef<HTMLSpanElement>(null);
  const avatarRef     = useRef<HTMLImageElement>(null);
  const brushRef      = useRef<HTMLImageElement>(null);
  const emailRef      = useRef<HTMLDivElement>(null);
  const locationRef   = useRef<HTMLDivElement>(null);
  const expRef        = useRef<HTMLDivElement>(null);
  const cvBtnDesktop  = useRef<HTMLButtonElement>(null);
  const cvBtnMobile   = useRef<HTMLButtonElement>(null);
  const socialsDesktop= useRef<HTMLDivElement>(null);
  const socialsMobile = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "elastic.out(1, 0.6)" } });

      // ── Heading: greeting word by word ──
      if (greetingRef.current) {
        const words = greetingRef.current.querySelectorAll('.word');
        tl.fromTo(words,
          { opacity: 0, y: 60, rotation: -8, scale: 0.7 },
          { opacity: 1, y: 0, rotation: 0, scale: 1, duration: 1, stagger: 0.12 },
          0
        );
      }

      // ── Name: bounce in ──
      if (nameRef.current) {
        const words = nameRef.current.querySelectorAll('.word');
        tl.fromTo(words,
          { opacity: 0, y: 80, scale: 0.6 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, stagger: 0.1 },
          0.25
        );
      }

      // ── Brush: scale + rotate spring ──
      if (brushRef.current) {
        tl.fromTo(brushRef.current,
          { opacity: 0, scale: 0.4, rotation: -20 },
          { opacity: 1, scale: 1, rotation: 0, duration: 1.4, ease: "elastic.out(1, 0.5)" },
          0.1
        );
      }

      // ── Avatar: slide up with bounce ──
      if (avatarRef.current) {
        tl.fromTo(avatarRef.current,
          { opacity: 0, y: 120, scale: 0.85 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" },
          0.3
        );
      }

      // ── Email ──
      if (emailRef.current) {
        tl.fromTo(emailRef.current,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 1, ease: "elastic.out(1, 0.7)" },
          0.7
        );
      }

      // ── Location ──
      if (locationRef.current) {
        tl.fromTo(locationRef.current,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 1, ease: "elastic.out(1, 0.7)" },
          0.85
        );
      }

      // ── Experience counter ──
      if (expRef.current) {
        tl.fromTo(expRef.current,
          { opacity: 0, scale: 0.4, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1.3, ease: "elastic.out(1.2, 0.5)" },
          0.6
        );
      }

      // ── CV buttons ──
      [cvBtnDesktop.current, cvBtnMobile.current].forEach((btn, i) => {
        if (!btn) return;
        tl.fromTo(btn,
          { opacity: 0, scale: 0.5, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: "powerinOut1.out(1, 0.5)" },
          0.4 + i * 0.1
        );
      });

      // ── Socials: stagger bounce ──
      [socialsDesktop.current, socialsMobile.current].forEach((container) => {
        if (!container) return;
        const icons = container.querySelectorAll('.social-icon');
        tl.fromTo(icons,
          { opacity: 0, scale: 0, rotation: -180 },
          { opacity: 1, scale: 1, rotation: 0, duration: 0.9, stagger: 0.1, ease: "elastic.out(1, 0.5)" },
          1.0
        );
      });
 
      // ── Hover bounce on CV buttons ──
      [cvBtnDesktop.current, cvBtnMobile.current].forEach((btn) => {
        if (!btn) return;
        btn.addEventListener('mouseenter', () => {
          gsap.to(btn, { scale: 1.07, duration: 0.35, ease: "elastic.out(1.5, 0.5)" });
        });
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.6)" });
        });
      });

      // ── Hover bounce on social icons ──
      const allIcons = document.querySelectorAll('.social-icon');
      allIcons.forEach((icon) => {
        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, { scale: 1.25, rotation: 10, duration: 0.35, ease: "elastic.out(2, 0.5)" });
        });
        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, { scale: 1, rotation: 0, duration: 0.4, ease: "elastic.out(1, 0.6)" });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  // Split text into .word spans
  const splitWords = (text: string) =>
    text.split(' ').map((word, i) => (
      <span key={i} className="word inline-block mr-[0.25em]">{word}</span>
    ));

  return (
    <section id="home" className='lg:pl-24 overflow-hidden relative'>

      {/* ── DESKTOP layout ── */}
      <div className="flex flex-col lg:grid max-w-7xl mx-auto grid-cols-[1fr_1.3fr_1fr] items-stretch px-10 py-2 lg:pr-36">

        {/* Left column */}
        <div className="flex flex-col justify-between z-10">
          <h1 className="text-4xl font-caveat lg:text-8xl whitespace-nowrap font-bold text-secondary leading-normal">
            <span ref={greetingRef}>{splitWords(greeting)}</span>
            <br />
            <span ref={nameRef}>{splitWords(name)}</span>
            <br />
            <TypeAnimation
              sequence={sequence}
              wrapper="span"
              speed={40}
              className="text-accent font-caveat text-4xl lg:text-6xl font-bold"
              repeat={Infinity}
              cursor={false}
            />
          </h1>

          <div>
            <div ref={emailRef} className='hidden lg:flex items-center lg:pt-10 pb-5'>
              <Mail className='text-accent hover:text-tertiary cursor-pointer' />
              <a 
                href={email.link}
                className="pl-5 text-accent font-montserrat hover:text-secondary font-medium text-lg underline">
                {email.display}
              </a>
            </div>
            <div ref={locationRef} className='hidden lg:flex items-center lg:pb-10'>
              <MapPin className='text-accent hover:text-tertiary cursor-pointer' />
              <span className='pl-5 text-accent hover:text-secondary font-medium text-base cursor-pointer'>{location}</span>
            </div>
          </div>

          <div ref={expRef} className="hidden lg:flex items-baseline pb-32 pt-6 gap-2">
            <div className='flex items-baseline gap-1 font-caveat'>
              <span className="text-5xl font-extrabold text-secondary">+</span>
              <CountUp
                end={experience.count}
                duration={2}
                delay={0.5}
                className="text-5xl font-extrabold text-secondary"
              />
            </div>
            <span className="text-4xl font-bold font-caveat tracking-widest text-secondary uppercase"
            >
              {experience.displayYear} <br /> {experience.displayExperience}
            </span>
          </div>

          <p className="lg:hidden text-base text-secondary lg:font-medium font-semibold leading-relaxed lg:max-w-[220px] max-w-[280px]">
            {tagline}
          </p>
        </div>

        {/* Center column */}
        <div className="hidden lg:flex relative flex-[1.5] items-end justify-center select-none">
          <img ref={brushRef} src={brushPC} alt="brushPC" loading="eager" fetchPriority="high" decoding="async"
            className=" absolute w-[470px] h-[630px] z-0" />
                
         <img
            ref={avatarRef}
            src={avatarPC}
            alt="personelPhoto"
            width={529}
            height={700}
            fetchPriority="high"
            loading="eager"  
            decoding="async"
            className="relative bottom-1 top-[60px] left-[200px] -translate-x-1/2 z-10 h-[580px] object-contain drop-shadow-lg"
          />
        </div>
        <div className='flex lg:hidden relative flex-[1.5] items-end justify-items-center-center select-none'>
          <img ref={brushRef} src={brushSM} alt="brushSM" loading="eager" fetchPriority="high"  decoding="async" 
              className="right-2 absolute top-0 w-[350px] z-0" />
              <img
            ref={avatarRef}
            src={avatarSM}
            alt="personelPhoto"
            width={250}
            height={318}
            loading="eager"  
            fetchPriority="high"
            decoding="async"
            className="block lg:hidden relative left-[120px] bottom-0 -translate-x-1/2 z-10 h-[380px] object-contain drop-shadow-lg"
          />
        </div>

        {/* CV button mobile */}
        <div className="lg:hidden flex flex-col items-center gap-2 py-4">
          <button ref={cvBtnMobile} className="rounded-full transition-all h-14 min-w-50 px-6 tracking-widest bg-select hover:bg-tertiary-hover text-secondary uppercase font-extrabold text-base text-center">
            <div className='flex items-center justify-center font-caveat gap-2'>
              <span >{cv.display}</span>
              <ArrowDownToLine width={25} height={25} />
            </div>
          </button>
        </div>

        {/* Socials mobile */}
        <div ref={socialsMobile} className='lg:hidden flex flex-col gap-4 absolute top-[410px] right-4 -translate-y-1/2 z-40'>
          {socials.map((item, i) => (
            <div key={i} className='social-icon bg-accent text-white hover:bg-accent-hover transition w-10 h-10 text-[22px] flex items-center justify-center rounded-full cursor-pointer'>
              {socialIcons[item.name]}
            </div>
          ))}
        </div>

        {/* Email mobile */}
        <div className='lg:hidden flex items-center pb-5'>
          <Mail className='text-accent hover:text-tertiary cursor-pointer' />
          <a 
            href={email.link}
            className="pl-5 text-accent dont-montserrat hover:text-tertiary font-medium text-base underline">
            {email.display}
          </a>
        </div>

        {/* Location mobile */}
        <div className='lg:hidden flex items-center'>
          <MapPin className='text-accent hover:text-tertiary cursor-pointer' />
          <span className='pl-5 text-accent hover:text-tertiary font-medium text-base cursor-pointer'>{location}</span>
        </div>

        {/* Right column */}
        <div className="hidden lg:flex flex-col justify-between flex-1 items-end pt-36 text-right z-10">
          <p className="text-base text-secondary font-medium leading-relaxed max-w-[220px]">
            {tagline}
          </p>
          <div className="flex flex-col items-center gap-2 lg:pb-44">
            <button ref={cvBtnDesktop} className="rounded-full hover:scale-[1.02] transition-all h-14 min-w-50 px-6 tracking-widest bg-select hover:bg-tertiary-hover text-secondary uppercase font-extrabold text-base text-center">
              <div className='flex items-center font-caveat justify-center gap-2'>
                <span>{cv.display}</span>
                <ArrowDownToLine width={25} height={25} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Socials desktop */}
      <div ref={socialsDesktop} className='hidden lg:flex flex-col gap-6 absolute top-1/2 right-4 -translate-y-1/2 z-40'>
        {socials.map((item, i) => (
          <div key={i} className='social-icon bg-accent text-white hover:bg-accent-hover transition w-10 h-10 text-[22px] flex items-center justify-center rounded-full cursor-pointer'>
            {socialIcons[item.name]}
          </div>
        ))}
      </div>

    </section>
  );
}