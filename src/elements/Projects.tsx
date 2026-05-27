import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, FileText, ChevronLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 3,
    category: "applications",
    title: "Orders & Delivery",
    description:
      "At Nova Maroc, I developed an order/delivery tracking app that digitized manual processes, reducing errors and speeding up operations by 40%. The system featured real-time updates and automated reports.",
    image: "./images/Capture d'écran 2025-06-15 122052.png",
    pdf: "/Rapport_stage_MELIANE.pdf",
    link: "",
    github: "https://github.com/imane42377/Commandes-Livraison",
    teck: ["Python tkinter", "MySQL Workbench"],
    gradient: "from-[#829595] to-[#73d1d1]",
  },
  {
    id: 4,
    category: "applications",
    title: "Construction Permit Management",
    description:
      "During my internship at Ouled Mrah Municipality, I developed a web app to digitize construction permits and automate tax calculations. This replaced paper workflows, reducing delays and errors while improving transparency.",
    image: "./images/Capture d'écran 2025-07-12 162846.png",
    pdf: "/Mon-Rapport-Meliane.pdf",
    link: "",
    github: "",
    teck: ["VB.net", "SQL Server"],
    gradient: "from-violet-600/30 to-indigo-600/30",
  },
  {
    id: 5,
    category: "fullstack",
    title: "Library",
    description:
      "With 2 classmates, I developed 'Library' — a management system for cataloging books, tracking loans, and managing members. Delivered a working prototype in 3 weeks.",
    image: "./images/Capture d'écran 2025-07-12 181622.png",
    pdf: "/Rapport_gb.pdf",
    link: "",
    github: "https://github.com/imane42377/Library",
    teck: ["HTML", "CSS Bootstrap", "JavaScript jQuery", "PHP", "MySQL"],
    gradient: "from-blue-600/30 to-cyan-600/30",
  },
  {
    id: 6,
    category: "fullstack",
    title: "CliqRDV",
    description:
      "For my PFE, I co-developed a healthcare web app for online appointment booking. Our solution featured doctor scheduling and patient registration.",
    image: "./images/Capture d'écran 2025-07-12 184923.png",
    pdf: "/PFE_Rapport.pdf",
    link: "https://imane.rf.gd/a",
    github: "https://github.com/imane42377/PFE_-CliqRDV-",
    teck: ["HTML", "CSS Bootstrap", "JavaScript", "PHP", "MySQL"],
    gradient: "from-[#12d] to-[#39d496]",
  },
  {
    id: 7,
    category: "frontend",
    title: "Lumière Privé Landing Page",
    description:
      "This project focuses on creating a premium and elegant user experience inspired by luxury concierge services, with multi-language support & light/dark mode toggling.",
    image: "./images/Capture d'écran 2026-04-28 135313.png",
    pdf: "",
    link: "lumi-re-priv-e-xn4b.vercel.app/",
    github: "https://github.com/imane42377/Lumi-re-Priv-e",
    teck: ["i18n", "React", "Tailwind CSS", "Framer-Motion"],
    gradient: "from-[#e09641] to-[#e1b974]",
  },
  {
    id: 8,
    category: "frontend",
    title: "Ecommerce",
    description:
      "Modern ecommerce landing page (React + Tailwind) with multi-language support & light/dark mode toggling.",
    image: "./images/Capture d'écran 2026-05-02 133820.png",
    pdf: "",
    link: "https://e-commerce-landing-page-nine-lilac.vercel.app/",
    github: "https://github.com/imane42377/ECommerce_landing_page",
    teck: ["i18n", "React", "Tailwind CSS", "Framer-Motion"],
    gradient: "from-sky-600/30 to-blue-600/30",
  },
  {
    id: 9,
    category: "fullstack",
    title: "Trading Web Application",
    description:
      "TimeTravel – Crypto & Stock Investing Platform (Private, Commercial Project) with multi-language support & light/dark mode toggling.",
    image: "./images/Capture d'écran 2026-05-02 134518.png",
    pdf: "",
    link: "",
    github: "https://github.com/imane42377/TimeTravel-Crypto-Stock-Investing-Platform",
    teck: ["i18n", "React", "Tailwind CSS", "Redux", "SpringBoot", "MySQL", "CoinGecko API"],
    gradient: "from-green-600/30 to-emerald-600/30",
  },
  {
    id: 10,
    category: "frontend",
    title: "Portfolio",
    description:
      "My personal developer portfolio built with Next.js, featuring smooth animations, internationalization, and a polished dark/light theme.",
    image: "./images/Capture d'écran 2026-05-02 135321.png",
    pdf: "",
    link: "https://portfolio-meliane-imane.vercel.app",
    github: "https://github.com/imane42377/Portfolio",
    teck: ["i18n", "NextJs", "React", "Tailwind CSS", "Framer-Motion"],
    gradient: "from-[#8298ee] to-[#0c62b8]",
  },
  {
    id: 11,
    category: "frontend",
    title: "MY_Calculator",
    description: "A simple calculator with basic functions that I created.",
    image: "./images/Capture d'écran 2025-07-12 191901.png",
    pdf: "",
    link: "https://imane42377.github.io/My_Calculator/",
    github: "https://github.com/imane42377/My_Calculator",
    teck: ["HTML", "CSS", "JavaScript"],
    gradient: "from-amber-600/30 to-orange-600/30",
  },
];

