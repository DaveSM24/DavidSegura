import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import ScrollIndicator from "../ScrollIndicator.jsx";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 bottom-20"
    >
      <img
        src="/img/david-segura.jpg"
        loading="lazy"
        alt="imagen-david"
        className="glitch-img w-48 h-48 rounded-3xl object-cover mb-7"
      />
      <h1 className="text-5xl font-bold mb-4">David Segura</h1>
      <h2 className="text-2xl text-black-300 mb-4">Desarrollador web</h2>

      <div className="social flex">
        <a
          href="https://www.linkedin.com/in/davidsmdev/"
          name="link-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="dark:text-light-bg text-3xl hover:text-burdeos dark:hover:text-mars mx-2 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/DaveSM24"
          name="link-github"
          target="_blank"
          rel="noopener noreferrer"
          className="dark:text-light-bg text-3xl hover:text-burdeos dark:hover:text-mars mx-2 transition-colors duration-300"
        >
          <FaGithub />
        </a>
      </div>

      <a
        name="Contáctame"
        href="#contact"
        className="bg-dark-bg-secondary dark:bg-light-bg-secondary rounded-2xl text-lg px-5 py-2 mt-5 text-white dark:text-dark-bg hover:bg-burdeos dark:hover:bg-naranja dark:hover:text-white transition duration-300"
      >
        Contáctame
      </a>

      {/* Scroll Indicator flotante */}
      <div className="absolute bottom-8">
        <ScrollIndicator />
      </div>
    </section>
  );
}
