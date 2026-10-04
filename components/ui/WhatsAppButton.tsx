"use client";

import { siteConfig } from "@/content/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with BWIDE Media on WhatsApp"
      className="fixed right-6 bottom-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_20px_rgba(37,211,102,0.4)]"
    >
      <WhatsAppIcon className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
