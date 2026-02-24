export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'e-ticarette-pazar-analizi',
    title: 'E-Ticarette Pazar Analizi',
    excerpt: 'E-ticaret pazarında başarılı olmak için pazar analizi yapmanın önemi ve adım adım nasıl yapılacağı.',
    content: `
      <p>E-ticaret dünyasında rekabet her geçen gün artıyor. Bu ortamda ayakta kalmak ve büyümek için pazar analizi yapmak artık bir lüks değil, zorunluluk haline geldi.</p>
      
      <h3>Pazar Analizi Neden Önemli?</h3>
      <p>Pazar analizi, rakiplerinizi, müşteri segmentlerinizi ve sektör trendlerini anlamanızı sağlar. Doğru yapılan bir analiz sayesinde:</p>
      <ul>
        <li>Fırsatları erken yakalayabilirsiniz</li>
        <li>Rekabet avantajı oluşturabilirsiniz</li>
        <li>Müşteri ihtiyaçlarını daha iyi anlarsınız</li>
        <li>Stratejik kararlar alabilirsiniz</li>
      </ul>
      
      <h3>Nasıl Başlanır?</h3>
      <p>Öncelikle hedef pazarınızı belirleyin. Hangi demografik özelliklere hitap edeceksiniz? Rakiplerinizin güçlü ve zayıf yönlerini analiz edin. Müşteri geri bildirimlerini toplayın ve veri odaklı kararlar alın.</p>
      
      <p>Trendmax altyapısı ile satış verilerinizi anlık takip ederek pazar dinamiklerine hızlı uyum sağlayabilirsiniz.</p>
    `,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    category: 'E-Ticaret',
    author: 'Trend Akademi',
    date: '2022-01-22',
    readTime: '5 dk',
  },
  {
    id: '2',
    slug: 'e-ihracat-cozumleri-5-adimda',
    title: "E-İhracat Çözümleri Nelerdir? 5 Adımda E-İhracat Yapmak",
    excerpt: 'E-ihracata başlamak isteyen girişimciler için rehber: 5 adımda dünyaya satış yapmanın yolu.',
    content: `
      <p>E-ihracat, yerel ürünlerinizi global pazarlara ulaştırmanın en etkili yoludur. İşte 5 adımda e-ihracata başlama rehberi:</p>
      
      <h3>1. Hedef Pazar Belirleme</h3>
      <p>Hangi ülkelere satış yapacağınızı belirleyin. Gümrük mevzuatı, lojistik maliyetleri ve talep analizi yapın.</p>
      
      <h3>2. Pazaryeri Seçimi</h3>
      <p>Amazon, eBay, Etsy gibi global platformlara kaydolun. Her platformun kendi kuralları ve hedef kitlesi vardır.</p>
      
      <h3>3. Lojistik ve Kargo</h3>
      <p>Uluslararası kargo firmaları ile anlaşın. Gümrük ve vergi süreçlerini öğrenin.</p>
      
      <h3>4. Ödeme Sistemleri</h3>
      <p>PayPal, Stripe gibi uluslararası ödeme altyapılarını entegre edin.</p>
      
      <h3>5. Pazarlama ve Destek</h3>
      <p>Hedef dilde içerik üretin, müşteri destek süreçlerinizi kurun.</p>
      
      <p>Trendmax E-İhracat modülü ile tüm bu süreçleri tek panelden yönetebilirsiniz.</p>
    `,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    category: 'E-İhracat',
    author: 'Trend Akademi',
    date: '2022-01-17',
    readTime: '7 dk',
  },
  {
    id: '3',
    slug: 'rekabet-arastirmasi-onemi',
    title: 'Rekabet Araştırması Yapmanın Önemi',
    excerpt: 'Rakiplerinizi tanıyın, pazarı anlayın. Rekabet araştırması ile stratejik avantaj elde edin.',
    content: `
      <p>Rekabet araştırması, işletmenizin pazardaki konumunu anlamanın ve güçlendirmenin temelidir.</p>
      
      <h3>Rekabet Analizi Nedir?</h3>
      <p>Rakiplerinizin ürünlerini, fiyatlarını, pazarlama stratejilerini ve müşteri deneyimlerini sistematik olarak incelemektir.</p>
      
      <h3>Faydaları</h3>
      <ul>
        <li>Fiyatlandırma stratejinizi belirlemenize yardımcı olur</li>
        <li>Eksik hizmet veya ürün fırsatlarını gösterir</li>
        <li>Müşteri beklentilerini anlamanızı sağlar</li>
        <li>Pozisyonlanma stratejinize yön verir</li>
      </ul>
      
      <h3>Başlamak İçin</h3>
      <p>En az 3-5 doğrudan rakibinizi belirleyin. Web sitelerini, sosyal medya hesaplarını ve müşteri yorumlarını inceleyin. Fırsatları tespit edin ve aksiyon planı oluşturun.</p>
    `,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    category: 'Strateji',
    author: 'Trend Akademi',
    date: '2022-01-12',
    readTime: '4 dk',
  },
  {
    id: '4',
    slug: 'dijital-pazarlama-e-ticaret',
    title: 'E-Ticarette Dijital Pazarlama Stratejileri',
    excerpt: 'Sosyal medya, SEO ve reklam kampanyaları ile e-ticaret satışlarınızı nasıl artırırsınız?',
    content: `
      <p>Dijital pazarlama, e-ticaret başarısının olmazsa olmazıdır. İşte etkili stratejiler:</p>
      
      <h3>Sosyal Medya Pazarlaması</h3>
      <p>Instagram, Facebook ve TikTok üzerinden organik ve ücretli içeriklerle hedef kitlenize ulaşın. Influencer iş birlikleri düşünün.</p>
      
      <h3>SEO Optimizasyonu</h3>
      <p>Ürün sayfalarınızı, kategori sayfalarınızı ve blog içeriklerinizi arama motorları için optimize edin. Anahtar kelime araştırması yapın.</p>
      
      <h3>Google ve Meta Reklamları</h3>
      <p>Hedefli reklam kampanyaları ile potansiyel müşterilere ulaşın. Dönüşüm takibi kurun.</p>
      
      <p>Trendmax entegrasyonları ile tüm kanalları tek panelden yönetebilirsiniz.</p>
    `,
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2e0d5?auto=format&fit=crop&w=800&q=80',
    category: 'Pazarlama',
    author: 'Trend Akademi',
    date: '2022-01-08',
    readTime: '6 dk',
  },
  {
    id: '5',
    slug: 'musteri-deneyimi-e-ticaret',
    title: 'E-Ticarette Müşteri Deneyimi Nasıl İyileştirilir?',
    excerpt: 'Müşteri memnuniyeti ve sadakati için e-ticaret süreçlerinizi optimize edin.',
    content: `
      <p>Müşteri deneyimi, satışları ve marka değerini doğrudan etkiler. İşte iyileştirme ipuçları:</p>
      
      <h3>Kolay Navigasyon</h3>
      <p>Site yapınızı sadeleştirin. Ürünlere 3 tıklama içinde ulaşılabilir olsun.</p>
      
      <h3>Hızlı Ödeme ve Kargo</h3>
      <p>Tek tıkla ödeme, hızlı kargo seçenekleri sunun. Sipariş takibi kolay olsun.</p>
      
      <h3>Müşteri Destek</h3>
      <p>Canlı destek, hızlı yanıt süreleri, net iade politikası. Müşteri sorularını hızlıca yanıtlayın.</p>
      
      <h3>Kişiselleştirme</h3>
      <p>Öneri motorları, hedefli kampanyalar ile kişiselleştirilmiş deneyim sunun.</p>
    `,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    category: 'Müşteri',
    author: 'Trend Akademi',
    date: '2022-01-05',
    readTime: '5 dk',
  },
  {
    id: '6',
    slug: 'mobil-uyumlu-e-ticaret',
    title: 'Mobil Uyumlu E-Ticaret Siteleri Neden Önemli?',
    excerpt: 'Mobil trafiğin artışı ile birlikte responsive tasarım artık zorunluluk. Nedenleri ve nasılı.',
    content: `
      <p>Türkiye'de e-ticaret trafiğinin büyük kısmı mobil cihazlardan geliyor. Mobil uyumluluk artık tercih değil, gerekliliktir.</p>
      
      <h3>İstatistikler</h3>
      <p>Mobil alışveriş oranları her yıl artıyor. Google, mobil uyumlu olmayan siteleri arama sonuçlarında geri plana atıyor.</p>
      
      <h3>Ne Yapmalı?</h3>
      <ul>
        <li>Responsive tasarım kullanın</li>
        <li>Touch-friendly butonlar ve menüler</li>
        <li>Hızlı yüklenme süreleri</li>
        <li>Mobil ödeme seçenekleri</li>
      </ul>
      
      <p>Trendmax temaları mobil-first yaklaşımla tasarlanmıştır.</p>
    `,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    category: 'Teknoloji',
    author: 'Trend Akademi',
    date: '2022-01-02',
    readTime: '4 dk',
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  BLOG_POSTS.find((post) => post.slug === slug);
