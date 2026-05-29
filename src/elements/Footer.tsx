export default function Footer() {
  return (
    <footer className="w-full bg-primary border-t border-white/10 px-6 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <span
          className="text-3xl text-secondary"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Zakariya
        </span>

        {/* Copyright */}
        <p className="text-secondary text-xl"
        style={{ fontFamily: "'Caveat',sans-serif" }}
        >
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

        {/* Nav links */}
        <nav className="flex items-center gap-3 lg:gap-6">
          {["Services",  "Experience","Skills","Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-base lg:text-lg font-medium tracking-widest uppercase text-secondary hover:text-accent transition-colors duration-200"
              style={{ fontFamily: "'Caveat',sans-serif" }}
            >
              {link}
            </a>
          ))}
        </nav>

      </div>
    </footer>
  );
}