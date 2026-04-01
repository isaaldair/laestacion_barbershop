import { WA_LINK, IG_LINK } from "../lib/constants";
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.2!2d-79.5388!3d8.9938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCiudad+del+Saber%2C+Panam%C3%A1!5e0!3m2!1ses!2spa!4v1706000000000!5m2!1ses!2spa";

const infoRows = [
  {
    icon: "📍",
    label: "Dirección",
    value: "Ciudad del Saber, Panamá",
  },
  {
    icon: "🕐",
    label: "Horarios",
    value: "Lun – Sáb: 10am – 7pm\nDomingo: 10am – 5pm",
  },
  {
    icon: "📱",
    label: "WhatsApp",
    value: "+507 6154-6401",
  },
];

export default function ContactoSection() {
  return (
    <section
      id="contacto"
      className="bg-green px-6 md:px-12 py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        {/* Left: info */}
        <div>
          <p className="flex items-center gap-3 text-white/55 text-xs tracking-[0.4em] uppercase mb-5">
            <span className="w-6 h-px bg-white/50" />
            Visítanos
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-none mb-11">
            ¿Listo para<br />tu cita?
          </h2>

          <div className="flex flex-col gap-5 mb-10">
            {infoRows.map((row) => (
              <div key={row.label} className="flex gap-4">
                <span className="text-base opacity-70 mt-0.5" aria-hidden="true">{row.icon}</span>
                <div>
                  <span className="text-white/55 text-xs tracking-[0.25em] uppercase block mb-1">
                    {row.label}
                  </span>
                  <span className="text-white text-sm leading-loose whitespace-pre-line">
                    {row.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green font-bold text-xs tracking-[0.2em] uppercase px-7 py-5 flex items-center gap-3 hover:bg-white/90 transition-colors"
            >
              <span aria-hidden="true">💬</span> Escríbenos por WhatsApp
            </a>
            <a
              href={IG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/35 text-white font-semibold text-xs tracking-[0.2em] uppercase px-7 py-4 flex items-center gap-3 hover:border-white hover:bg-white/10 transition-colors"
            >
              <span aria-hidden="true">📷</span> @laestacionbarbershop_
            </a>
          </div>
        </div>

        {/* Right: map */}
        <div className="h-80 md:h-[420px] border border-white/15 overflow-hidden">
          <iframe
            src={MAPS_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(30%) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="La Estación Barbershop — Ciudad del Saber, Panamá"
          />
        </div>
      </div>
    </section>
  );
}
