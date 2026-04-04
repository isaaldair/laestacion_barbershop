import { Leaf, ShieldCheck, MapPin } from "lucide-react";

const cards = [
  {
    num: "01",
    Icon: Leaf,
    title: "Ambiente natural",
    body: "Un espacio tranquilo y diferente, diseñado para que te sientas cómodo desde que entras.",
  },
  {
    num: "02",
    Icon: ShieldCheck,
    title: "Higiene en cada servicio",
    body: "Nos tomamos en serio cada detalle de tu visita para que salgas sintiéndote bien atendido.",
  },
  {
    num: "03",
    Icon: MapPin,
    title: "En Ciudad del Saber",
    body: "Ubicados dentro de Ciudad del Saber, Panamá. Fácil acceso y estacionamiento disponible.",
  },
];

export default function IdentidadSection() {
  return (
    <section id="identidad" className="bg-green-dark text-white px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-start mb-16">
          <div>
            <p className="flex items-center gap-3 text-green text-xs tracking-[0.4em] uppercase mb-5">
              <span className="w-6 h-px bg-green" />
              Quiénes somos · La diferencia
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-7">
              Más que una<br />barbería.
            </h2>
            <p className="text-white/50 text-base leading-loose max-w-lg">
              La Estación nació en Ciudad del Saber — uno de los rincones más únicos
              de Panamá. Un espacio rodeado de naturaleza donde cada detalle está pensado
              para que tu visita sea una experiencia completa, desde el ambiente hasta
              el último detalle del corte.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:pt-14">
            <div className="border-l-[3px] border-green pl-6">
              <div className="text-4xl font-black text-green leading-none">7</div>
              <div className="text-xs tracking-[0.2em] uppercase text-white/40 mt-2">Días a la semana disponibles</div>
            </div>
            <div className="border-l-[3px] border-green pl-6">
              <div className="text-4xl font-black text-green leading-none">CDS</div>
              <div className="text-xs tracking-[0.2em] uppercase text-white/40 mt-2">Ciudad del Saber · Panamá</div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-0.5 reveal">
          {cards.map((card) => {
            const Icon = card.Icon;
            return (
              <div key={card.num} className="bg-green-card border-t-2 border-green px-8 py-10 hover:-translate-y-1 transition-transform duration-300">
                <div className="text-green text-xs tracking-[0.3em] mb-6">{card.num}</div>
                <Icon className="text-green w-7 h-7 mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-white/45 text-sm leading-loose">{card.body}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
