import { useEffect, useState } from "react";
import { AiOutlineSun } from "react-icons/ai";
import { AiOutlineMoon } from "react-icons/ai";

export default function ThemeToggle() {
  // Detecta el modo preferido del sistema al inicio
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || getSystemTheme()
  );

  useEffect(() => {
    // Aplica la clase "dark" al <html>
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Guarda la preferencia
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Función para alternar tema manualmente
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button
      onClick={toggleTheme}
      name="btn-theme-toggle"
      className=" transition-colors duration-300 text-naranja dark:text-white dark:hover:text-naranja hover:text-bg-dark"
    >
      {theme === "dark" ? <AiOutlineSun className="text-4xl outline-slate-50" /> : <AiOutlineMoon className="text-3xl " />}
    </button>
  );
}
