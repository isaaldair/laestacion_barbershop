const services = [
  {
    badge: "Clásico",
    name: "Corte de Cabello",
    desc: "Fade, tijera o clásico. Lavado y styling incluido. El corte que te define.",
    price: "$XX",
    featured: false,
  },
  {
    badge: "Más popular",
    name: "Corte + Barba",
    desc: "El combo completo. Corte, perfilado y arreglo de barba con navaja.",
    price: "$XX",
    featured: true,
  },
  {
    badge: "Detalle",
    name: "Arreglo de Barba",
    desc: "Perfilado, alineación y acabado profesional con navaja.",
    price: "$XX",
    featured: false,
  },
];

export default function ServiciosSection() {
  return (
    <section id="servicios" className="bg-white px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="flex items-center gap-3 text-green text-xs tracking-[0.4em] uppercase mb-4">
            <span className="w-6 h-px bg-green" />
            Lo que ofrecemos
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">Servicios</h2>
        </div>

        <div className="grid md:grid-cols-3 divide-x divide-border border border-border">
          {services.map((svc) => (
            <div
              key={svc.name}
              className={`p-10 flex flex-col gap-4 ${
                svc.featured ? "bg-green text-white" : "bg-white text-foreground"
              }`}
            >
              <span
                className={`text-xs tracking-[0.3em] uppercase font-medium ${
                  svc.featured ? "text-white/60" : "text-green"
                }`}
              >
                {svc.badge}
              </span>
              <h3 className="text-xl font-black">{svc.name}</h3>
              <p
                className={`text-sm leading-loose flex-1 ${
                  svc.featured ? "text-white/65" : "text-muted"
                }`}
              >
                {svc.desc}
              </p>
              <div
                className={`text-4xl font-black mt-2 ${
                  svc.featured ? "text-white" : "text-green"
                }`}
              >
                {svc.price}{" "}
                <span
                  className={`text-sm font-normal ${
                    svc.featured ? "text-white/50" : "text-muted/60"
                  }`}
                >
                  / servicio
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
