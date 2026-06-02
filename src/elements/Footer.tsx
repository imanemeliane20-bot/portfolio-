import FooterData from "../Data/Footer.json";
import { useLenisScroll } from "../hooks/useLenisScroll";

const { logo, copyright, navLinks } = FooterData;

export default function Footer() {
  const scrollTo = useLenisScroll();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    scrollTo(`#${link.toLowerCase()}`);
  };

  return (
    <footer className="w-full bg-background border-t border-white/10 px-6 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <span
          className="text-3xl text-secondary font-caveat"
         
        >
          {logo}
        </span>

        {/* Copyright */}
        <p
          className="text-secondary font-caveat text-xl"
         
        >
          © {new Date().getFullYear()} {copyright}
        </p>

        {/* Nav links */}
        <nav className="flex items-center gap-3 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleClick(e, link)}
              className="text-base lg:text-lg font-caveat font-medium tracking-widest uppercase text-secondary hover:text-accent transition-colors duration-200"
             
            >
              {link}
            </a>
          ))}
        </nav>

      </div>
    </footer>
  );
}