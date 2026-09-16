import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle2, Headphones, Layers3, ShieldCheck } from 'lucide-react';
import AnimatedHero from '../components/AnimatedHero';
import { COMPANY_CONTACT } from '../data/company';
import { HERO_IMAGES } from '../data/heroImages';

const Hakkimizda: React.FC = () => (
  <div className="min-h-screen bg-white pt-20">
    <AnimatedHero
      title="Dijital ticareti herkes için daha erişilebilir hale getiriyoruz."
      subtitle="E-ticaret yazılımı, pazaryeri entegrasyonu, mağaza kurulumu ve uygulamalı eğitim hizmetlerini tek bir çözüm çatısı altında sunuyoruz."
      breadcrumb={[{ label: 'Hakkımızda' }]}
      icon={Building2}
      badge="Trendmax Bilişim Teknolojileri"
      image={HERO_IMAGES.corporateOperations}
      imagePosition="center right"
      primaryAction={{ label: 'Bize Ulaşın', to: '/iletisim' }}
      secondaryActionLabel="Kurumsal Yaklaşımımız"
    />

    <div id="icerik">
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Biz kimiz?</p>
            <h2 className="mt-3 text-3xl font-black text-gray-900 md:text-4xl">Kurulumdan günlük operasyona kadar yanınızdayız.</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600">
              <p>
                İşletmelerin teknik ayrıntılarla vakit kaybetmeden çevrim içi satışa başlayabilmesi için yazılım, entegrasyon ve eğitim süreçlerini birlikte planlıyoruz.
              </p>
              <p>
                Paket kapsamlarını, vergiler dahil fiyatları, teslim yöntemini ve satış sonrası destek kanallarını satın alma öncesinde açıkça paylaşmayı temel hizmet ilkemiz olarak görüyoruz.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { icon: Layers3, title: 'Tek panel yaklaşımı', text: 'Mağaza, ürün, stok ve sipariş süreçleri için merkezi çözümler.' },
              { icon: Headphones, title: 'Kurulum ve destek', text: 'Paket kapsamına uygun kurulum, eğitim ve teknik destek.' },
              { icon: ShieldCheck, title: 'Şeffaf satın alma', text: 'KDV dahil fiyatlar, görünür sözleşmeler ve güvenli PayTR ödeme akışı.' },
              { icon: CheckCircle2, title: 'Ölçeklenebilir paketler', text: 'Başlangıçtan gelişmiş entegrasyon ihtiyaçlarına uzanan seçenekler.' },
            ].map((item) => (
              <article key={item.title} className="rounded-3xl border border-gray-100 bg-gray-50 p-6">
                <item.icon className="h-7 w-7 text-orange-600" />
                <h3 className="mt-5 text-lg font-black text-gray-900">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10">
            <h2 className="text-2xl font-black text-gray-900">İşletme bilgileri</h2>
            <dl className="mt-6 grid gap-6 text-sm sm:grid-cols-2">
              <div><dt className="font-bold text-gray-400">Marka</dt><dd className="mt-1 font-black text-gray-900">{COMPANY_CONTACT.brandName}</dd></div>
              <div><dt className="font-bold text-gray-400">İşletmeci / Satıcı</dt><dd className="mt-1 font-black text-gray-900">{COMPANY_CONTACT.legalName}</dd></div>
              <div><dt className="font-bold text-gray-400">Merkez adresi</dt><dd className="mt-1 leading-relaxed text-gray-700">{COMPANY_CONTACT.bursaAddress}</dd></div>
              <div><dt className="font-bold text-gray-400">İletişim</dt><dd className="mt-1 text-gray-700">{COMPANY_CONTACT.phoneDisplay}<br />{COMPANY_CONTACT.email}</dd></div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/iletisim" className="rounded-xl bg-orange-600 px-6 py-3 font-bold text-white hover:bg-orange-700">Bize Ulaşın</Link>
              <Link to="/fiyatlar" className="rounded-xl border border-gray-300 px-6 py-3 font-bold text-gray-800 hover:bg-gray-50">Paketleri İnceleyin</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Hakkimizda;
