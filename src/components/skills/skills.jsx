import { useState } from "react";
import { useEffect } from "react";

export default function Skills() {
  const [selectedTech, setSelectedTech] = useState(null);
  const [isStopped, setIsStopped] = useState(false);
  const [rotation] = useState(0);

  const logos = [
    "csharp",
    "python",
    "java",
    "html",
    "css",
    "bootstrap",
    "tailwindcss",
    "javascript",
    "react",
    "php",
    "symfony",
    "git",
  ];

  const techInfo = {
    html: {
      name: "HTML",
      description:
        "Lenguaje de marcado estándar para la estructura semántica de la web.",
      utilidad: "Estructuración de interfaces web accesibles y optimizadas.",
      nivel: "Avanzado",
      parte: "Frontend",
      color1: "#E34F26",
      color2: "#F06529",
    },
    css: {
      name: "CSS",
      description:
        "Lenguaje de estilos para el diseño visual y responsive de interfaces.",
      utilidad: "Maquetación, diseño adaptable y personalización de UI.",
      nivel: "Avanzado",
      parte: "Frontend",
      color1: "#1572B6",
      color2: "#2965F1",
    },
    javascript: {
      name: "JavaScript",
      description:
        "Lenguaje fundamental para la lógica y la interacción en aplicaciones web.",
      utilidad: "Frontend dinámico, validaciones, consumo de APIs.",
      nivel: "Intermedio",
      parte: "Frontend / Backend",
      color1: "#F7DF1E",
      color2: "#F7DF1E ",
    },
    php: {
      name: "PHP",
      description:
        "Lenguaje backend ampliamente utilizado en el desarrollo web.",
      utilidad: "Aplicaciones web dinámicas, autenticación y APIs.",
      nivel: "Intermedio-Avanzado",
      parte: "Backend",
      color1: "#777BB4",
      color2: "#777BB4",
    },
    bootstrap: {
      name: "Bootstrap",
      description: "Framework CSS orientado a componentes y diseño responsive.",
      utilidad: "Prototipado rápido y diseño web consistente.",
      nivel: "Intermedio",
      parte: "Frontend",
      color1: "#563d7c",
      color2: "#563d7c",
    },
    tailwindcss: {
      name: "Tailwind CSS",
      description:
        "Framework CSS utility-first para interfaces altamente personalizadas.",
      utilidad: "Diseño moderno, escalable y optimizado.",
      nivel: "Intermedio",
      parte: "Frontend",
      color1: "#1ea3ba",
      color2: "#12c9b7",
    },
    symfony: {
      name: "Symfony",
      description:
        "Framework PHP orientado a arquitectura MVC y buenas prácticas.",
      utilidad: "Aplicaciones web estructuradas y escalables.",
      nivel: "Intermedio",
      parte: "Backend",
      color1: "#000000",
      color2: "#FFFFFF",
    },
    react: {
      name: "React",
      description:
        "Librería para la construcción de interfaces de usuario basadas en componentes.",
      utilidad: "Aplicaciones SPA y frontends modernos.",
      nivel: "Básico-Intermedio",
      parte: "Frontend",
      color1: "#52c0de",
      color2: "#52c0de",
    },
    git: {
      name: "Git",
      description: "Sistema de control de versiones distribuido.",
      utilidad: "Gestión de código fuente y trabajo colaborativo.",
      nivel: "Intermedio",
      parte: "Herramientas",
      color1: "#f24e29",
      color2: "#f24e29",
    },
    java: {
      name: "Java",
      description:
        "Lenguaje robusto y multiplataforma ampliamente usado en entornos empresariales.",
      utilidad:
        "Backend, aplicaciones de escritorio y arquitectura orientada a objetos.",
      nivel: "Intermedio",
      parte: "Backend",
      color1: "#5482a1",
      color2: "#e87000",
    },
    python: {
      name: "Python",
      description:
        "Lenguaje interpretado de alto nivel, enfocado a productividad y claridad.",
      utilidad:
        "Automatización de tareas, scripting y bases de análisis de datos.",
      nivel: "Básico-Intermedio",
      parte: "Backend",
      color1: "#3670a0",
      color2: "#ffce3e",
    },
    csharp: {
      name: "C#",
      description:
        "Lenguaje tipado orientado a objetos dentro del ecosistema .NET.",
      utilidad:
        "Aplicaciones de escritorio, lógica de backend y desarrollo de videojuegos con Unity.",
      nivel: "Intermedio",
      parte: "Backend",
      color1: "#9b4f96",
      color2: "#68217a",
    },
  };

  function handleClick(tech) {
    const index = logos.indexOf(tech);
    const angle = 360 / logos.length;
    const rotation = -(index * angle);

    document.documentElement.style.setProperty(
      "--manual-rotation",
      `${rotation}deg`,
    );

    setSelectedTech(tech);
    setIsStopped(true);
  }

  function closeInfo() {
    setSelectedTech(null);
    setIsStopped(false);
  }

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeInfo();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="skills" className="pt-20 max-w-5xl mx-auto px-4 text-start">
      <div className="max-w-5xl mx-auto px-4 mt-12 relative">
        <div className="absolute -top-8 text-mars/20 text-7xl font-bold font-audiowide select-none">
          SKILLS
        </div>

        {/* Cabecera */}
        <div className="flex items-center gap-6 ">
          <h2 className="text-4xl font-extrabold text-mars relative tracking-wider">
            Skills
            <span className="block w-14 h-1 bg-mars rounded-full mt-1"></span>
          </h2>
        </div>
      </div>
      <div className={`banner ${isStopped ? "paused" : ""}`}>
        <div
          className={`slider ${isStopped ? "stopped" : ""}`}
          style={{
            "--quantity": logos.length,
            "--rotation": `${rotation}deg`,
          }}
        >
          {logos.map((tech, i) => (
            <div
              key={i}
              className={`item ${selectedTech === tech ? "selected" : ""}`}
              onClick={() => handleClick(tech)}
              style={{ "--position": i + 1 }}
            >
              <img src={`img/${tech}.svg`} alt={tech} />
            </div>
          ))}
        </div>
      </div>

      {selectedTech && (
        <div onClick={closeInfo}>
          <div className="flex justify-center mt-12 mb-40 px-4">
            <div
              className="relative w-full max-w-md p-8 rounded-2xl
      bg-light-bg-secondary/60 dark:bg-dark-bg/60
      border border-naranja/30 dark:border-white/20
      backdrop-blur-md shadow-2xl animate-fadeIn
      transition-all duration-300
      hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow sutil */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-naranja/10 to-transparent pointer-events-none"></div>

              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide">
                  {techInfo[selectedTech].name}
                </h2>

                {/* Badge */}
                <span
                  className="inline-block mt-3 px-4 py-1 text-sm font-semibold tracking-wider uppercase rounded-full
          bg-naranja/20 text-naranja border border-naranja/30"
                >
                  {techInfo[selectedTech].parte}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-naranja/40 to-transparent mb-6"></div>

              {/* Contenido */}
              <div className="space-y-4 text-sm leading-relaxed">
                <div>
                  <p className="text-sm uppercase tracking-wider text-naranja/70 mb-1">
                    Descripción
                  </p>
                  <p>{techInfo[selectedTech].description}</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-naranja/70 mb-1">
                    Utilidad
                  </p>
                  <p>{techInfo[selectedTech].utilidad}</p>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-sm uppercase tracking-wider text-naranja/70">
                    Nivel
                  </span>

                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold
            bg-naranja/20 text-naranja border border-naranja/30"
                  >
                    {techInfo[selectedTech].nivel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Datos rápidos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          className="flex flex-col items-center text-center
                  p-8 rounded-2xl
                  bg-light-bg-secondary/40 dark:bg-dark-bg/40
                  border border-naranja/30 dark:border-white/20"
        >
          <img
            src="/img/progamming.png"
            alt="Desarrollo web"
            className="w-28 h-28 object-contain mb-5"
          />

          <h3 className="text-xl font-semibold text-mars mb-3">
            Desarrollo web
          </h3>

          <p
            className="text-sm leading-relaxed max-w-xs
                  text-dark-bg dark:text-white"
          >
            Sitios web mantenibles, bien estructurados y alineados con
            estándares modernos.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center
                  p-8 rounded-2xl
                  bg-light-bg-secondary/40 dark:bg-dark-bg/40
                  border border-naranja/30 dark:border-white/20"
        >
          <img
            src="/img/web.png"
            alt="Responsive"
            className="w-28 h-28 object-contain mb-5"
          />

          <h3 className="text-xl font-semibold text-mars mb-3">Responsive</h3>

          <p
            className="text-sm leading-relaxed max-w-xs
                  text-dark-bg dark:text-gray-400"
          >
            Diseño adaptable para todos los dispositivos y tamaños de pantalla.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center
                  p-8 rounded-2xl
                  bg-light-bg-secondary/40 dark:bg-dark-bg/40
                  border border-naranja/30 dark:border-white/20"
        >
          <img
            src="/img/perfil.png"
            alt="Accesibilidad"
            className="w-28 h-28 object-contain mb-5"
          />

          <h3 className="text-xl font-semibold text-mars mb-3">
            Accesibilidad
          </h3>

          <p
            className="text-sm leading-relaxed max-w-xs
                  text-dark-bg dark:text-gray-400"
          >
            Interfaces accesibles siguiendo WCAG para mejorar la experiencia de
            todos.
          </p>
        </div>
      </div>
    </section>
  );
}
