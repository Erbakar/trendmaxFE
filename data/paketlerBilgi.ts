import type { LucideIcon } from 'lucide-react';
import {
  Award,
  BarChart3,
  CreditCard,
  Headphones,
  Megaphone,
  MonitorPlay,
  Package,
  Rocket,
  Server,
  Sparkles,
  TrendingUp,
  Truck,
} from 'lucide-react';

export type PaketBilgiSection = {
  id: string;
  title: string;
  paragraphs: string[];
  icon: LucideIcon;
  /** Dekoratif görsel (Unsplash) */
  imageUrl: string;
  imageAlt: string;
  accentClass: string;
};

export const PAKET_BILGI_SECTIONS: PaketBilgiSection[] = [
  {
    id: 'nedir',
    title: 'Trendmax E-Ticaret Paketi Nedir?',
    paragraphs: [
      'Trendmax e-ticaret paketleri, internet üzerinden satış yapmak isteyen işletmeler için gerekli tüm altyapı ve özellikleri sunan kapsamlı yazılım çözümleridir. Bu sistemler sayesinde bir e-ticaret sitesi kurmak oldukça hızlı ve pratik hale gelir. Aynı zamanda kurulan sitelerin ürün yönetimi, sipariş takibi ve satış süreçleri de kolaylıkla kontrol edilebilir. Böylece işletmeler, teknik detaylarla uğraşmadan online satış süreçlerini daha verimli bir şekilde yönetebilir.',
    ],
    icon: Package,
    imageUrl:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Online alışveriş ve e-ticaret',
    accentClass: 'from-orange-500 to-amber-600',
  },
  {
    id: 'dogru-paket',
    title: 'Doğru paketi seçerken nelere dikkat etmeliyim?',
    paragraphs: [
      'E-ticaret paketleri arasından tercih yaparken, işletmenizin faaliyet göstereceği ölçeği ve satış hedeflerinizi dikkate almanız önemlidir. Çünkü e-ticaret operasyonlarınız büyüdükçe, daha fazla özellik ve gelişmiş altyapı sunan bir e-ticaret yazılım paketine ihtiyaç duyabilirsiniz.',
      'E-ticaret paket fiyatları, çoğunlukla paketin sunduğu özellikler, entegrasyonlar ve altyapı hizmetlerine göre değişiklik gösterir. Bu nedenle seçim yaparken hem işletmenizin ihtiyaçlarını karşılayan hem de bütçenize uygun e-ticaret çözümlerini değerlendirmek daha doğru bir tercih olacaktır.',
    ],
    icon: BarChart3,
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'İş analizi ve planlama',
    accentClass: 'from-slate-700 to-slate-900',
  },
  {
    id: 'avantaj',
    title: 'Trendmax hazır e-ticaret paketlerinin başlıca avantajı nedir?',
    paragraphs: [
      'Hazır e-ticaret yazılımlarını tercih ettiğinizde hosting, altyapı kurulumu veya site tasarımı gibi teknik detaylarla ayrı ayrı ilgilenmenize gerek kalmaz. İhtiyaçlarınıza ve beklentilerinize uygun e-ticaret paketini seçip satın aldığınızda, kısa sürede anahtar teslim bir e-ticaret sitesine sahip olabilir ve ürünlerinizi internet üzerinden hemen satışa sunabilirsiniz. Böylece teknik süreçlerle vakit kaybetmeden online satışa hızlı bir başlangıç yapmanız mümkün olur.',
    ],
    icon: Rocket,
    imageUrl:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Hızlı başlangıç ve ekip çalışması',
    accentClass: 'from-orange-600 to-red-600',
  },
  {
    id: 'neden-trendmax',
    title: "Neden Trendmax'ı tercih etmeliyim?",
    paragraphs: [
      '21 yıllık tecrübemiz ile her bütçeye uygun ve her ölçekte hazır alt yapı sunabiliyoruz. Sektörde hazır ürün alt yapısı ile stoksuz e-ticarete en uygun maliyetle başlamanızı sağlayan tek firmayız.',
      'Sağladığımız alt yapı ile ek entegrasyon paketine ihtiyaç duymadan tüm Pazar yeri mağazalarınız ile tek tuşla bağlanabilir, stok ve fiyatlarınızı her daim güncel tutabilirsiniz.',
    ],
    icon: Award,
    imageUrl:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Güvenilir iş ortaklığı',
    accentClass: 'from-amber-500 to-orange-600',
  },
  {
    id: 'gecis',
    title: "Farklı bir alt yapı ile çalışıyorum, Trendmax'a geçmek için ne yapmalıyım?",
    paragraphs: [
      'Farklı bir altyapı ile kurulmuş veya özel yazılım kullanılan e-ticaret sitenizi Trendmax altyapısına hızlı ve sorunsuz şekilde taşıyabilirsiniz. Mevcut mağazanızı yeni sisteme aktarmak için bizimle iletişime geçerek site taşıma sürecini kolayca başlatabilirsiniz. Uzman ekibimiz, e-ticaret sitenizin veri kaybı yaşamadan Trendmax platformuna aktarılmasını sağlayarak satışlarınıza kesintisiz devam etmenize yardımcı olur.',
    ],
    icon: Truck,
    imageUrl:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Dijital dönüşüm ve taşıma',
    accentClass: 'from-indigo-600 to-violet-700',
  },
  {
    id: 'musteri',
    title: 'Hazır paket aldığımda potansiyel müşteri bulmama yardımcı oluyor musunuz?',
    paragraphs: [
      'Trendmax e-ticaret paketleri, sitenizi yayına aldıktan sonra yeni müşterilere ulaşma sürecinde de işletmelere destek sağlar. SMS ve e-posta pazarlama çözümleri, SEO çalışmaları ve Google Alışveriş reklam entegrasyonları gibi araçlar sayesinde markanızın dijital görünürlüğü artar. Bu sayede işletmeler, ek maliyetlere ihtiyaç duymadan potansiyel müşteri kitlesini büyütebilir ve online satışlarını geliştirebilir.',
      "Ayrıca Pazar yeri entegrasyonları sayesinde reklam bütçesi harcamadan Türkiye'nin en büyük Pazar yerlerinde hazır potansiyel müşterilerle buluşuyor olacaksınız.",
    ],
    icon: Megaphone,
    imageUrl:
      'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Dijital pazarlama',
    accentClass: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'yazilim-bilgisi',
    title: 'Trendmax paketine başlarken yazılım konusunda bilgi sahibi olmam gerekiyor mu?',
    paragraphs: [
      'Trendmax e-ticaret paketleri sayesinde web sitesi kurmak için herhangi bir yazılım veya teknik bilgiye ihtiyaç duymazsınız. E-ticaret siteniz tüm altyapı ayarları yapılmış ve kullanıma hazır şekilde size teslim edilir.',
      'Ayrıca kullanıcı dostu yönetim paneli sayesinde site yayına alındıktan sonra ürün ekleme, sipariş takibi ve içerik düzenleme gibi işlemleri kolayca gerçekleştirebilir, e-ticaret sitenizi pratik bir şekilde yönetebilirsiniz.',
    ],
    icon: Sparkles,
    imageUrl:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Kullanıcı dostu arayüz',
    accentClass: 'from-sky-500 to-blue-700',
  },
  {
    id: 'demo',
    title: 'Paket satın almadan önce nasıl inceleyebilirim?',
    paragraphs: [
      'E-ticaret paketlerini satın almadan önce ücretsiz olarak sunulan demo sürümlerini inceleyerek sistemi yakından tanıyabilirsiniz. Bunun için ilgilendiğiniz paketin altında bulunan “Demoyu İncele” butonuna tıklamanız ve açılan formu doldurmanız yeterlidir. Formu tamamladıktan sonra demo e-ticaret paneline erişebilir ve paketin sunduğu özellikleri detaylı şekilde test edebilirsiniz.',
    ],
    icon: MonitorPlay,
    imageUrl:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Demo ve ürün inceleme',
    accentClass: 'from-orange-500 to-rose-600',
  },
  {
    id: 'yukseltme',
    title: 'E-ticaret paketimi sonradan yükseltme imkanım var mı?',
    paragraphs: [
      'Herhangi bir e-ticaret paketini satın aldıktan sonra ihtiyaçlarınıza göre paketinizi yükseltme imkânına sahip olursunuz. Bu sayede işletmeniz büyüdükçe daha gelişmiş özelliklere sahip paketlere geçiş yapabilir, e-ticaret altyapınızı işinizle birlikte kolayca geliştirebilirsiniz. Böylece online satış süreçlerinizi güçlendirerek işinizi sürdürülebilir şekilde büyütme fırsatı elde edersiniz.',
    ],
    icon: TrendingUp,
    imageUrl:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Büyüme ve yükseltme',
    accentClass: 'from-violet-600 to-purple-800',
  },
  {
    id: 'kurulum-destek',
    title: 'Trendmax site kurulumu aşamasında bize yardımcı oluyor mu?',
    paragraphs: [
      'Trendmax, e-ticaret sitenizin kurulumu sürecinde ve sonrasında kullanıcılarına kapsamlı destek sunar. İhtiyaç duyduğunuz her an ulaşabileceğiniz 7/24 hizmet veren çağrı merkezi ve online destek talep sistemi sayesinde tüm sorularınıza hızlı çözümler bulabilirsiniz. Böylece e-ticaret süreciniz boyunca profesyonel destek alarak sitenizi sorunsuz bir şekilde yönetebilirsiniz.',
    ],
    icon: Headphones,
    imageUrl:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Müşteri desteği',
    accentClass: 'from-cyan-600 to-blue-800',
  },
  {
    id: 'hosting-ssl',
    title: 'Hosting, alan adı ve ssl ücretleri paketlere dahil midir?',
    paragraphs: [
      'Belirtilen tüm bu hizmetler ve daha fazlası e-ticaret paket ücretlerine dâhil olarak sunulmaktadır. Bu sayede sitenizin gelişmiş özelliklere sahip olması için ekstra bir ücret ödemenize gerek kalmaz. Tek bir paket kapsamında sunulan bu avantajlar sayesinde e-ticaret sitenizi ek maliyet olmadan güçlü bir altyapıyla yönetebilirsiniz.',
    ],
    icon: Server,
    imageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Sunucu ve altyapı',
    accentClass: 'from-slate-600 to-slate-800',
  },
  {
    id: 'odeme',
    title: 'Trendmax e-ticaret paketlerinde kredi kartı ile tahsilat yapabiliyor muyum?',
    paragraphs: [
      'Trendmax, Türkiye’deki tüm bankaların sanal POS hizmetlerini destekler. Bunun yanında iyzico, PAYTR, Shopier gibi sanal POS sağlayıcılarının hizmetlerini de sitenize entegre etmenize izin verir. Yani Trendmax e-ticaret paketleri, kredi kartıyla ödeme almanız için gerekli tüm özellikleri size sunar.',
    ],
    icon: CreditCard,
    imageUrl:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Güvenli ödeme',
    accentClass: 'from-orange-600 to-amber-800',
  },
];
