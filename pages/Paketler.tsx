
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone } from 'lucide-react';

const PACKAGES = [
  {
    id: 'pazaryeri',
    title: 'Pazar Yeri Stoksuz E-Ticaret Birebir Eğitim Paketi',
    price: '8.500',
    highlight: false,
    features: [
      'Şirket Kuruluşu',
      '2 Pazar Yeri Mağaza Açılışı',
      'Ücretsiz Entegratör Yazılım Kurulumu',
      'Ücretsiz Logo Tasarımı',
      'Ürün Yükleme Eğitimi',
      'Trendyol Panel Eğitimi & Ürün Yükleme',
      'Gittigidiyor Panel Eğitimi & Ürün Yükleme',
      'Satış Garantili Ürün Desteği',
      "5 Farklı Sektör, 50'den Fazla Kategori",
      "8.000 + Hazır Farklı Ürün",
      'Tedarikçi İlişkileri',
      'Kar Marjı Düzenleme & Finans Eğitimi',
      'Kargo ve Sevkiyat',
      'Dijital Pazarlama Eğitimi (Google, Instagram, Facebook)',
      'Tüm Panel Eğitimlerine Ömür Boyu Ücretsiz Erişim',
      'Tüm Paketlerde %15 İndirim Hakkı',
    ],
  },
  {
    id: 'sifir-sermaye',
    title: 'Sıfır Sermaye E-Ticaret Sitesi Paketi',
    price: '12.500',
    highlight: true,
    features: [
      '24 Saatte Hazır E-Ticaret Sitesi',
      "8.000 + Farklı Hazır Ürün",
      'Hazır Ödeme Alt Yapısı',
      '1 Yıllık Hosting Hizmeti',
      'Ücretsiz Logo Tasarımı',
      'Kargo ve Lojistik Hizmeti',
      'Şirket Kurmak Yok',
      'Vergi Yok',
      'Kargo ve Depolama Hizmeti',
      'Tedarikçi Desteği Hizmeti',
      "5 Farklı Sektör, 50'den Fazla Kategori",
      'Kargo ve Sevkiyat',
      'Dijital Pazarlama Eğitimi (Google, Instagram, Facebook)',
      'Tüm Panel Eğitimlerine Ömür Boyu Ücretsiz Erişim',
      'Tüm Paketlerde %15 İndirim Hakkı',
    ],
  },
  {
    id: 'full-full',
    title: "Full + Full 2'si Bir Arada Paketi",
    price: '18.000',
    highlight: false,
    features: [
      'Şirket Kuruluşu',
      '2 Pazar Yeri Mağaza Açılışı',
      'Ücretsiz Entegratör Yazılım Kurulumu',
      'Ücretsiz Logo Tasarımı',
      'Ürün Yükleme Eğitimi',
      'Trendyol Panel Eğitimi & Ürün Yükleme',
      'Gittigidiyor Panel Eğitimi & Ürün Yükleme',
      'Satış Garantili Ürün Desteği',
      "5 Farklı Sektör, 50'den Fazla Kategori",
      'Tedarikçi İlişkileri',
      'Kar Marjı Düzenleme & Finans Eğitimi',
      'Kargo ve Sevkiyat',
      '24 Saatte Hazır E-Ticaret Sitesi',
      "8.000 + Farklı Hazır Ürün",
      '1 Yıllık Hosting Hizmeti',
      'Şirket Kurmak Yok, Vergi Yok',
      'Kargo ve Depolama Hizmeti',
      'Dijital Pazarlama Eğitimi (Google, Instagram, Facebook)',
      'Tüm Panel Eğitimlerine Ömür Boyu Ücretsiz Erişim',
      'Tüm Paketlerde %15 İndirim Hakkı',
    ],
  },
  {
    id: 'trendyol-profesyonel',
    title: 'Trendyol Profesyonel Kurulum Paketi',
    price: '18.500',
    highlight: false,
    features: [
      'Hesap Açılışı',
      'Açılış Suspendi',
      "2K En Çok Satanlar Listesi",
      'Mağaza Ayarları',
      'Sipariş Yönetimi',
      'Müşteri Yönetimi',
      'Şikayet Kaldırma Metni',
      'Yazılım Ayarları',
      "2K Riskli Ürün Kategorisi",
      'Feedback Alma Metni',
      'İade Süreci',
    ],
  },
];

