import brush from '../assets/clearBrushing.png'
import avatar from '../assets/avatar.png'
import { ArrowDownToLine, Mail, MapPin } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { BiLogoDribbble, BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi"
import CountUp from 'react-countup';

const socials = [
  { icon: <BiLogoFacebook />, path: "" },
  { icon: <BiLogoInstagram />, path: "" },
  { icon: <BiLogoDribbble />, path: "" },
  { icon: <BiLogoLinkedin />, path: "" },
]

export default function Hero() {
  return (
    <section className='lg:pl-24 overflow-hidden'>

      {/* ── DESKTOP layout ── */}
      <div className="flex flex-col lg:grid max-w-7xl mx-auto grid-cols-[1fr_1.3fr_1fr] items-stretch px-10 py-2 lg:pr-36 ">

        {/* Left column */}
        <div className="flex flex-col justify-between z-10">
          <h1 style={{ fontFamily: "'Caveat',sans-serif" }} className="text-4xl lg:text-8xl whitespace-nowrap font-bold text-secondary leading-normal">
            Hey There, <br />I'm Zakariya <br />
            <TypeAnimation
              sequence={["Web Developer", 2000, "FrontEnd Developer", 2000, "FullStack Developer", 2000]}
              wrapper="span"
              speed={40}
              style={{ fontFamily: "'Caveat', cursive" }}
              className="text-accent text-4xl lg:text-6xl font-bold"
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <div>
            <div className='hidden lg:flex items-center lg:pt-10 pb-5'>
              <Mail className='text-accent hover:text-tertiary cursor-pointer' />
              <a style={{ fontFamily: "'Montserrat',sans-serif" }}
                href="mailto:imanemeliane18@gmail.com"
                className="pl-5 text-accent hover:text-tertiary font-medium text-lg underline">
                imanemeliane18@gmail.com
              </a>
            </div>
            <div className='hidden lg:flex items-center lg:pb-10'>
              <MapPin className='text-accent hover:text-tertiary cursor-pointer' />
              <span className='pl-5 text-accent hover:text-tertiary font-medium text-base cursor-pointer '>Settat, Morocco</span>
            </div>
          </div>
          <div className="hidden lg:flex items-baseline pb-32 pt-6 gap-2">
            <div className='flex items-baseline gap-1' style={{ fontFamily: "'Caveat',sans-serif" }}>
              <span className="text-5xl font-extrabold text-secondary">+</span>
              <CountUp
                end={10}
                duration={2}
                delay={0.5}
                className="text-5xl font-extrabold text-secondary"
              />
            </div>
            <span className="text-4xl font-bold tracking-widest text-secondary uppercase"
              style={{ fontFamily: "'Caveat',sans-serif" }}
            >
              Years <br /> Experience
            </span>
          </div>
          <p className="lg:hidden text-base text-secondary lg:font-medium font-semibold leading-relaxed lg:max-w-[220px] max-w-[280px]">
            I design beautifully simple things, And I love what I do.
          </p>
        </div>

        {/* Center column */}
        <div className="relative flex-[1.5] flex items-end justify-center select-none">
          <img src={brush} alt="brush" className="absolute w-[350px] h-[380px] lg:w-[470px] lg:h-[630px] z-0" />
          <img src={avatar} alt="Zakaria"
            className="relative flex bottom-0 left-[160px] lg:top-[60px] lg:left-[200px] -translate-x-1/2 z-10 h-[380px] lg:h-[580px] object-contain drop-shadow-lg" />
        </div>

        {/* button for mobile */}
        <div className="lg:hidden flex flex-col items-center gap-2 py-4">
          <button className="rounded-full transition-all h-14 min-w-50 px-6 tracking-widest bg-select hover:bg-tertiary-hover text-secondary uppercase font-extrabold text-base text-center">
            <div className='flex items-center justify-center gap-2  '>
              <span style={{ fontFamily: "'Caveat',cursive" }}>Download CV</span>
              <ArrowDownToLine width={25} height={25} />
            </div>
          </button>
        </div>

        {/* socials for mobile */}
        <div className='lg:hidden flex flex-col gap-4 absolute top-[410px] right-4 -translate-y-1/2 z-40'>
          {socials.map((item, i) => (
            <div key={i} className='bg-accent text-white hover:bg-accent-hover transition w-10 h-10 text-[22px] flex items-center justify-center rounded-full cursor-pointer'>
              {item.icon}
            </div>
          ))}
        </div>

        {/* location and email for mobile */}
        <div className='lg:hidden flex items-center pb-5'>
          <Mail className='text-accent hover:text-tertiary cursor-pointer' />
          <a style={{ fontFamily: "'Montserrat',sans-serif" }}
            href="mailto:imanemeliane18@gmail.com"
            className="pl-5 text-accent hover:text-tertiary font-medium text-base underline">
            imanemeliane18@gmail.com
          </a>
        </div>

        {/* location mobile */}
        <div className='lg:hidden flex items-center'>
          <MapPin className='text-accent hover:text-tertiary cursor-pointer' />
          <span className='pl-5 text-accent hover:text-tertiary font-medium text-base cursor-pointer'>Settat, Morocco</span>
        </div>

        {/* Right column */}
        <div className="hidden lg:flex flex-col justify-between flex-1 items-end pt-36 text-right z-10">
          <p className="text-base text-secondary font-medium leading-relaxed max-w-[220px]">
            I design beautifully simple things, And I love what I do.
          </p>
          <div className="flex flex-col items-center gap-2 lg:pb-44">
            <button className="rounded-full hover:scale-[1.02]  transition-all h-14 min-w-50 px-6 tracking-widest bg-select hover:bg-tertiary-hover text-secondary uppercase font-extrabold text-base text-center">
              <div className='flex items-center justify-center gap-2'>
                <span style={{ fontFamily: "'Caveat',cursive" }}>Download CV</span>
                <ArrowDownToLine width={25} height={25} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Socials — desktop only */}
      <div className='hidden lg:flex flex-col gap-6 absolute top-1/2 right-4 -translate-y-1/2 z-40'>
        {socials.map((item, i) => (
          <div key={i} className='bg-accent text-white hover:bg-accent-hover transition w-10 h-10 text-[22px] flex items-center justify-center rounded-full cursor-pointer'>
            {item.icon}
          </div>
        ))}
      </div>
    </section>
  );
}