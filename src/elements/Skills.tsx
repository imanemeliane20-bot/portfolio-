import { Database, FolderCode, Server, Wrench } from "lucide-react";
import TechIcon from "./TechIcon";
import sqlServerLogo from "../assets/SqlServer.svg";
import xamppLogo from "../assets/xampp.svg";
import { useState } from "react";
import SkillsData from "../Data/Skills.json";

const srcMap: Record<string, string> = {
  sqlServer: sqlServerLogo,
  xampp:     xamppLogo,
};

// Category SVG icons
const categoryIcons: Record<string, JSX.Element> = {
  Frontend: <FolderCode className="text-white" />,
  Backend:  <Server className="text-white" />,
  Databases:<Database className="text-white" />,
  Tools:    <Wrench className="text-white" />,
};

// Item types
type TechItemData =
  | { name: string; type?: string; src?: undefined; class: string }
  | { type: "custom"; name: string; src: string; class: string };

// Sub-components
const TechItem = ({ item, size = 50 }: { item: TechItemData; size?: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (item.type === "custom") {
    return (
      <div
        className="flex flex-col items-center justify-center transform hover:-translate-y-2 hover:scale-110 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="relative flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            width:      `${size * 0.7}px`,
            height:     `${size * 0.7}px`,
            transition: "all 0.3s ease-in-out",
            filter:     isHovered ? "drop-shadow(0 0 5px rgba(255,255,255,16))" : "none",
            animation:  isHovered ? "pulse-wave 2s ease-in-out infinite" : "none",
          }}
        >
          <img
            src={item.src}
            alt={item.name}
            className="select-none"
            style={{
              width:      `${size * 0.7}px`,
              height:     `${size * 0.7}px`,
              transition: "all 0.3s ease-in-out",
              animation:  isHovered ? "pulse-wave 2s ease-in-out infinite" : "none",
            }}
          />
        </div>
        <span
          className={`${item.class} mt-2 text-sm font-medium ${
            isHovered ? "opacity-100" : "opacity-70"
          } transition-all duration-300`}
        >
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

// Explicit category type derived from JSON shape
type CategoryData = (typeof SkillsData)["categories"][number];

const CategoryCard = ({ category }: { category: CategoryData }) => (
  <div className="w-full mb-16">
    <div className="mb-8 flex items-center">
      <div
        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.icon.gradient} flex items-center justify-center shadow-lg ${category.icon.shadow} mr-4 ${category.icon.rotate}`}
      >
        {categoryIcons[category.category]}
      </div>
      <div>
        <h3
          className="text-3xl font-bold text-secondary"
          style={{ fontFamily: "'Caveat', sans-serif" }}
        >
          {category.category}
        </h3>
        <div
          className={`h-[2px] ${category.underlineWidth} mt-1`}
          style={{
            background: `linear-gradient(to right, ${category.underlineColor}cc, transparent)`,
          }}
        />
      </div>
    </div>

    <div className={`grid grid-cols-2 sm:grid-cols-6 ${category.cols} gap-8`}>
      {category.items.map((item) => {
        // Resolve "sqlServer" / "xampp" string keys to actual imported SVG URLs
        const resolved: TechItemData =
        item.type === "custom" && "src" in item
  ? { ...item, type: "custom" as const, src: srcMap[item.src] ?? item.src }
            : item;

        return <TechItem key={item.name} item={resolved} />;
      })}
    </div>
  </div>
);

// Main section
export default function SkillsSection() {
  const { sectionTitle, categories } = SkillsData;

  return (
    <section
      id="skills"
      className="technologies w-full m-auto max-w-[1160px] px-[40px] mb-20"
    >
      <div className="technologies-content mt-[4em] flex flex-col items-center w-full">
        <div className="relative mb-16 flex flex-col items-center">
          <h2
            className="font-semibold my-7 relative text-5xl text-secondary"
            style={{ fontFamily: "'Caveat', sans-serif" }}
          >
            {sectionTitle.prefix}{" "}
            <span className="pl-3 text-accent">{sectionTitle.highlight}</span>
          </h2>
        </div>

        {categories.map((category) => (
          <CategoryCard key={category.category} category={category} />
        ))}
      </div>
    </section>
  );
}