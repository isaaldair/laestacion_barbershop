const IG_LINK = "https://instagram.com/laestacionbarbershop_";

const cells = [
  { label: "Ambiente / local", tall: true },
  { label: "Corte 1", tall: false },
  { label: "Corte 2", tall: false },
  { label: "Plantas / detalle", tall: false },
  { label: "Barba / fade", tall: false },
];

export default function GaleriaSection() {
  return (
    <section id="galeria" className="bg-green-deep px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-4">
          <div>
            <p className="flex items-center gap-3 text-green text-xs tracking-[0.4em] uppercase mb-4">
              <span className="w-6 h-px bg-green" />
              Nuestro trabajo
            </p>
            <h2 className="text-4xl md:text-5xl font-black">
              La Estación<br />en imágenes.
            </h2>
          </div>
          <a
            href={IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green text-xs tracking-[0.2em] uppercase hover:text-white transition-colors"
          >
            ↗ Ver más en Instagram
          </a>
        </div>

        {/* Grid */}
        <div
          className="grid gap-1"
          style={{
            gridTemplateColumns: "2.2fr 1fr 1fr",
            gridTemplateRows: "220px 220px",
          }}
        >
          {cells.map((cell, i) => (
            <div
              key={i}
              className="bg-green-mid flex items-center justify-center"
              style={i === 0 ? { gridRow: "1 / 3" } : {}}
            >
              <span className="text-white/20 text-xs tracking-[0.3em] uppercase text-center leading-loose px-4">
                {cell.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
