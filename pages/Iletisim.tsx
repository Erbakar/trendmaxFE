import React from 'react';
import { Building2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import AnimatedHero from '../components/AnimatedHero';
import { COMPANY_CONTACT, getWhatsAppUrl } from '../data/company';
import { HERO_IMAGES } from '../data/heroImages';

const mapUrl = (address: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

const mapLink = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const Iletisim: React.FC = () => (
  <div className="min-h-screen bg-gray-50 pt-20">
    <AnimatedHero
      title="İhtiyacınızı birlikte netleştirelim."
      subtitle="E-ticaret projeniz, paketlerimiz veya entegrasyon çözümlerimiz için satış ve destek ekibimize ulaşın."
      breadcrumb={[{ label: 'İletişim' }]}
      icon={Building2}
      badge="Türkiye & Birleşik Krallık"
      image={HERO_IMAGES.support}
      imagePosition="center"
      primaryAction={{ label: 'Paketleri İnceleyin', to: '/fiyatlar' }}
      secondaryActionLabel="İletişim Bilgileri"
    />

    <section id="icerik" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-3xl border border-orange-100 bg-orange-50 p-6 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-700">İşletmeci / Satıcı</p>
          <h2 className="mt-2 text-2xl font-black text-gray-900">{COMPANY_CONTACT.legalName} ({COMPANY_CONTACT.brandName})</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-gray-700">
            Türkiye üzerinden sunulan hizmetlerin satış, faturalandırma ve müşteri destek süreçleri Bursa merkez adresimiz üzerinden yürütülür.
          </p>
        </div>
        <div className="mb-12 grid gap-5 md:grid-cols-3">
          <a href={COMPANY_CONTACT.phoneHref} className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <Phone className="mb-5 h-7 w-7 text-orange-600" />
            <p className="text-sm font-bold uppercase tracking-wider text-gray-400">Telefon</p>
            <p className="mt-2 text-lg font-black text-gray-900">{COMPANY_CONTACT.phoneDisplay}</p>
          </a>
          <a href={`mailto:${COMPANY_CONTACT.email}`} className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <Mail className="mb-5 h-7 w-7 text-orange-600" />
            <p className="text-sm font-bold uppercase tracking-wider text-gray-400">E-posta</p>
            <p className="mt-2 break-all text-lg font-black text-gray-900">{COMPANY_CONTACT.email}</p>
          </a>
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <MessageCircle className="mb-5 h-7 w-7 text-emerald-600" />
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-700/60">WhatsApp Business</p>
            <p className="mt-2 text-lg font-black text-gray-900">{COMPANY_CONTACT.whatsappDisplay}</p>
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {[
            { title: 'Bursa Ofisi', address: COMPANY_CONTACT.bursaAddress },
            { title: 'London Office', address: COMPANY_CONTACT.londonAddress },
          ].map((office) => (
            <article key={office.title} className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
              <iframe
                title={`${office.title} haritası`}
                src={mapUrl(office.address)}
                loading="lazy"
                className="pointer-events-none h-64 w-full border-0 sm:pointer-events-auto sm:h-80"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-7">
                <div className="flex items-start gap-4">
                  <span className="rounded-xl bg-orange-50 p-3 text-orange-600"><MapPin className="h-6 w-6" /></span>
                  <div>
                    <h2 className="text-xl font-black text-gray-900">{office.title}</h2>
                    <p className="mt-2 leading-relaxed text-gray-600">{office.address}</p>
                    <a href={mapLink(office.address)} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center font-bold text-orange-600 hover:text-orange-700">
                      Haritada Aç
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Iletisim;