const COMPARISON_FEATURES = [
  { name: 'Şirket Kuruluşu', pazaryeri: true, sifirSermaye: false, fullFull: true, trendyol: false },
  { name: '2 Pazar Yeri Mağaza Açılışı', pazaryeri: true, sifirSermaye: false, fullFull: true, trendyol: false },
  { name: 'Ücretsiz Entegratör Yazılım Kurulumu', pazaryeri: true, sifirSermaye: false, fullFull: true, trendyol: false },
  { name: 'Ücretsiz Logo Tasarımı', pazaryeri: true, sifirSermaye: true, fullFull: true, trendyol: false },
  { name: 'Ürün Yükleme Eğitimi', pazaryeri: true, sifirSermaye: false, fullFull: true, trendyol: false },
  { name: 'Trendyol Panel Eğitimi & Ürün Yükleme', pazaryeri: true, sifirSermaye: false, fullFull: true, trendyol: false },
  { name: 'Gittigidiyor Panel Eğitimi & Ürün Yükleme', pazaryeri: true, sifirSermaye: false, fullFull: true, trendyol: false },
  { name: 'Satış Garantili Ürün Desteği', pazaryeri: true, sifirSermaye: false, fullFull: true, trendyol: false },
  { name: "5 Farklı Sektör, 50'den Fazla Kategori", pazaryeri: true, sifirSermaye: true, fullFull: true, trendyol: false },
  { name: 'Tedarikçi İlişkileri', pazaryeri: true, sifirSermaye: false, fullFull: true, trendyol: false },
  { name: 'Kar Marjı Düzenleme & Finans Eğitimi', pazaryeri: true, sifirSermaye: false, fullFull: true, trendyol: false },
  { name: 'Kargo ve Sevkiyat', pazaryeri: true, sifirSermaye: true, fullFull: true, trendyol: false },
  { name: '24 Saatte Hazır E-Ticaret Sitesi', pazaryeri: false, sifirSermaye: true, fullFull: true, trendyol: false },
  { name: "8.000 + Farklı Hazır Ürün", pazaryeri: true, sifirSermaye: true, fullFull: true, trendyol: false },
  { name: 'Hazır Ödeme Alt Yapısı', pazaryeri: false, sifirSermaye: true, fullFull: true, trendyol: false },
  { name: '1 Yıllık Hosting Hizmeti', pazaryeri: false, sifirSermaye: true, fullFull: true, trendyol: false },
  { name: 'Şirket Kurmak Yok, Vergi Yok', pazaryeri: false, sifirSermaye: true, fullFull: true, trendyol: false },
  { name: 'Kargo ve Lojistik Hizmeti', pazaryeri: false, sifirSermaye: true, fullFull: true, trendyol: false },
  { name: 'Tedarikçi Desteği Hizmeti', pazaryeri: false, sifirSermaye: true, fullFull: true, trendyol: false },
  { name: 'Dijital Pazarlama Eğitimi (Google, Instagram, Facebook)', pazaryeri: true, sifirSermaye: true, fullFull: true, trendyol: false },
  { name: 'Tüm Panel Eğitimlerine Ömür Boyu Ücretsiz Erişim', pazaryeri: true, sifirSermaye: true, fullFull: true, trendyol: false },
  { name: 'Tüm Paketlerde %15 İndirim Hakkı', pazaryeri: true, sifirSermaye: true, fullFull: true, trendyol: false },
  { name: 'Hesap Açılışı & Mağaza Kurulumu', pazaryeri: false, sifirSermaye: false, fullFull: false, trendyol: true },
];

