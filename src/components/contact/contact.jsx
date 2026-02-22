import { useForm, ValidationError } from "@formspree/react";
import {
  FaUser,
  FaEnvelope,
  FaRegCommentDots,
  FaRegCopy,
} from "react-icons/fa";
import { MdSubject } from "react-icons/md";
import { FiCopy } from "react-icons/fi";

export default function Contact() {
  const [state, handleSubmit] = useForm("manazroo");

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-4 mt-20 relative">
        <div className="absolute -top-3 md:-top-8 text-mars/20 text-5xl md:text-7xl font-bold font-audiowide select-none">
          CONTACTO
        </div>

        {/* Cabecera */}
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-4xl font-extrabold text-mars relative tracking-wider">
            Contacto
            <span className="block w-14 h-1 bg-mars rounded-full mt-1"></span>
          </h2>
        </div>
      

        {/* CONTENEDOR */}
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="w-full md:w-2/4 flex flex-col items-start gap-3 mt-10">
            {/* TEXTO */}
            <p className="mb-6 text-start text-balance text-lg w-full align-middle text-dark-bg-secondary dark:text-light-bg-secondary">
              ¿Quieres colaborar o tienes alguna propuesta? <br />
              Para cualquier consulta, no dudes en enviarme un mensaje a
              través del formulario.
            </p>
            <p className="mb-6 text-start text-balance text-lg w-full align-middle text-dark-bg-secondary dark:text-light-bg-secondary">
              Si no te gustan los formularios, ¡aquí tienes mi correo
              electrónico!
            </p>

            {/* BOTÓN COPIAR CORREO */}
            <div
              className="backdrop-blur-sm bg-white/5 border border-white-100/10
             rounded-2xl ps-4 pe-2 py-3 flex items-center justify-between max-w-sm"
            >
              <span className="text-xl">davsegmar@gmail.com</span>
              <button
                onClick={() =>
                  navigator.clipboard.writeText("davsegmar@gmail.com")
                }
                className="flex items-center ps-4 pe-2 py-2 rounded-2xl font-medium transition w-max"
              >
                <FiCopy className="text-xl text-center" />
              </button>
            </div>
          </div>
          {/* FORMULARIO */}
          <div className="w-full md:w-2/3">
            {state.succeeded ? (
              <div
                className="
                  w-full p-8 rounded-2xl bg-green-500/10 border border-green-500/40 
                  text-green-400 text-center
                  flex flex-col items-center gap-4
                  backdrop-blur-sm"
              >
                <p className="font-semibold text-xl lg:text-3xl">
                  ¡Mensaje enviado correctamente!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full space-y-8">
                {/* FILA 1 — NOMBRE + EMAIL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* NOMBRE */}
                  <div className="relative bg-light-bg/20 dark:bg-dark-bg rounded-2xl transition-colors duration-300 backdrop-blur-sm">
                    <FaUser className="absolute left-3 top-3 h-5 w-5 z-10 text-gray-400" />

                    <input
                      type="text"
                      name="name"
                      required
                      className="peer w-full pl-10 pr-4 py-2 bg-light-bg/20 dark:bg-dark-bg/30 border border-gray-500/40 
                        rounded-2xl backdrop-blur-sm text-dark-bg-secondary dark:text-light-bg-secondary
                        focus:ring-1 focus:ring-mars focus:border-mars outline-none
                        placeholder-transparent"
                      placeholder="Nombre"
                    />

                    <label
                      className="
                        absolute left-10 px-1 
                        text-dark-bg-secondary bg-light-bg/20 dark:bg-dark-bg/30 dark:text-light-bg-secondary pointer-events-none 
                        transition-colors duration-300
                        peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base
                        peer-focus:-top-3 peer-focus:text-sm peer-focus:text-mars
                        peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm"
                    >
                      Nombre
                    </label>
                  </div>

                  {/* EMAIL */}
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-3 h-5 w-5 text-gray-400 z-10" />

                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="
                        peer w-full pl-10 pr-4 py-2 bg-light-bg/20 dark:bg-dark-bg/30 border border-gray-500/40 
                        rounded-2xl backdrop-blur-sm text-dark-bg-secondary dark:text-light-bg-secondary
                        focus:ring-1 focus:ring-mars focus:border-mars outline-none
                        placeholder-transparent"
                      placeholder="Correo electrónico"
                    />

                    <label
                      htmlFor="email"
                      className="
                        absolute left-10 px-1 
                        text-dark-bg-secondary dark:text-light-bg-secondary pointer-events-none transition-all
                        bg-light-bg/20 dark:bg-dark-bg/30
                        peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base
                        peer-focus:-top-3 peer-focus:text-sm peer-focus:text-mars
                        peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm
                      "
                    >
                      Correo electrónico
                    </label>

                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>
                </div>

                {/* ASUNTO */}
                <div className="relative">
                  <MdSubject className="absolute left-3 top-3 h-5 w-5 text-gray-400 z-10" />

                  <input
                    type="text"
                    name="subject"
                    required
                    className="
                      peer w-full pl-10 pr-4 py-2 bg-light-bg/20 dark:bg-dark-bg/30 border border-gray-500/40 
                      rounded-2xl backdrop-blur-sm text-dark-bg-secondary dark:text-light-bg-secondary
                      focus:ring-1 focus:ring-mars focus:border-mars outline-none
                      placeholder-transparent"
                    placeholder="Asunto"
                  />

                  <label
                    className="
                        absolute left-10 px-1 
                        text-dark-bg-secondary dark:text-light-bg-secondary pointer-events-none transition-all
                        bg-light-bg/20 dark:bg-dark-bg/30
                        peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base
                        peer-focus:-top-3 peer-focus:text-sm peer-focus:text-mars
                        peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm
                      "
                  >
                    Asunto
                  </label>
                </div>

                {/* MENSAJE */}
                <div className="relative">
                  <FaRegCommentDots className="absolute left-3 top-3 h-5 w-5 text-gray-400 z-10" />

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    className="
                      peer w-full pl-10 pr-4 py-2 bg-light-bg/20 dark:bg-dark-bg/30 border border-gray-500/40 
                      rounded-2xl backdrop-blur-sm resize-none
                      text-dark-bg-secondary dark:text-light-bg-secondary
                      focus:ring-1 focus:ring-mars focus:border-mars outline-none
                      placeholder-transparent"
                    placeholder="Mensaje"
                  />

                  <label
                    htmlFor="message"
                    className="
                      absolute left-10 px-1 
                      text-dark-bg-secondary dark:text-light-bg-secondary pointer-events-none transition-colors duration-300
                      bg-light-bg/20 dark:bg-dark-bg/30
                      peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base
                      peer-focus:-top-3 peer-focus:text-sm peer-focus:text-mars
                      peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm"
                  >
                    Mensaje
                  </label>

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                {/* BOTÓN */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3 bg-mars text-white rounded-2xl font-semibold 
                  hover:bg-burdeos transition disabled:opacity-40"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
