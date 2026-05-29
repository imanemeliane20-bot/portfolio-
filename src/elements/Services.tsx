import { useState, useEffect } from "react";
import { FolderCode, Server } from "lucide-react";

// Custom hook for count-up animation
function useCountUp(target: number, duration: number = 1500, trigger: boolean = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    setCount(0);
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };

    requestAnimationFrame(step);
  }, [target, duration, trigger]);

  return count;
}

// Parses a stat like "65+" or "100%" into { number, suffix }
function parseStat(value: string): { number: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { number: 0, suffix: value };
  return { number: parseInt(match[1]), suffix: match[2] };
}

// Individual animated stat
function AnimatedStat({
  count,
  label,
  animate,
}: {
  count: string;
  label: string;
  animate: boolean;
}) {
  const { number, suffix } = parseStat(count);
  const animated = useCountUp(number, 1500, animate);

  return (
    <div className="flex flex-col">
      <h2
        className="text-5xl font-extrabold text-white"
        style={{ fontFamily: "'Caveat', sans-serif" }}
      >
        {animated}
        {suffix}
      </h2>
      <span
        className="text-white text-2xl mt-1"
        style={{ fontFamily: "'Caveat', sans-serif" }}
      >
        {label}
      </span>
    </div>
  );
}

const servicing = [
  {
    icon: <FolderCode size={36} />,
    title: "Frontend Development",
    details: "65 Projects",
    bg: "bg-[#BDA6CE]",
    heading: "What can I Provide ?",
    description:
      "I build responsive, pixel-perfect interfaces using React and TailwindCSS. From landing pages to complex dashboards, every detail is designed with performance and user experience in mind.",
    stats: [
      { count: "65+", label: "Projects Done" },
      { count: "3+", label: "Years Exp." },
    ],
  },
  {
    icon: <Server size={36} />,
    title: "Backend Development",
    details: "48 Projects",
    bg: "bg-[#81A6C6]",
    heading: "What can I Provide ?",
    description:
      "I design and build scalable backend systems using Node.js, Express, and databases like MongoDB and PostgreSQL. Clean architecture, secure endpoints, and fast response times.",
    stats: [
      { count: "48+", label: "Projects Done" },
      { count: "20+", label: "APIs Built" },
    ],
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-9 h-9"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 9l-3 3 3 3M16 9l3 3-3 3"
        />
        <rect x="4" y="3" width="16" height="4" rx="1" />
        <rect x="4" y="17" width="16" height="4" rx="1" />
      </svg>
    ),
    title: "FullStack Development",
    details: "32 Projects",
    bg: "bg-[#547792]",
    heading: "What can I Provide ?",
    description:
      "I handle everything from database design to UI delivery. Full ownership of the product lifecycle — authentication, deployment, performance optimization, and everything in between.",
    stats: [
      { count: "32+", label: "Projects Done" },
      { count: "100%", label: "Ownership" },
    ],
  },
];

const Services = () => {
  const [selected, setSelected] = useState(0);
  // animateKey changes every time selected changes, re-triggering the animation
  const [animateKey, setAnimateKey] = useState(0);
  const active = servicing[selected];

  const handleSelect = (i: number) => {
    setSelected(i);
    setAnimateKey((k) => k + 1);
  };

  return (
    <section id="services" className="relative bg-background-sec lg:px-36">
      <div className="lg:grid lg:grid-cols-2 items-center px-6 py-20">
        {/* LEFT — clickable cards */}
        <div className="flex flex-col gap-4 lg:pr-24 lg:w-auto lg:justify-self-end">
          {servicing.map((service, i) => (
            <div
              key={i}
              onClick={() => handleSelect(i)}
              className={`flex items-center gap-5 rounded-2xl pl-6 pr-10 py-6 shadow-sm cursor-pointer transition-all duration-300 ${
                selected === i
                  ? "bg-ring scale-[1.02]"
                  : "bg-background text-secondary"
              }`}
            >
              <div
                className={`${service.bg} text-white rounded-full w-16 h-16 flex items-center justify-center shrink-0`}
              >
                {service.icon}
              </div>
              <div>
                <p
                  className={`font-bold text-3xl ${selected === i ? "text-white" : "text-secondary"}`}
                  style={{ fontFamily: "'Caveat', sans-serif" }}
                >
                  {service.title}
                </p>
                <span
                  className={`text-md ${selected === i ? "text-white" : "text-secondary"}`}
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {service.details}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — dynamic content based on selected card */}
        <div
          key={selected}
          className="flex flex-col gap-6 mt-12 lg:mt-0 animate-fade-in"
        >
          <h1
            className="text-4xl lg:text-7xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "'Caveat', sans-serif" }}
          >
            {active.heading}
          </h1>
          <p
            className="text-white leading-relaxed text-base lg:text-xl lg:w-[550px]"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            {active.description}
          </p>

          {/* Animated Stats */}
          <div className="flex gap-12 mt-4">
            {active.stats.map((stat, i) => (
              <AnimatedStat
                key={`${animateKey}-${i}`}
                count={stat.count}
                label={stat.label}
                animate={true}
              
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;