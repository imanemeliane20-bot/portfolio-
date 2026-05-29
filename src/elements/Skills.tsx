import { Database, FolderCode, Server, Wrench } from "lucide-react";
import TechIcon from "./TechIcon";
import sqlServerLogo from "../assets/SqlServer.svg";
import xamppLogo from "../assets/xampp.svg";
import { useState } from "react";

// Data
const technologies = [
  {
    category: "Frontend",
    icon: { gradient: "from-[#91e4cc] to-[#91e4cc]", shadow: "shadow-[#91e4cc]", rotate: "rotate-3" },
    underlineColor: "#91e4cc",
    underlineWidth: "w-32",
    cols: "lg:grid-cols-7",
    items: [
      { name: "NextJS" ,class:"text-[#3a3b3b]"},
      { type: "techicon", name: "Redux" ,class:"text-[#7b43c9]" },
      { name: "Tailwind CSS",class:"text-[#40a2f2]" },
      { name: "React",class:"text-[#35a4ff]" },
      { name: "JavaScript" ,class:"text-[#d1c410]" },
      { name: "TypeScript" ,class:"text-[#2a6ca1]" },
      { name: "Python" ,class:"text-[#2a6ca1]" },
      { name: "C#" ,class:"text-[#6730b3]" },
      { name: "PHP" ,class:"text-[#473652]" },
      { type: "techicon", name: "GSAP",class:"text-[#2eaa3f]" },
{ type: "techicon", name: "Framer Motion",class:"text-secondary" },
    ],
  },
  {
    category: "Backend",
    icon: { gradient: "from-[#9c83ca] to-[#9c83ca]", shadow: "shadow-[#9c83ca]", rotate: "-rotate-3" },
    underlineColor: "#9c83ca",
    underlineWidth: "w-40",
    cols: "md:grid-cols-6",
    items: [
      { name: "Java",class:"text-[#2a6ca1]"},
      { name: "Spring Boot" ,class:"text-[#2aa13a]"},
      { name: "Flask" ,class:"text-[#3a3b3b]"},
      { name: ".NET" ,class:"text-[#503ce6]"},
      { name: "Node.js" ,class:"text-[#4e9f2c]"},
    ],
  },
  {
    category: "Databases",
    icon: { gradient: "from-[#2196F3] to-[#03A9F4]", shadow: "shadow-[#2196F3]", rotate: "rotate-2" },
    underlineColor: "#2196F3",
    underlineWidth: "w-28",
    cols: "md:grid-cols-6",
    items: [
      { name: "MySQL" ,class:"text-[#2a6ca1]" },
      { name: "MongoDB" ,class:"text-[#237d2f]" },
      { name: "Firebase" ,class:"text-[#ffab3d]" },
      { type: "custom", name: "SQL Server", src: sqlServerLogo, class: "text-[#d41818]" },
    ],
  },
  {
    category: "Tools",
    icon: { gradient: "from-[#d41818] to-[#ffab3d]", shadow: "shadow-[#d41818]", rotate: "-rotate-2" },
    underlineColor: "#FF6B6B",
    underlineWidth: "w-16",
    cols: "md:grid-cols-6",
    items: [
      { name: "Git" ,class:"text-[#e24c2a]" },
      { name: "Figma" ,class:"text-[#b472ff]" },
      { name: "Postman" ,class:"text-[#eb6724]" },
            { type: "custom", name: "XAMPP", src: xamppLogo, class:"text-[#ff8636]" },
    ],
  },
];

// Category SVG icons
const categoryIcons: Record<string, JSX.Element> = {
  Frontend: (
      <FolderCode className="text-white" />
  ),
  Backend: (
      <Server className="text-white" />
  ),
  Databases: (
      <Database className="text-white" />
  ),
  Tools: (
          <Wrench className="text-white" />
  ),
};

// Item types
type TechItemData =
  | { name: string; type?: undefined ,src?:undefined,class:string }
  | { type: "custom"; name: string; src: string ,class:string };

// Sub-components
const TechItem = ({ item ,size=50}: { item: TechItemData ,size?:number}) => {
    const [isHovered, setIsHovered] = useState(false);
  if (item.type === "custom") {
    
    return (
      <div className={`flex flex-col items-center justify-center transform hover:-translate-y-2 hover:scale-110 transition-all duration-300`}
        onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="relative flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 ease-in-out"
            
               style={{
                
    width:     `${size * 0.7}px`,
    height:    `${size * 0.7}px`,
    transition: 'all 0.3s ease-in-out',
    filter:    isHovered ? 'drop-shadow(0 0 5px rgba(255,255,255,0.5))' : 'none',
    animation: isHovered ? 'pulse-wave 2s ease-in-out infinite' : 'none',
  }} 
        >
          <img
  src={item.src}
  alt={item.name}
  className="select-none"
  style={{
    width:     `${size * 0.7}px`,
    height:    `${size * 0.7}px`,
    transition: 'all 0.3s ease-in-out',
    animation: isHovered ? 'pulse-wave 2s ease-in-out infinite' : 'none',
  }}
/>
        </div>
        <span className={`${item.class} mt-2 text-sm font-medium  ${isHovered ? 'opacity-100' : 'opacity-70'} transition-all duration-300`}>
          {item.name}
        </span>
      </div>
    );
  }

  return (
    <TechIcon
      name={item.name}
      src={item.src}
      type={item.type}
      className={`${item.class} transform hover:-translate-y-2 hover:scale-110 transition-all duration-300`}
    />
  );
};

const CategoryCard = ({ category }: { category: typeof technologies[0] }) => (
  <div className="w-full mb-16">
    <div className="mb-8 flex items-center">
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.icon.gradient} flex items-center justify-center shadow-lg ${category.icon.shadow} mr-4 ${category.icon.rotate}`}>
        {categoryIcons[category.category]}
      </div>
      <div>
        <h3 className="text-3xl font-bold text-secondary" style={{ fontFamily: "'Caveat', sans-serif" }}>
          {category.category}
        </h3>
        <div
          className={`h-[2px] ${category.underlineWidth} mt-1`}
          style={{ background: `linear-gradient(to right, ${category.underlineColor}cc, transparent)` }}
        />
      </div>
    </div>

    <div className={`grid grid-cols-2 sm:grid-cols-3 ${category.cols} gap-8`}>
      {category.items.map((item:any) => (
        <TechItem key={item.name} item={item} />
      ))}
    </div>
  </div>
);

// Main section
export default function SkillsSection() {
  return (
    <section id="skills" className="technologies w-full m-auto max-w-[1160px] px-[40px] mb-20">
      <div className="technologies-content mt-[4em] flex flex-col items-center w-full">
        <div className="relative mb-16 flex flex-col items-center">
          <h2 className="font-semibold my-7 relative text-5xl text-secondary" style={{ fontFamily: "'Caveat', sans-serif" }}>
            My <span className="pl-3 text-accent">Skills</span>
          </h2>
        </div>

        {technologies.map((category) => (
          <CategoryCard key={category.category} category={category} />
        ))}
      </div>
    </section>
  );
}