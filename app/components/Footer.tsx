import { WA_LINK, IG_LINK } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-green-deep border-t border-green/15 px-6 md:px-12 pt-7 pb-6 flex flex-col gap-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-white/40 text-xs tracking-[0.3em] uppercase font-bold">
          La <span className="text-green">Estación</span>
        </span>
        <span className="text-white/20 text-xs tracking-[0.2em] uppercase">
          © 2025 · Ciudad del Saber, Panamá
        </span>
        <div className="flex gap-6">
          <a
            href={IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/20 hover:text-green text-xs tracking-[0.2em] uppercase transition-colors"
          >
            Instagram
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/20 hover:text-green text-xs tracking-[0.2em] uppercase transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 pt-4 text-center">
        <span className="text-white/15 text-xs">
          Un proyecto de{" "}
          <a
            href="https://istmocode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/35 transition-colors"
          >
            Istmo Code
          </a>
        </span>
      </div>
    </footer>
  );
}
