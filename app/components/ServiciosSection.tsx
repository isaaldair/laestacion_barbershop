import { Wine } from "lucide-react";

const serviciosPrincipales = [
  {
    name: "Corte de Caballero",
    desc: "Corte personalizado a máquina o tijera, lavado con shampoo premium y peinado con productos de acabado.",
    price: 17,
    featured: false,
  },
  {
    name: "Corte de Niño",
    note: "Hasta 12 años",
    desc: "Corte personalizado a máquina o tijera, lavado con shampoo premium y peinado con productos de acabado.",
    price: 14,
    featured: false,
  },
  {
    name: "Primer Corte para Bebés",
    note: "Certificado",
    desc: "Corte personalizado a tijera o máquina, peinado, certificado mi primer corte y foto para el recuerdo.",
    price: 13,
    featured: false,
  },
  {
    name: "Barba Premium",
    desc: "Afeitado con máquina y navaja, tratamiento con vaporizado, aplicación after shave y crema o aceite.",
    price: 10,
    featured: false,
  },
  {
    name: "Barba Spa",
    desc: "Afeitado con máquina y navaja, toalla caliente, tratamiento con vaporizador, mascarilla de carbono para la nariz, exfoliación, aplicación de aceites esenciales, masaje facial y after shave.",
    price: 16,
    featured: true,
  },
];

const serviciosExtras = [
  {
    name: "Depilación de Cejas o Nariz",
    desc: "Depilación con cera, acabado prolijo.",
    price: 7,
  },
  {
    name: "Perfilación de Cejas",
    desc: "Depilación con navaja, acabado prolijo.",
    price: 5,
  },
  {
    name: "Exfoliación + Hidratación de Rostro",
    desc: "Limpieza inicial del rostro, exfoliación suave para remover impurezas y células muertas, mascarilla de carbono, retiro con toalla caliente e hidratación final con loción tonificante.",
    price: 12,
  },
];

export default function ServiciosSection() {
  return (
    <section id="servicios" className="bg-white px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="flex items-center gap-3 text-green text-xs tracking-[0.4em] uppercase mb-4">
            <span className="w-6 h-px bg-green" />
            Lo que ofrecemos
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">Servicios</h2>
        </div>

        {/* Servicios principales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border mb-px reveal">
          {serviciosPrincipales.map((svc) => (
            <div
              key={svc.name}
              className={`p-8 flex flex-col gap-3 ${
                svc.featured ? "bg-green text-white md:col-span-2 lg:col-span-1" : "bg-white text-foreground"
              }`}
            >
              <div>
                <h3 className="text-lg font-black leading-tight">
                  {svc.name}
                  {svc.note && (
                    <span className={`ml-2 text-xs font-medium tracking-wide ${svc.featured ? "text-white/60" : "text-muted"}`}>
                      ({svc.note})
                    </span>
                  )}
                </h3>
              </div>
              <p
                className={`text-sm leading-relaxed flex-1 ${
                  svc.featured ? "text-white/70" : "text-muted"
                }`}
              >
                {svc.desc}
              </p>
              <div
                className={`text-3xl font-black mt-1 ${
                  svc.featured ? "text-white" : "text-green"
                }`}
              >
                ${svc.price}
              </div>
            </div>
          ))}
        </div>

        {/* Servicios extras */}
        <div className="mt-16">
          <div className="mb-8">
            <p className="flex items-center gap-3 text-green text-xs tracking-[0.4em] uppercase mb-3">
              <span className="w-6 h-px bg-green" />
              Complementos
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-foreground">Servicios Extras</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border reveal-delay">
            {serviciosExtras.map((svc) => (
              <div key={svc.name} className="p-8 bg-white flex flex-col gap-3">
                <h3 className="text-base font-black leading-tight">{svc.name}</h3>
                <p className="text-sm leading-relaxed text-muted flex-1">{svc.desc}</p>
                <div className="text-3xl font-black text-green mt-1">${svc.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bebida de cortesía */}
        <div className="mt-12 border border-green bg-green/5 px-8 py-6 flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <Wine className="w-8 h-8 text-green shrink-0" />
          <p className="text-center md:text-left text-base font-medium text-foreground">
            Todos nuestros servicios incluyen una{" "}
            <span className="font-black text-green">bebida de cortesía</span> de tu elección.
          </p>
        </div>
      </div>
    </section>
  );
}
