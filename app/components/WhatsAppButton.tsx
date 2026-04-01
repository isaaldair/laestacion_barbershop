"use client";

import { MessageCircle } from "lucide-react";
import { WA_LINK } from "../lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green/90 hover:scale-110 transition-all duration-200"
    >
      <MessageCircle className="w-6 h-6" strokeWidth={2} />
    </a>
  );
}
