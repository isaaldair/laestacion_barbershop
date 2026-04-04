import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "./icons/SocialIcons";
import { WA_LINK, IG_LINK } from "../lib/constants";

const MAPS_LINK = "https://maps.app.goo.gl/ZNDTt7dXjnTKxMaY7";
const WAZE_LINK = "https://waze.com/ul?ll=8.999029,-79.585645&navigate=yes";
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d587.5143504014809!2d-79.58564586821151!3d8.999029465976669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca7707bb5de3b%3A0x90e10689d09becc3!2sLa%20Estaci%C3%B3n%20Barber%20Shop!5e1!3m2!1sen!2spa!4v1775267484509!5m2!1sen!2spa";

const infoRows = [
  { Icon: MapPin, label: "Dirección", value: "Ciudad del Saber, Panamá", href: MAPS_LINK },
  { Icon: Clock, label: "Horarios", value: "Lun – Sáb: 10am – 7pm\nDomingo: 10am – 5pm", href: null },
  { Icon: Phone, label: "WhatsApp", value: "+507 6364-6860", href: null },
];

export default function ContactoSection() {
  return (
    <section id="contacto" className="bg-green px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        <div>
          <p className="flex items-center gap-3 text-white/55 text-xs tracking-[0.4em] uppercase mb-5">
            <span className="w-6 h-px bg-white/50" />
            Visítanos
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-none mb-11">
            ¿Listo para<br />tu cita?
          </h2>

          <div className="flex flex-col gap-5 mb-10">
            {infoRows.map((row) => {
              const Icon = row.Icon;
              return (
                <div key={row.label} className="flex gap-4">
                  <Icon className="w-4 h-4 text-white/50 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <span className="text-white/55 text-xs tracking-[0.25em] uppercase block mb-1">
                      {row.label}
                    </span>
                    {row.href ? (
                      <a
                        href={row.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-sm leading-loose whitespace-pre-line underline underline-offset-2 decoration-white/30 hover:decoration-white transition-colors"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <span className="text-white text-sm leading-loose whitespace-pre-line">
                        {row.value}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green font-bold text-xs tracking-[0.2em] uppercase px-7 py-5 flex items-center gap-3 hover:bg-white/90 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Escríbenos por WhatsApp
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/35 text-white font-semibold text-xs tracking-[0.2em] uppercase px-4 py-4 flex items-center justify-center gap-2 hover:border-white hover:bg-white/10 transition-colors"
              >
                <MapPin className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                Google Maps
              </a>
              <a
                href={WAZE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/35 text-white font-semibold text-xs tracking-[0.2em] uppercase px-4 py-4 flex items-center justify-center gap-2 hover:border-white hover:bg-white/10 transition-colors"
              >
                <Navigation className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                Waze
              </a>
            </div>
            <a
              href={IG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/35 text-white font-semibold text-xs tracking-[0.2em] uppercase px-7 py-4 flex items-center gap-3 hover:border-white hover:bg-white/10 transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              @laestacionbarbershop_
            </a>
          </div>
        </div>

        <div className="h-80 md:h-105 border border-white/15 overflow-hidden">
          <iframe
            src={MAPS_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="La Estación Barber Shop"
          />
        </div>
      </div>
    </section>
  );
}
