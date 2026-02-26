import { FiDownload } from "react-icons/fi";
import { ShineBorder } from "@/components/ui/shine-border";

export default function NavbarTop() {
  return (
    <nav className="fixed top-12 right-12 z-50">
      <a
        href="/CV_DavidSegura.pdf"
        download
        className="relative flex items-center gap-2
             px-4 py-2 rounded-full text-sm font-medium
            
             backdrop-blur
             hover:bg-dark-bg/10 dark:hover:bg-white/10
             transition overflow-hidden"
      >
        <ShineBorder
          shineColor={["#FB6D10", "#85112E", "#FB6D10"]}
          borderWidth={2}
          duration={4}
        />
        <FiDownload />
        <span className="hidden sm:inline">Descargar</span>CV
      </a>
    </nav>
  );
}
