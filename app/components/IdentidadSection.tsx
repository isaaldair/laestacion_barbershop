const stats = [
  { num: "7", desc: "Días a la semana disponibles" },
  { num: "CDS", desc: "Ciudad del Saber · Panamá" },
];

export default function IdentidadSection() {
  return (
    <section id="identidad" className="bg-cream text-foreground px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
        <div>
          <p className="flex items-center gap-3 text-green text-xs tracking-[0.4em] uppercase mb-5">
            <span className="w-6 h-px bg-green" />
            Quiénes somos
          </p>
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-foreground mb-7">
            Más que una<br />barbería.
          </h2>
          <p className="text-muted text-base leading-loose max-w-lg">
            La Estación nació en Ciudad del Saber — una de las zonas más privilegiadas
            de Panamá. Un espacio rodeado de naturaleza donde cada detalle está pensado
            para que tu visita sea una experiencia completa, desde el ambiente hasta
            el último detalle del corte.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {stats.map((stat) => (
            <div key={stat.num} className="border-l-[3px] border-green pl-6">
              <div className="text-4xl font-black text-green leading-none">{stat.num}</div>
              <div className="text-xs tracking-[0.2em] uppercase text-muted mt-2">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
