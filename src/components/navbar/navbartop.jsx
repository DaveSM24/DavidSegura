import { FiDownload } from "react-icons/fi";

export default function NavbarTop() {
  return (
    <nav className="fixed top-12 right-12 z-50">
      <a
        href="/CV_DavidSegura.pdf"
        download
        className="flex items-center gap-2
               px-4 py-2 rounded-full text-sm font-medium
               border border-dark-bg-secondary/40 dark:border-light-bg-secondary/40
               backdrop-blur
               hover:bg-dark-bg/10 dark:hover:bg-white/10
               transition"
      >
        <FiDownload />
        <span className="hidden sm:inline">Descargar</span>CV
      </a>
    </nav>
  );
}