const categories = ["all", "frontend", "fullstack", "applications"];

const categoryLabels: Record<string, string> = {
  all: "All",
  frontend: "Frontend",
  fullstack: "Full Stack",
  applications: "Applications",
};

// ─── 3D Carousel ────────────────────────────────────────────────────────────

interface CarouselProps {
  items: typeof projects;
  onSeeAll: () => void;
  activeTab: string;
  onTabChange: (cat: string) => void;
}

function Carousel3D({ items , onSeeAll , activeTab , onTabChange }: CarouselProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!items.length) return;

    const ctx = gsap.context(() => {
      const total = items.length;
      const isMobile = window.innerWidth < 768;
   const radius = isMobile ?(activeTab === 'all' ? 400: 280)  : (activeTab === 'all' ? 650 : 520);
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const theta = (i / total) * Math.PI * 2;
        gsap.set(card, {
          rotationY: (i / total) * 360,
          z: Math.cos(theta) * radius,
          x: Math.sin(theta) * radius,
          transformOrigin: "50% 50%",
          backfaceVisibility: "hidden",
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=3000`,
          scrub: 1,
          pin: true,
        },
      });

      const maxRotation = -360 * ((total - 1) / total);
      tl.to(carouselRef.current, { rotationY: maxRotation, ease: "none" });

      const onMouse = (e: MouseEvent) => {
        const rx = (e.clientY / window.innerHeight - 0.5) * -15;
        const rz = (e.clientX / window.innerWidth - 0.5) * 5;
        gsap.to(carouselRef.current, {
          rotationX: rx,
          rotationZ: rz,
          duration: 1.2,
          ease: "power2.out",
        });
      };
      window.addEventListener("mousemove", onMouse);
      return () => window.removeEventListener("mousemove", onMouse);
    }, sectionRef.current!);

    return () => ctx.revert();
  }, [items]);
  useGSAP(()=>{
    
  },[])
  return (
    <div
      ref={sectionRef}
      className="relative h-screen w-full flex flex-col items-center justify-center "
      style={{ perspective: "2200px" }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      {/* ✅ Category tabs inside the pin */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((cat) => {
          const count =
            cat === "all"
              ? projects.length
              : projects.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => onTabChange(cat)}
              style={{ fontFamily: "'Caveat', sans-serif" }}
              className={`tab-btn h-9 px-4 rounded-full text-2xl font-semibold transition-all duration-200 border
                ${
                  activeTab === cat
                    ? "bg-accent text-white border-accent shadow-lg shadow-accent-hover"
                    : "bg-transparent text-secondary"
                }
              `}
            >
              {categoryLabels[cat] ?? cat}
              {count > 0 && (
                <span
                  className={`ml-1.5 text-base ${
                    activeTab === cat ? "text-white/70" : "text-accent/50"
                  }`}
                  style={{ fontFamily: "'Caveat', sans-serif" }}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="relative w-full max-w-xs md:max-w-md h-[400px] md:h-[440px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {items.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="absolute w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
              style={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

              {/* Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover h-1/2 w-full opacity-40 group-hover:opacity-60"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col px-3 pt-3">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/60 mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.teck.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-[9px] px-2 py-0.5 rounded-full text-primary border"
                    >
                      {t}
                    </span>
                  ))}
                  {project.teck.length > 4 && (
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/50">
                      +{project.teck.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-accent text-white font-medium hover:bg-accent/80 transition-colors"
                    >
                      <ArrowUpRight size={12} /> Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/10"
                    >
                      <FaGithub size={12} /> GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Index indicator */}
              <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-black/40 border border-white/10 flex items-center justify-center">
                <span className="text-[10px] font-mono text-white/50">{i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <span
        className="absolute bottom-10 text-secondary flex items-center justify-center font-semibold text-xl uppercase"
        style={{ fontFamily: "'Caveat', sans-serif" }}
      >
        Scroll to rotate
      </span>
    </div>
  );
}

// ─── All Projects Grid ───────────────────────────────────────────────────────

interface AllProjectsProps {
  items: typeof projects;
  onClose: () => void;
}

function AllProjects({ items, onClose }: AllProjectsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-lg font-semibold text-white/70">
          All <span className="text-accent">Projects</span>
          <span className="ml-2 text-sm font-mono text-white/30">({items.length})</span>
        </h3>
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors font-mono"
        >
          <ChevronLeft size={12} /> Back to carousel
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {items.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.35 }}
            className="group relative rounded-2xl border border-white/8 bg-white/3 hover:border-accent/30 hover:bg-white/5 transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-40 overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`}
              />
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-400"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white/10">
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Body */}
            <div className="p-5">
              <span className="text-[9px] font-mono uppercase tracking-widest text-accent/60 mb-1 block">
                {project.category}
              </span>
              <h4 className="font-semibold text-white mb-2">{project.title}</h4>
              <p className="text-xs text-white/40 leading-relaxed line-clamp-2 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.teck.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent/80 border border-accent/15"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-accent text-white hover:bg-accent/80 transition-colors"
                  >
                    <ArrowUpRight size={11} /> Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-white/8 text-white/70 hover:bg-white/15 border border-white/10 transition-colors"
                  >
                    <FaGithub size={11} /> GitHub
                  </a>
                )}
                {project.pdf && (
                  <a
                    href={project.pdf}
                    download
                    className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-white/8 text-white/70 hover:bg-white/15 border border-white/10 transition-colors"
                  >
                    <FileText size={11} /> Report
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Main Projects Section ───────────────────────────────────────────────────

const Projects = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [showAll, setShowAll] = useState(false);

  const tabProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const handleTabChange = (cat: string) => {
    setActiveTab(cat);
    setShowAll(false);
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-screen py-24 xl:py-32"
    >
      <div className="container mx-auto w-full">

        {/* Header */}
        <div className="mb-10 xl:mb-14">
          <h2
            className="h2 flex items-center justify-center text-3xl lg:text-5xl text-accent whitespace-nowrap  font-bold"
            style={{ fontFamily: "'Caveat', sans-serif" }}
          >
            <span className="text-secondary pr-3">My Professional</span>
            Projects
          </h2>
        </div>

        {/* Content — tabs are now rendered inside Carousel3D when in carousel mode */}
        <AnimatePresence mode="wait">
          {tabProjects.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center h-60 text-muted-foreground text-sm border border-ring/10 rounded-2xl"
            >
              No projects in this category yet.
            </motion.div>
          ) : showAll ? (
            <motion.div
              key={`all-${activeTab}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Show tabs above the grid when in "all" view */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                {categories.map((cat) => {
                  const count =
                    cat === "all"
                      ? projects.length
                      : projects.filter((p) => p.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => handleTabChange(cat)}
                      style={{ fontFamily: "'Caveat', sans-serif" }}
                      className={`tab-btn h-9 px-4 rounded-full text-2xl font-semibold transition-all duration-200 border
                        ${
                          activeTab === cat
                            ? "bg-accent text-white border-accent shadow-lg shadow-accent-hover"
                            : "bg-transparent text-secondary"
                        }
                      `}
                    >
                      {categoryLabels[cat] ?? cat}
                      {count > 0 && (
                        <span
                          className={`ml-1.5 text-base ${
                            activeTab === cat ? "text-white/70" : "text-accent/50"
                          }`}
                          style={{ fontFamily: "'Caveat', sans-serif" }}
                        >
                          {count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              <AllProjects items={tabProjects} onClose={() => setShowAll(false)} />
            </motion.div>
          ) : (
            <motion.div
              key={`carousel-${activeTab}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Carousel3D
                items={tabProjects}
                onSeeAll={() => setShowAll(true)}
                activeTab={activeTab}
                onTabChange={handleTabChange}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.section>
  );
};

export default Projects;