const Paketler: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-2 text-orange-400 text-sm font-bold mb-6 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link to="/fiyatlar" className="hover:text-white transition-colors">Fiyatlar</Link>
          </nav>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              E-Ticaret Paketlerimiz
            </h1>
            <p className="text-xl text-slate-300">
              Stoksuz & sermayesiz e-ticaret projemize dahil olun. Şirket kurmadan, depo ve ürün maliyetini düşünmeden satış yapın.
            </p>
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-3xl shadow-lg border-2 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 ${
                  pkg.highlight ? 'border-orange-500 ring-2 ring-orange-200' : 'border-gray-100'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-orange-600 text-white text-center py-2 text-sm font-bold">
                    Popüler
                  </div>
                )}
                <div className={`p-8 ${pkg.highlight ? 'pt-14' : ''}`}>
                  <h3 className="text-lg font-bold text-gray-900 mb-6 leading-tight min-h-[3.5rem]">
                    {pkg.title}
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mb-6">
                    <span className="text-3xl font-black text-gray-900">{pkg.price}</span>
                    <span className="text-gray-500 font-semibold"> TL</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-6">Paket Fiyatlarımıza KDV Dahildir</p>
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-black text-lg transition-all">
                    Kayıt Ol
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Size Uygun En Profesyonel Paketlerimiz
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 px-4 text-left text-sm font-black text-gray-500 uppercase">Özellikler</th>
                  <th className="py-4 px-4 text-center text-sm">
                    <div className="font-bold text-gray-900">Pazar Yeri</div>
                    <div className="text-orange-600 font-black">8.500 TL</div>
                  </th>
                  <th className="py-4 px-4 text-center text-sm bg-orange-50">
                    <div className="font-bold text-gray-900">Sıfır Sermaye</div>
                    <div className="text-orange-600 font-black">12.500 TL</div>
                  </th>
                  <th className="py-4 px-4 text-center text-sm">
                    <div className="font-bold text-gray-900">Full + Full</div>
                    <div className="text-orange-600 font-black">18.000 TL</div>
                  </th>
                  <th className="py-4 px-4 text-center text-sm">
                    <div className="font-bold text-gray-900">Trendyol Pro</div>
                    <div className="text-orange-600 font-black">18.500 TL</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {COMPARISON_FEATURES.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-700 text-sm">{row.name}</td>
                    <td className="py-3 px-4 text-center">
                      {row.pazaryeri ? <CheckCircle2 className="w-5 h-5 text-orange-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="py-3 px-4 text-center bg-orange-50/30">
                      {row.sifirSermaye ? <CheckCircle2 className="w-5 h-5 text-orange-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.fullFull ? <CheckCircle2 className="w-5 h-5 text-orange-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.trendyol ? <CheckCircle2 className="w-5 h-5 text-orange-500 mx-auto" /> : <span className="text-gray-300">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-gray-200 bg-gray-50">
                  <td className="py-4 px-4"></td>
                  {['pazaryeri', 'sifirSermaye', 'fullFull', 'trendyol'].map((id) => (
                    <td key={id} className="py-4 px-4 text-center">
                      <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-bold text-sm">
                        Kayıt Ol
                      </button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-xl md:text-2xl font-bold mb-8 leading-relaxed">
            Stoksuz & Sermayesiz E-Ticaret projemize dahil olun ve şirket kurmadan, depo ve ürün maliyetini düşünmeden, vergi ödemeden, kargo operasyonu ile uğraşmadan ürün satarak kazanmanın keyfini çıkarın.
          </p>
          <a
            href="tel:08503098419"
            className="inline-flex items-center gap-3 bg-white text-orange-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-orange-50 transition-all shadow-xl"
          >
            <Phone className="w-6 h-6" />
            Danışmanlarımızla İletişime Geçin: 0850 309 84 19
          </a>
        </div>
      </section>
    </div>
  );
};

export default Paketler;
