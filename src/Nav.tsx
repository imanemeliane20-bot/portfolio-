import { Hash, PhoneCallIcon } from "lucide-react";
import { useState } from "react";
import { ThemeSwitcher } from "./switcher/theme-switcher";
import NavData from "./Data/Nav.json";

export default function Nav() {
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const {logo , phone , links}=NavData;

  return (
    <>
      <style>{`
        .nav-wrapper {
          width: 100%;
          height: 70px;
          align-items: center;
          border-bottom: 1px solid rgba(60, 80, 90, 0.08);
        }

        /* Logo */
        .nav-logo {
          font-family: 'Caveat', cursive;
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--accent);
          letter-spacing: -0.02em;
          text-decoration: none;
          user-select: none;
          flex-shrink: 0;
        }

        /* Center nav links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          list-style: none;
        }

        .nav-links a {
          font-family: 'Montserrat', Georgia;
          font-size: 0.72rem;
          font-weight: 400;
          letter-spacing: 0.12em;
          color: var(--secondary);
          text-decoration: none;
          transition: color 0.2s ease;
          position: relative;
        }

        .nav-links a:hover {
          color: var(--accent);
        }

        /* Active pill style */
        .nav-links a.active {
        color: var(--accent);
        border-top: 1.5px solid transparent;
        border-bottom: 1.5px solid transparent;
        border-left: 1.5px solid var(--accent);
        border-right: 1.5px solid var(--accent);
        border-radius: 999px;
        padding: 0.3rem 0.85rem;
}

        /* Right side */
        .nav-right {
          display: flex;
          gap: 1rem;
          flex-shrink: 0;
        }

        .nav-phone {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 300;
          color: var(--secondary);
          letter-spacing: 0.04em;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .nav-phone:hover {
          color: var(--accent);
        }

        .nav-phone-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1.5px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--accent);
          transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
        }

        .nav-phone-btn:hover {
          border-color: var(--accent);
          background: var(--accent);
          color: #fff;
        }

        /* Mobile hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }

        .hamburger span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: var(--accent);
          transition: all 0.25s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }

        /* Mobile dropdown */
     .mobile-menu {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--bg);
  padding: 1.25rem 2.5rem 1.5rem;
  border-bottom: 1px solid rgba(60, 80, 90, 0.08);
  gap: 1.1rem;
}
        .mobile-menu.open {
          display: flex;
        }

        .mobile-menu a {
          font-family: 'monsettat', sans-serif;
          font-size: 0.82rem;
          font-weight: 400;
          letter-spacing: 0.1em;
          color: var(--secondary);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .mobile-menu a.active {
          color: var(--accent);
          font-size: 1rem;  
          font-weight: 600; 
        }

        .mobile-menu a:hover {
          color: var(--text-primary);
        }

        @media (max-width: 720px) {
          .nav-links,
          .nav-phone {
            display: none;
          }

          .hamburger {
            display: flex;
          }

          .mobile-menu {
            display: none;
          }

          .mobile-menu.open {
            display: flex;
          }
        }
      `}</style>

      <header className="sticky top-0 z-50 bg-background">
        <nav className="nav-wrapper grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] max-w-7xl mx-auto px-3 lg:pr-36">
          {/* Logo */}
          <a href="/" className="nav-logo">
          <span className="font-bold">
             {logo.name}
          </span>
         
          </a>

          {/* Center links */}
          <ul className="hidden xl:flex nav-links uppercase pr-5">
            {links.map((link) => (
              <li key={link.display}>
                <a
                  href={link.link}
                  className={activeLink === link.display ? "active" : ""}
                  onClick={() => {
                    setActiveLink(link.display);
                  }}
                  
                >
                  <span className="font-semibold ">
                      {link.display}
                  </span>
                
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="nav-right flex items-center justify-end">
            <ThemeSwitcher />
            <a href={phone.link} className="nav-phone">
              <span className="font-bold text-base">
                 {phone.display}
              </span>
             
            </a>
            <button className="nav-phone-btn bg-primary p-2" aria-label="Call us">
              <PhoneCallIcon className="" />
            </button>

            {/* Hamburger */}
            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
              >
              <Hash className="text-accent hover:text-accent-hover" />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.display}
              href={link.link}
              className={activeLink === link.display ? "active" : ""}
              onClick={() => {
                setActiveLink(link.display);
                setMenuOpen(false);
              }}
            >
              {link.display}
            </a>
          ))}
          <a className="flex items-center justify-end"
           href={phone.link}>
            <PhoneCallIcon className="text-accent" />
            <span className="text-accent font-bold text-lg pl-3">
                {phone.display}
            </span>
          
            </a>
        </div>
      </header>
    </>
  );
}