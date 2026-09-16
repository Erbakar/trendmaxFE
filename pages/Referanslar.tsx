import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MonitorSmartphone, Palette, ShoppingBag } from 'lucide-react';
import { THEME_DEMOS } from '../data/homePage';
import AnimatedHero from '../components/AnimatedHero';
import { HERO_IMAGES } from '../data/heroImages';

const Referanslar: React.FC = () => (
  <div className="min-h-screen bg-white pt-20">
    <AnimatedHero
      title="Tema ve Çözüm Örnekleri"
      subtitle="Farklı sektörler için hazırlanan mağaza önizlemelerini, mobil deneyimi ve tasarım yaklaşımımızı inceleyin."
      breadcrumb={[{ label: 'Çözüm Örnekleri' }]}
      icon={Palette}
      badge="Tasarım Galerisi"
      image={HERO_IMAGES.design}
      imagePosition="center"
      primaryAction={{ label: 'Projenizi Konuşalım', to: '/iletisim' }}
      secondaryActionLabel="Örnekleri İnceleyin"
    />

    <section id="icerik" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Önizleme galerisi</p>
          <h2 className="mt-3 text-3xl font-black text-gray-900 md:text-4xl">Sektörünüze uygun vitrini keşfedin.</h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Buradaki görseller tema tasarımlarını gösterir. Nihai mağaza; marka kimliği, içerik ve seçilen paket kapsamına göre özelleştirilir.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {THEME_DEMOS.map((theme) => (
            <Link key={theme.slug} to={`/tema/${theme.slug}`} target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                <img src={theme.landscapeImage} alt={`${theme.name} tema önizlemesi`} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between gap-4 p-6">
                <div>
                  <h3 className="text-xl font-black text-gray-900">{theme.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">Masaüstü ve mobil tema görünümü</p>
                </div>
                <ArrowRight className="h-5 w-5 text-orange-600 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: MonitorSmartphone, title: 'Mobil uyumlu arayüz', text: 'Tema önizlemelerini farklı ekran boyutlarında karşılaştırın.' },
            { icon: Palette, title: 'Markaya göre özelleştirme', text: 'Renk, tipografi, görsel ve içerik alanları proje kapsamında uyarlanabilir.' },
            { icon: ShoppingBag, title: 'Satış odaklı bileşenler', text: 'Ürün, kategori, kampanya ve ödeme adımları e-ticaret deneyimine göre tasarlanır.' },
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-gray-200 bg-white p-8">
              <item.icon className="h-8 w-8 text-orange-600" />
              <h3 className="mt-5 text-xl font-black text-gray-900">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-orange-600 py-16 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-black md:text-4xl">Projeniz için doğru yapıyı birlikte belirleyelim.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-orange-100">Paket kapsamı, tema ve entegrasyon seçenekleri için ekibimizle iletişime geçin.</p>
        <Link to="/iletisim" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-black text-orange-700 hover:bg-orange-50">
          Bize Ulaşın <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  </div>
);

export default Referanslar;
