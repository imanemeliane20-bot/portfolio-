import GlowCard from "./GlowCard";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import coursera from "../assets/course.png";
import PECB from "../assets/PECB.png";

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
const certCards = [
  {
    id: 1,
    name: "React Basics",
    issuer: "Course Certificate — At Coursera",
    duration: "September 28, 2025",
    link: "ttps://coursera.org/share/b0bece9b26ca159a97362f7a18b6d8c9",
    btn: "See the Certificate",
    logo: coursera,
  },
  {
    id: 2,
    name: "Advanced React",
    issuer: "Course Certificate — At Coursera",
    duration: "November 16, 2025",
    link: "https://coursera.org/share/d1411a2891b040355a030cbcce374c41",
    btn: "See the Certificate",
    logo: coursera,
  },
  {
    id: 3,
    name: "ISO 21502 Foundation",
    issuer: "Course Certificate — At PECB",
    duration: "February 25, 2026",
    link: "https://mypecb-prod.s3-accelerate.amazonaws.com/UserCertificates/216633/9706159-2026-02_2026-02-25_.pdf?AWSAccessKeyId=AKIAXV2EUQMVAMPDSZVG&Expires=1780063157&Signature=35zVhhv0r0bDr%2BjzlgXbcgtsiNI%3D",
    btn: "See the Certificate",
    logo: PECB,
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

    <section
      className="w-full px-5 md:px-10 lg:px-36 mt-20 md:mt-30 overflow-hidden"
    >
      {/* Heading */}
      <div className="flex flex-col items-center mb-10">
        <p className="text-5xl text-secondary font-semibold mb-2"
          style={{ fontFamily: "'Caveat', sans-serif" }}
        >
         My <span className="text-accent">
          Certifications
          </span> 
        </p>
      </div>
 
      {/* Grid */}
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
        {certCards.map((card) => (
          <div
            key={card.id}
            className="flex items-start gap-4 rounded-xl border p-5 transition-colors hover:scale-[1.02] bg-ring duration-200"
          >
            {/* Logo */}
            <div
              className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center overflow-hidden"
            >
              <img 
              alt="image"
              src={card.logo}
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
                  className="inline-flex items-center gap-1 hover:scale-[1.02] text-xs font-medium bg-primary rounded-full px-3 text-secondary py-1 transition-colors duration-150"
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