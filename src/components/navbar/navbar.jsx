import ThemeToggle from "../themeprovider.jsx";
import { GoHome } from "react-icons/go";
import { IoMailOutline, IoCodeSlashOutline } from "react-icons/io5";
import { RiUser3Line } from "react-icons/ri";
import { useEffect, useState } from "react";

const sections = ["hero", "about", "skills", "contact"];

function IconWrapper({ children, active }) {
  return (
    <div
      className={`
        text-2xl transition-colors duration-200
        ${active ? "text-mars" : "text-dark-bg dark:text-light-bg opacity-70"}
      `}
    >
      {children}
    </div>
  );
}

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handler = () => {
      const middle = window.innerHeight / 2;

      let current = "hero";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= middle && rect.bottom >= middle) {
          current = id;
        }
      });

      setActive(current);
    };

    handler(); // ejecutar al cargar
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className="fixed h-full top-0 z-50">
      <div className="hidden h-full px-6 py-16 md:flex flex-col justify-between items-center">
        <h1
          className="text-6xl font-bold ms-20 tracking-widest font-audiowide relative"
          style={{
            color: "#EB3E1B",
            textShadow: `
      -6px 6px 10px rgba(255,176,145,0.30),
      0 0 20px rgba(235,62,27,0.35),
      0 0 30px rgba(235,62,27,0.15)
    `,
          }}
        >
          DSM
        </h1>

        <ul
          className="flex flex-col space-y-6
                       dark:bg-dark-bg-secondary/20 bg-light-bg/20 backdrop-blur
                       rounded-full px-3 py-4
                       border border-white/30 dark:border-white/10 shadow-lg"
        >
          <li>
            <a href="#hero">
              <IconWrapper active={active === "hero"}>
                <GoHome />
              </IconWrapper>
            </a>
          </li>

          <li>
            <a href="#about">
              <IconWrapper active={active === "about"}>
                <RiUser3Line />
              </IconWrapper>
            </a>
          </li>

          <li>
            <a href="#skills">
              <IconWrapper active={active === "skills"}>
                <IoCodeSlashOutline />
              </IconWrapper>
            </a>
          </li>

          <li>
            <a href="#contact">
              <IconWrapper active={active === "contact"}>
                <IoMailOutline />
              </IconWrapper>
            </a>
          </li>
        </ul>

        <ThemeToggle />
      </div>
    </nav>
  );
}
