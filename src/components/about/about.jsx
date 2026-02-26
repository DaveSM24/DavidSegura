export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4 mt-20 relative">
        {/* Decorador lateral */}
        <div className="absolute -top-3 md:-top-8 text-mars/20 text-5xl md:text-7xl font-bold font-nasalization select-none">
          SOBRE MI
        </div>

        {/* Cabecera */}
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-4xl font-extrabold text-mars relative tracking-wider">
            Sobre mi
            <span className="block w-14 h-1 bg-mars rounded-full mt-1"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Tarjeta futurista con parallax */}
          <div className="relative">
            <div
              className="
            dark:bg-dark-bg/40 bg-white/20
            p-7 rounded-xl backdrop-blur-xl 
            border border-white/10 
            leading-relaxed space-y-4 shadow-lg
            transition-transform duration-300 
            hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,0,90,0.35)]
            dark:hover:shadow-[0_0_60px_rgba(255,30,50,0.55)]
          "
            >
              {/* Frase inspiradora */}
              <p className="text-sm uppercase tracking-widest text-mars/70 dark:text-mars/60 mb-2">
                “Siempre avanzando, línea a línea.”
              </p>

              <p>
                ¡Buenas! Soy David Segura, desarrollador de aplicaciones web y
                multiplataforma. Aunque actualmente resido en La Puebla de
                Cazalla (Sevilla), estoy totalmente dispuesto a trasladarme a
                Murcia para trabajar de forma presencial.
              </p>

              <p>
                Me formé tanto en centros de la comarca sevillana como de manera
                autodidacta, impulsado por mi curiosidad y pasión por la
                programación. Gracias a ese esfuerzo, obtuve el título de
                Técnico Superior en Desarrollo de Aplicaciones Web y
                Multiplataforma.
              </p>

              <p>
                Actualmente, mi objetivo es ampliar mi portfolio con nuevos
                proyectos o experiencia que reflejen mis habilidades, seguir
                aprendiendo nuevas tecnologías y convertirme en un gran
                compañero de equipo en mi próximo reto profesional.
              </p>
            </div>
          </div>

          <div className="relative group flex justify-center">
            <img
              src="/img/david-chibi.png"
              alt="Chibi programando"
              className="
            relative z-10 w-64 md:w-72 md:-top-10 md:left-7
            [mask-image:linear-gradient(white_85%,transparent)]
            [filter:
              drop-shadow(-22px_0_38px_rgba(255,140,60,0.18))
              drop-shadow(-10px_0_70px_rgba(255,100,40,0.10))
            ]
            dark:[filter:
              drop-shadow(-20px_0_45px_rgba(255,120,40,0.28))
              drop-shadow(-10px_0_80px_rgba(255,80,30,0.12))
            ]
          "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
