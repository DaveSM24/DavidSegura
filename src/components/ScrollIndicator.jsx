import React from "react";

export default function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center mt-12">
      {/* Contorno del “ratón” */}
      <div className="w-[25px] h-[36px] border-2 dark:border-light-bg-secondary border-dark-bg-secondary rounded-full flex justify-center relative">
        {/* Bolita que baja y sube */}
        <div className="w-[6px] h-[6px] bg-gray-400 rounded-full absolute top-2 animate-scroll-bezier" />
      </div>

      {/* Texto “Scroll Down” con leve animación */}
      <p className="dark:text-gray-400 text-sm mt-3 animate-pulse tracking-wide">
        Scroll Down
      </p>
    </div>
  );
}
