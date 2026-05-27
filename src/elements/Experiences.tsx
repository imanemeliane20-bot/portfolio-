import GlowCard from "./GlowCard";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const expCards = [
  {
    review:
      "Zakariya brought exceptional frontend skills and a keen eye for detail to our team. His ability to translate complex designs into pixel-perfect, performant interfaces made a huge impact on our product.",
    color: '#374ced',
    imgPath: "",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "March 2022 - Present",
    responsibilities: [
      "Built responsive, accessible UI components using React and Tailwind CSS.",
      "Improved Lighthouse performance scores from 62 to 94 across key landing pages.",
      "Collaborated with product and design teams to ship new features on a two-week sprint cycle.",
    ],
  },
  {
    review:
      "Zakariya consistently delivered clean, well-documented code and was a go-to person for tricky CSS and animation challenges. he elevated the quality bar for the entire frontend team.",
    color: '#91e4cc',
    imgPath: "",
    logoPath: "/images/logo2.png",
    title: "UI Engineer",
    date: "August 2020 - February 2022",
    responsibilities: [
      "Developed and maintained a shared component library used across 5 internal products.",
      "Implemented complex animations and micro-interactions using Framer Motion.",
      "Conducted code reviews and mentored junior developers on frontend best practices.",
    ],
  },
  {
    review:
      "Zakariya hit the ground running from day one. he quickly became the team's expert on cross-browser compatibility and helped us migrate our legacy jQuery codebase to modern React.",
    color: '#9c83ca',
    imgPath: "",
    logoPath: "/images/logo3.png",
    title: "Junior Web Developer",
    date: "June 2018 - July 2020",
    responsibilities: [
      "Migrated a legacy jQuery codebase to React, reducing bundle size by 40%.",
      "Built and styled marketing landing pages from Figma designs with high fidelity.",
      "Worked closely with the QA team to identify and resolve cross-browser compatibility issues.",
    ],
  },
];
const Experiences = () => {
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
    <section
      id='experience'
      className='w-full px-5 md:px-10 overflow-hidden md:mt-30 mt-20 lg:px-36'
    >
      <div className='w-full h-full md:px-20 px-5 '>
        <p className="font-semibold md:text-5xl text-4xl text-center text-accent"
          style={{ fontFamily: "'Caveat', sans-serif" }}
        >
          <span className="pr-3 text-secondary">
            My Professinal
          </span>
           Work Experience
        </p>
      </div>
      <div className="mt-28 ">
        <div className="relative z-40 lg:space-y-25 space-y-10">
          {expCards.map((card, index) => (
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
  )
}

export default Experiences