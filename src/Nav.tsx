import { Hash, PhoneCallIcon } from "lucide-react";
import { useState } from "react";
import { ThemeSwitcher } from "./switcher/theme-switcher";
import NavData from "./Data/Nav.json";
import { useLenisScroll } from "./hooks/useLenisScroll";

export default function Nav() {
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { logo, phone, links } = NavData;
  const scrollTo = useLenisScroll();

  const handleNavClick = (link: { display: string; link: string }) => {
    scrollTo(link.link);
    setActiveLink(link.display);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-[rgba(60,80,90,0.08)]">
      <nav className="grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] max-w-7xl mx-auto px-3 lg:pr-36 h-[70px] items-center">

        {/* Logo */}
        <a  
          href="/"
          className="font-[Caveat,cursive] text-[2.5rem] font-semibold text-accent tracking-[-0.02em] no-underline select-none shrink-0"
        >
          <span className="font-bold">{logo.name}</span>
        </a>

        {/* Center links */}
        <ul className="hidden xl:flex items-center gap-5 list-none uppercase pr-5">
          {links.map((link) => (
            <li key={link.display}>
              <a  
                href={link.link}
                onClick={() => handleNavClick(link)}
                className={[
                  "font-[Montserrat,Georgia] text-[0.72rem] font-normal tracking-[0.12em] no-underline transition-colors duration-200 relative",
                  activeLink === link.display
                    ? "text-accent border-y-0 border-x-[1.5px] border-x-accent rounded-full px-[0.85rem] py-[0.3rem]"
                    : "text-secondary hover:text-accent",
                ].join(" ")}
              >
                <span className="font-semibold">{link.display}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center justify-end gap-4 shrink-0">
          <ThemeSwitcher />

          <a  
            href={phone.link}
            className="hidden lg:block font-nunito text-[0.82rem] font-light text-secondary tracking-[0.04em] no-underline transition-colors duration-200 hover:text-accent"
          >
            <span className="font-bold text-base">{phone.display}</span>
          </a>

          <button
            className="w-9 h-9 rounded-full border-[1.5px] border-accent flex items-center justify-center cursor-pointer text-accent bg-primary p-2 transition-all duration-200 hover:bg-accent hover:text-white"
            aria-label="Call us"
          >
            <PhoneCallIcon />
          </button>

          {/* Hamburger */}
          <button
            className="flex xl:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Hash className="text-accent hover:text-accent-hover" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={[
          "flex-col items-center justify-center bg-background px-10 border-b border-[rgba(60,80,90,0.08)] gap-[1.1rem] pb-6 pt-5",
          menuOpen ? "flex" : "hidden",
        ].join(" ")}
      >
        {links.map((link) => (
          <a
            key={link.display}
            href={link.link}
            onClick={() => {
              handleNavClick(link);
              setMenuOpen(false);
            }}
            className={[
              "font-[Montserrat,sans-serif] font-normal tracking-[0.1em] no-underline transition-colors duration-200",
              activeLink === link.display
                ? "text-accent text-base font-semibold"
                : "text-secondary text-[0.82rem] hover:text-foreground",
            ].join(" ")}
          >
            {link.display}
          </a>
        ))}

        <a href={phone.link} className="flex items-center justify-end">
          <PhoneCallIcon className="text-accent" />
          <span className="text-accent font-bold text-lg pl-3">{phone.display}</span>
        </a>
      </div>
    </header>
  );
}