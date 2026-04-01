import { Leaf, ShieldCheck, MapPin } from "lucide-react";

const cards = [
  {
    num: "01",
    Icon: Leaf,
    title: "Ambiente natural",
    body: "Plantas reales en cada rincón del local. Un espacio vivo, relajado y completamente único en Panamá.",
  },
  {
    num: "02",
    Icon: ShieldCheck,
    title: "Higiene sin compromisos",
    body: "Cada servicio se realiza con los más altos estándares de higiene y cuidado. Limpieza sin compromisos.",
  },
  {
    num: "03",
    Icon: MapPin,
    title: "Zona exclusiva",
    body: "En Ciudad del Saber, el hub de innovación de Panamá. Fácil acceso, ambiente tranquilo, clientela selecta.",
  },
];

export default function ExperienciaSection() {
  return (
    <section id="experiencia" className="bg-green-dark px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-14 gap-6">
          <div>
            <p className="flex items-center gap-3 text-green text-xs tracking-[0.4em] uppercase mb-4">
              <span className="w-6 h-px bg-green" />
              La diferencia
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-white">
              Por qué La<br />Estación.
            </h2>
          </div>
          <p className="text-white/40 text-sm leading-loose md:max-w-xs md:text-right">
            No es solo un corte. Es el ambiente, el detalle y el lugar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0.5">
          {cards.map((card) => {
            const Icon = card.Icon;
            return (
              <div key={card.num} className="bg-green-card border-t-2 border-green px-8 py-10">
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
