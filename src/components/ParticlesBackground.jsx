import { useState, useEffect } from "react";
import { Particles } from "@/components/ui/particles";

const ParticlesBackground = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Función que revisa si la clase 'dark' está en <html>
    const checkDarkMode = () => {
      const darkModeOn = document.documentElement.classList.contains("dark");
      setIsDark(darkModeOn);
    };

    checkDarkMode();

    // Crear un observer para detectar cambios en las clases del <html>
    const observer = new MutationObserver(() => {
      checkDarkMode();
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      observer.disconnect();
    };
  }, []);

  const particlesColor = isDark ? "FB6D10" : "2E2E41";

  return (
    <div className="relative w-full h-full">
      {/* Partículas detrás */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Particles color={particlesColor} />
      </div>

      {/* Contenido */}
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default ParticlesBackground;
