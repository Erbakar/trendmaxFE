import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { COMPANY_CONTACT, getWhatsAppUrl } from '../data/company';

const WhatsAppButton: React.FC = () => {
  const { pathname } = useLocation();

  if (pathname.startsWith('/odeme')) {
    return null;
  }

  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp üzerinden iletişime geçin: ${COMPANY_CONTACT.whatsappDisplay}`}
      className="whatsapp-floating fixed bottom-3 right-3 z-40 inline-flex h-12 w-12 items-center justify-center gap-3 rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-950/25 transition-all hover:-translate-y-1 hover:bg-[#1fbd5b] focus:outline-none focus:ring-4 focus:ring-emerald-200 sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:px-5 sm:py-3.5"
    >
      <MessageCircle className="h-5 w-5 fill-current sm:h-6 sm:w-6" aria-hidden />
      <span className="hidden sm:block text-sm font-black">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
