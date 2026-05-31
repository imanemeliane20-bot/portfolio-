import brush from '../assets/clearBrushing.png'
import avatar from '../assets/avatar.png'
import { ArrowDownToLine, Mail, MapPin, X } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { BiLogoDribbble, BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi"
import CountUp from 'react-countup';
import HeroData from "../Data/Hero.json";

const socialIcons: Record<string, JSX.Element> =
{
  facebook: <BiLogoFacebook />,
  instagram: <BiLogoInstagram />,
  X: <BiLogoDribbble />,
  linkedin: <BiLogoLinkedin />,
}

export default function Hero() {
  const { greeting, name, typeAnimation, tagline, experience, email, location, cv, socials } = HeroData;
  const sequence = typeAnimation.flatMap((text) => [text, 2000]);
  return (
    <section className='lg:pl-24 overflow-hidden'>

      {/* ── DESKTOP layout ── */}
      <div className="flex flex-col lg:grid max-w-7xl mx-auto grid-cols-[1fr_1.3fr_1fr] items-stretch px-10 py-2 lg:pr-36 ">

        {/* Left column */}
        <div className="flex flex-col justify-between z-10">
          <h1 style={{ fontFamily: "'Caveat',sans-serif" }} className="text-4xl lg:text-8xl whitespace-nowrap font-bold text-secondary leading-normal">
            {greeting} <br />{name}<br />
            <TypeAnimation
              sequence={sequence}
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
                href={email.link}
                className="pl-5 text-accent hover:text-secondary font-medium text-lg underline">
                {email.display}
              </a>
            </div>
            <div className='hidden lg:flex items-center lg:pb-10'>
              <MapPin className='text-accent hover:text-tertiary cursor-pointer' />
              <span className='pl-5 text-accent hover:text-secondary font-medium text-base cursor-pointer '>{location}</span>
            </div>
          </div>
          <div className="hidden lg:flex items-baseline pb-32 pt-6 gap-2">
            <div className='flex items-baseline gap-1' style={{ fontFamily: "'Caveat',sans-serif" }}>
              <span className="text-5xl font-extrabold text-secondary">+</span>
              <CountUp
                end={experience.count}
                duration={2}
                delay={0.5}
                className="text-5xl font-extrabold text-secondary"
              />
            </div>
            <span className="text-4xl font-bold tracking-widest text-secondary uppercase"
              style={{ fontFamily: "'Caveat',sans-serif" }}
            >
              {experience.displayYear} <br /> {experience.displayExperience}
            </span>
          </div>
          <p className="lg:hidden text-base text-secondary lg:font-medium font-semibold leading-relaxed lg:max-w-[220px] max-w-[280px]">
            {tagline}
          </p>
        </div>

        {/* Center column */}
        <div className="relative flex-[1.5] flex items-end justify-center select-none">
          <img src={brush} alt="brush" className="absolute w-[350px] h-[380px] lg:w-[470px] lg:h-[630px] z-0" />
          <img src={avatar} alt="personelPhoto"
            className="relative flex bottom-0 left-[160px] lg:top-[60px] lg:left-[200px] -translate-x-1/2 z-10 h-[380px] lg:h-[580px] object-contain drop-shadow-lg" />
        </div>

        {/* button for mobile */}
        <div className="lg:hidden flex flex-col items-center gap-2 py-4">
          <button className="rounded-full transition-all h-14 min-w-50 px-6 tracking-widest bg-select hover:bg-tertiary-hover text-secondary uppercase font-extrabold text-base text-center">
            <div className='flex items-center justify-center gap-2  '>
              <span style={{ fontFamily: "'Caveat',cursive" }}>{cv.display}</span>
              <ArrowDownToLine width={25} height={25} />
            </div>
          </button>
        </div>

        {/* socials for mobile */}
        <div className='lg:hidden flex flex-col gap-4 absolute top-[410px] right-4 -translate-y-1/2 z-40'>
          {socials.map((item, i) => (
            <div key={i} className='bg-accent text-white hover:bg-accent-hover transition w-10 h-10 text-[22px] flex items-center justify-center rounded-full cursor-pointer'>
              {socialIcons[item.name]}
            </div>
          ))}
        </div>

        {/* location and email for mobile */}
        <div className='lg:hidden flex items-center pb-5'>
          <Mail className='text-accent hover:text-tertiary cursor-pointer' />
          <a style={{ fontFamily: "'Montserrat',sans-serif" }}
            href={email.link}
            className="pl-5 text-accent hover:text-tertiary font-medium text-base underline">
            {email.display}
          </a>
        </div>

        {/* location mobile */}
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
            <button className="rounded-full hover:scale-[1.02]  transition-all h-14 min-w-50 px-6 tracking-widest bg-select hover:bg-tertiary-hover text-secondary uppercase font-extrabold text-base text-center">
              <div className='flex items-center justify-center gap-2'>
                <span style={{ fontFamily: "'Caveat',cursive" }}>{cv.display}</span>
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
            {socialIcons[item.name]}

          </div>
        ))}
      </div>
    </section>
  );
}