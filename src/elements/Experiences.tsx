import GlowCard from "./GlowCard";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ExperienceData from "../Data/Experience_certificationSection.json";
import coursera from "../assets/course.png";
import PECB from "../assets/PECB.png";

gsap.registerPlugin(ScrollTrigger);

const Experiences = () => {
const { experiences, certifications } = ExperienceData;



const logoMap: Record<string, string> = {
  coursera,
  PECB,
};

  useGSAP(() => {
    gsap.utils.toArray('.timeline-card').forEach((card: any) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: 'left left',
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        }
      })
    })

    gsap.to('.timeline', {
      transformOrigin: 'bottom bottom',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: '70% center',
        onUpdate: (self) => {
          gsap.to('.timeline', {
            scaleY: 1 - self.progress,
          })
        }
      },

    })
    gsap.utils.toArray('.expText').forEach((text: any) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: text,
          start: 'top 60%',
        }
      })
    })
  }, [])
  return (
    <>
    <section
      id='experience'
      className='w-full px-5 md:px-10 overflow-hidden md:mt-30 mt-20 lg:px-36'
    >
      <div className='w-full h-full md:px-20 px-5 '>
        <p className="font-semibold md:text-5xl text-4xl text-center text-accent"
          style={{ fontFamily: "'Caveat', sans-serif" }}
        >
          <span className="pr-3 text-secondary">
            {experiences.sectionTitle.prefix}
          </span>
            {experiences.sectionTitle.highlight}
           
        </p>
      </div>
      <div className="mt-28 ">
        <div className="relative z-40 lg:space-y-25 space-y-10">
          {experiences.cards.map((card, index) => (
            <div key={card.title}
              className="flex flex-col-reverse lg:flex-row lg:gap-8 gap-6 justify-between">
              <div className="lg:w-2/6 timeline-card z-40">
                <GlowCard card={card} index={index}>
                  <div>
                    <img src={card.imgPath} alt={card.title} />
                  </div>
                </GlowCard>
              </div>
              <div className="lg:w-4/6">
                <div className="flex items-start">
                  <div className="timeline-wrapper">
                    <div className="timeline" />
                    <div className="gradient-line w-1 h-full" />
                  </div>

                  <div className="expText flex lg:gap-8 md:gap-6 gap-4 relative z-20">
                    {/* cercle */}
                    <div className="timeline-logo">
                      <div className="size-4 rounded-full" style={{ backgroundColor: card.color }} />
                    </div>
                    <div className="">
                      <h1 className="font-bold text-5xl text-accent"
          style={{ fontFamily: "'Caveat', sans-serif" }}
                      
                      >
                        {card.title}
                      </h1>
                      <p className="my-5 text-base text-secondary"
                        style={{ fontFamily: "'Caveat', sans-serif" }} 
                      >
                        {card.date}
                      </p>
                      <p className="text-ring italic font-semibold text-2xl"
                        style={{ fontFamily: "'Caveat', sans-serif" }}
                      >
                        Responsibilities
                      </p>
                      <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-secondary">
                        {card.responsibilities.map((res) => (
                          <li key={res} className="text-lg text-secondary"
                          style={{ fontFamily: "'Nunito', sans-serif" }}
                          >
                            {res}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>


      </div>
    </section>

    <section
      className="w-full px-5 md:px-10 lg:px-36 mt-20 md:mt-30 overflow-hidden"
    >
      {/* Heading */}
      <div className="flex flex-col items-center mb-10">
        <p className="text-5xl text-secondary font-semibold mb-2"
          style={{ fontFamily: "'Caveat', sans-serif" }}
        >
         {certifications.sectionTitle.prefix} <span className="text-accent">
          {certifications.sectionTitle.highlight}
          </span> 
        </p>
      </div>
 
      {/* Grid */}
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
        {certifications.cards.map((card) => (
          <div
            key={card.id}
            className="flex items-start gap-4 rounded-xl p-5 transition-colors hover:scale-[1.02] bg-background-sec duration-200"
          >
            {/* Logo */}
            <div
              className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center overflow-hidden"
            >
              <img 
              alt="image"
              src={logoMap[card.logo]}
              />
             
            </div>
 
            {/* Body */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-2xl leading-snug mb-1 text-primary"   style={{ fontFamily: "'Caveat', sans-serif" }}>
                {card.name}
              </p>
              <p className="text-xl mb-2 font-medium leading-relaxed text-secondary"   style={{ fontFamily: "'Caveat', sans-serif" }} >
                {card.issuer}
              </p>
              <p className="text-normal mb-3 flex items-center gap-1 text-secondary" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {card.duration}
              </p>
 
              {card.link && (
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:scale-[1.02] text-xs font-medium bg-primary rounded-full px-3 text-[#000] py-1 transition-colors duration-150"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  {card.btn}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Experiences