type LogoMarkProps = {
  size?: "sm" | "lg";
};

export default function LogoMark({ size = "lg" }: LogoMarkProps) {
  const isLg = size === "lg";
  return (
    <div
      className={`inline-flex flex-col items-start ${
        isLg ? "gap-0.5" : "gap-px"
      }`}
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      <span
        className={`text-white uppercase tracking-[0.234em] font-semibold leading-none ${
          isLg ? "text-3xl md:text-4xl" : "text-base"
        }`}
      >
        La Estación
      </span>
      <span
        className={`text-white uppercase tracking-[0.45em] font-normal leading-none ${
          isLg ? "text-sm md:text-base" : "text-[0.55rem]"
        }`}
      >
        Barber Shop
      </span>
    </div>
  );
}
