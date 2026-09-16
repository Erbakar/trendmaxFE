import { COMPANY_CONTACT, LEGAL_DOCUMENT_VERSION } from './company';

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalPage = {
  slug: string;
  title: string;
  summary: string;
  sections: LegalSection[];
};

const sellerDetails = `${COMPANY_CONTACT.legalName} (Trendmax), ${COMPANY_CONTACT.bursaAddress}; telefon: ${COMPANY_CONTACT.phoneDisplay}; e-posta: ${COMPANY_CONTACT.email}; web: trendmaxtr.com.`;

export const LEGAL_PAGES: LegalPage[] = [
  {
    slug: 'kullanim-kosullari',
    title: 'Kullanım Koşulları',
    summary: 'Trendmax internet sitesinin ve çevrim içi hizmetlerinin kullanım şartları.',
    sections: [
      {
        heading: 'Taraf ve kapsam',
        paragraphs: [
          `trendmaxtr.com alan adlı internet sitesi ${COMPANY_CONTACT.legalName} tarafından Trendmax markasıyla işletilmektedir. Bu koşullar; site içeriğinin, iletişim kanallarının, demo alanlarının ve çevrim içi satın alma akışının kullanımını kapsar.`,
          sellerDetails,
        ],
      },
      {
        heading: 'Site kullanımı',
        bullets: [
          'Kullanıcı, siteyi hukuka ve dürüstlük kurallarına uygun biçimde kullanmayı kabul eder.',
          'Siteye zarar verecek, güvenliği aşmaya çalışacak veya üçüncü kişilerin kullanımını engelleyecek işlemler yapılamaz.',
          'Paket kapsamı, fiyatı, vergiler ve teslim yöntemi satın alma ekranında gösterilen güncel bilgilerle belirlenir.',
        ],
      },
      {
        heading: 'Fikri mülkiyet',
        paragraphs: [
          'Aksi açıkça belirtilmedikçe Trendmax adı, tasarımlar, metinler, yazılım bileşenleri ve görseller üzerindeki haklar işletmeciye veya ilgili lisans sahibine aittir. Yazılı izin olmadan ticari amaçla kopyalanamaz ve yeniden yayımlanamaz.',
        ],
      },
      {
        heading: 'Sorumluluk ve güncellemeler',
        paragraphs: [
          'Trendmax, hizmetin güvenli ve kesintisiz sunulması için makul önlemleri alır. Bakım, üçüncü taraf hizmetleri veya mücbir sebepler nedeniyle geçici kesintiler yaşanabilir. Koşullar mevzuat ve hizmet kapsamındaki değişikliklere göre güncellenebilir.',
        ],
      },
      {
        heading: 'İletişim',
        paragraphs: [`Sorularınız için ${COMPANY_CONTACT.email} adresine yazabilir veya ${COMPANY_CONTACT.phoneDisplay} numarasını arayabilirsiniz.`],
      },
    ],
  },
  {
    slug: 'gizlilik-ve-guvenlik',
    title: 'Gizlilik ve Güvenlik Politikası',
    summary: 'Web sitesi, iletişim formları ve ödeme akışındaki bilgilerin korunmasına ilişkin politika.',
    sections: [
      {
        heading: 'Veri güvenliği yaklaşımımız',
        paragraphs: [
          'Trendmax; kimlik, iletişim, fatura adresi ve sipariş bilgilerini yalnızca hizmetin sunulması, müşteri desteği, faturalandırma ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işler.',
          'Kart numarası, son kullanma tarihi ve güvenlik kodu Trendmax sunucularında toplanmaz veya saklanmaz. Kart bilgileri PayTR tarafından kendi güvenli ödeme ekranında işlenir.',
        ],
      },
      {
        heading: 'Paylaşım ve hizmet sağlayıcılar',
        paragraphs: [
          'Bilgiler; ödeme işlemi için PayTR, hizmetin işletilmesi için barındırma ve teknik altyapı sağlayıcıları, faturalandırma ve yasal yükümlülükler için yetkili kurumlarla, yalnızca amaçla sınırlı ölçüde paylaşılabilir. Kişisel veriler izinsiz olarak satılmaz.',
        ],
      },
      {
        heading: 'Teknik kayıtlar ve çerezler',
        paragraphs: [
          'Güvenlik, hata tespiti ve hizmet performansı için IP adresi, tarayıcı türü, erişim zamanı ve benzeri teknik kayıtlar tutulabilir. Zorunlu olmayan pazarlama çerezleri kullanılması halinde ayrıca tercih mekanizması sunulur.',
        ],
      },
      {
        heading: 'Güvenliğiniz için',
        bullets: [
          'Ödeme sırasında adres çubuğundaki alan adını ve güvenli bağlantıyı kontrol edin.',
          'Kart bilgilerinizi Trendmax çalışanları dahil hiç kimseyle telefon, e-posta veya mesaj yoluyla paylaşmayın.',
          'Şüpheli bir işlem görürseniz derhal bankanız ve Trendmax ile iletişime geçin.',
        ],
      },
      {
        heading: 'Başvuru ve iletişim',
        paragraphs: [`Gizlilik taleplerinizi ${COMPANY_CONTACT.email} adresinden veya ${COMPANY_CONTACT.bursaAddress} adresine yazılı olarak iletebilirsiniz.`],
      },
    ],
  },
  {
    slug: 'kvkk-aydinlatma-metni',
    title: 'KVKK Aydınlatma Metni',
    summary: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.',
    sections: [
      {
        heading: 'Veri sorumlusu',
        paragraphs: [`6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında veri sorumlusu ${sellerDetails}`],
      },
      {
        heading: 'İşlenen kişisel veriler',
        bullets: [
          'Kimlik ve iletişim bilgileri: ad soyad, e-posta, telefon.',
          'Müşteri işlem bilgileri: seçilen paket, sipariş numarası, ödeme durumu, sözleşme onay kayıtları.',
          'Adres ve fatura bilgileri.',
          'İşlem güvenliği bilgileri: IP adresi, erişim zamanı, kullanıcı aracısı ve teknik kayıtlar.',
          'Talep ve şikâyet kapsamında paylaştığınız bilgiler.',
        ],
      },
      {
        heading: 'İşleme amaçları ve hukuki sebepler',
        paragraphs: [
          'Veriler; sözleşmenin kurulması ve ifası, ödeme ve sipariş süreçlerinin yürütülmesi, destek sağlanması, fatura ve muhasebe yükümlülüklerinin yerine getirilmesi, dolandırıcılığın önlenmesi ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenir.',
          'İşleme faaliyetleri KVKK’nın 5. maddesindeki sözleşmenin kurulması veya ifası, hukuki yükümlülük, bir hakkın tesisi ve meşru menfaat sebeplerine dayanır. Açık rıza gereken faaliyetler için ayrıca onay alınır.',
        ],
      },
      {
        heading: 'Aktarım',
        paragraphs: [
          'Veriler; ödeme hizmeti sağlayıcısı PayTR, barındırma ve teknik altyapı sağlayıcıları, mali müşavirlik ve faturalandırma hizmetleri ile kanunen yetkili kamu kurumlarına, amaçla sınırlı ve gerekli güvenlik önlemleri alınarak aktarılabilir.',
        ],
      },
      {
        heading: 'Toplama yöntemi ve saklama',
        paragraphs: [
          'Veriler web formları, ödeme adımları, e-posta, telefon ve destek kanalları üzerinden elektronik veya fiziki yöntemlerle toplanır. İlgili mevzuatta öngörülen veya işleme amacı için gerekli süre boyunca saklanır; süre sonunda silinir, yok edilir veya anonimleştirilir.',
        ],
      },
      {
        heading: 'KVKK kapsamındaki haklarınız',
        paragraphs: [
          'KVKK’nın 11. maddesi uyarınca verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, amacına uygun kullanılıp kullanılmadığını öğrenme, aktarılan kişileri bilme, düzeltme, silme veya yok etme isteme, otomatik analiz sonucuna itiraz etme ve zararın giderilmesini talep etme haklarına sahipsiniz.',
          `Başvurularınızı kimliğinizi doğrulayacak bilgilerle ${COMPANY_CONTACT.email} adresine veya ${COMPANY_CONTACT.bursaAddress} adresine iletebilirsiniz.`,
        ],
      },
    ],
  },
  {
    slug: 'on-bilgilendirme-formu',
    title: 'Ön Bilgilendirme Formu',
    summary: 'E-ticaret yazılımı, kurulum, eğitim ve danışmanlık hizmetleri için satış öncesi bilgiler.',
    sections: [
      {
        heading: 'Satıcı bilgileri',
        paragraphs: [sellerDetails],
      },
      {
        heading: 'Hizmetin temel nitelikleri',
        paragraphs: [
          'Satışa konu hizmet; ödeme sayfasında adı, kapsamı ve fiyatı gösterilen e-ticaret yazılımı, kurulum, entegrasyon, eğitim veya danışmanlık paketidir. Pakete dahil özellikler fiyatlar ve ilgili çözüm sayfalarında açıklanır.',
          'Müşteri, ödeme öncesinde seçtiği paketin adını, toplam bedelini ve KDV durumunu sipariş özetinde görür.',
        ],
      },
      {
        heading: 'Toplam bedel ve ödeme',
        paragraphs: [
          'Paket fiyatları Türk Lirası olarak ve KDV dahil gösterilir. Kredi/banka kartı ödemeleri PayTR güvenli ödeme altyapısı üzerinden alınır. Kart bilgileriniz Trendmax tarafından görülmez veya saklanmaz.',
        ],
      },
      {
        heading: 'Teslim ve ifa',
        paragraphs: [
          'Hizmet elektronik ortamda; hesap erişimi, yazılım kurulumu, uzaktan destek, çevrim içi eğitim veya dijital içerik erişimi şeklinde sağlanır. Paket kapsamı ve müşteri tarafından sağlanması gereken bilgi/erişimler tamamlandıktan sonra iş planı yazılı olarak bildirilir. Aksi ayrıca belirtilmedikçe hizmet en geç 30 gün içinde ifa edilir.',
        ],
      },
      {
        heading: 'Cayma ve iade',
        paragraphs: [
          'Tüketici, mesafeli hizmet sözleşmesinin kurulduğu tarihten itibaren 14 gün içinde cayma hakkına sahiptir. Tüketicinin açık talebiyle cayma süresi dolmadan ifasına başlanan hizmetlerde, hizmetin tamamen ifa edilmesi halinde cayma hakkı sona erebilir. Elektronik ortamda anında ifa edilen hizmetler ve anında teslim edilen dijital içerikler için mevzuattaki istisnalar uygulanabilir.',
          `Cayma bildirimi ${COMPANY_CONTACT.email} adresine veya ${COMPANY_CONTACT.bursaAddress} adresine iletilebilir. Ayrıntılar İptal ve İade Politikası'nda yer alır.`,
        ],
      },
      {
        heading: 'Şikâyet ve uyuşmazlık',
        paragraphs: [
          'Tüketici, yürürlükteki parasal sınırlar dahilinde yerleşim yerindeki veya işlemin yapıldığı yerdeki Tüketici Hakem Heyetine ya da Tüketici Mahkemesine başvurabilir.',
        ],
      },
    ],
  },
  {
    slug: 'mesafeli-satis-sozlesmesi',
    title: 'Mesafeli Satış Sözleşmesi',
    summary: 'Trendmax dijital hizmet paketlerinin çevrim içi satışına ilişkin sözleşme koşulları.',
    sections: [
      {
        heading: '1. Taraflar',
        paragraphs: [
          `Satıcı: ${sellerDetails}`,
          'Alıcı; ödeme adımında ad soyad, iletişim ve fatura adresi bilgilerini giren ve siparişi onaylayan gerçek veya tüzel kişidir.',
        ],
      },
      {
        heading: '2. Sözleşmenin konusu',
        paragraphs: [
          'Bu sözleşme, Alıcı’nın internet sitesi üzerinden seçtiği e-ticaret yazılımı, kurulum, entegrasyon, eğitim veya danışmanlık hizmetinin satışı ve ifasına ilişkin tarafların hak ve yükümlülüklerini düzenler.',
        ],
      },
      {
        heading: '3. Hizmet ve bedel',
        paragraphs: [
          'Hizmetin adı, temel nitelikleri, vergiler dahil toplam fiyatı ve ödeme şekli sipariş özeti ile Ön Bilgilendirme Formu’nda gösterilir. Alıcı, ödeme düğmesine basmadan önce bu bilgileri ve sözleşmeyi okuyup onaylar.',
        ],
      },
      {
        heading: '4. Ödeme',
        paragraphs: [
          'Kartlı ödemeler PayTR altyapısı üzerinden gerçekleştirilir. Ödeme, PayTR tarafından Satıcı’nın bildirim adresine gönderilen imzalı başarılı işlem bildirimi alındığında kesinleşir. Başarılı dönüş sayfası tek başına sipariş onayı sayılmaz.',
        ],
      },
      {
        heading: '5. İfa ve teslim',
        paragraphs: [
          'Hizmet, paketin niteliğine göre elektronik erişim, yazılım kurulumu, uzaktan toplantı, eğitim veya dijital içerik şeklinde ifa edilir. Alıcı, kurulum için gerekli alan adı, içerik, erişim veya şirket bilgilerini zamanında sağlamakla yükümlüdür. Aksi ayrıca kararlaştırılmadıkça yasal azami süre 30 gündür.',
        ],
      },
      {
        heading: '6. Cayma hakkı',
        paragraphs: [
          'Alıcı tüketici ise sözleşmenin kurulduğu tarihten itibaren 14 gün içinde gerekçe göstermeden cayabilir. Cayma bildirimi e-posta veya kalıcı veri saklayıcısı ile Satıcı’ya iletilir.',
          'Alıcı’nın açık talebi ve cayma hakkının sona ereceğine dair bilgilendirilmesi üzerine cayma süresi dolmadan ifasına başlanan hizmet tamamen ifa edildiğinde; ayrıca elektronik ortamda anında ifa edilen hizmetler veya anında teslim edilen dijital içerikler bakımından mevzuattaki şartlar oluştuğunda cayma hakkı kullanılamayabilir.',
        ],
      },
      {
        heading: '7. İptal ve iade',
        paragraphs: [
          'Cayma veya haklı iptal talebinin kabul edilmesi halinde tahsil edilen bedel, mevzuatta belirtilen süre içinde ve kullanılan ödeme aracına uygun biçimde iade edilir. Bankanın iade tutarını karta yansıtma süresi Satıcı’nın kontrolü dışındadır.',
        ],
      },
      {
        heading: '8. Uyuşmazlık',
        paragraphs: [
          'Tüketici işlemlerinde 6502 sayılı Kanun ve ilgili mevzuat uygulanır. Tüketici, güncel parasal sınırlar dahilinde Tüketici Hakem Heyetine veya Tüketici Mahkemesine başvurabilir.',
        ],
      },
      {
        heading: '9. Yürürlük',
        paragraphs: [
          'Alıcı, Ön Bilgilendirme Formu ve bu sözleşmeyi elektronik ortamda onaylayıp ödeme emrini verdiğinde sözleşme kurulur. Siparişe ait elektronik kayıtlar mevzuatta öngörülen süre boyunca saklanır.',
        ],
      },
    ],
  },
  {
    slug: 'teslimat-politikasi',
    title: 'Teslimat ve Hizmet İfa Politikası',
    summary: 'Trendmax paketlerinin elektronik teslim ve hizmete başlama esasları.',
    sections: [
      {
        heading: 'Teslimat biçimi',
        paragraphs: [
          'Trendmax üzerinden satılan paketler fiziksel kargo gerektirmeyen yazılım, kurulum, entegrasyon, eğitim ve danışmanlık hizmetleridir. Teslim; kullanıcı hesabı veya panel erişimi, uzaktan kurulum, e-posta, çevrim içi toplantı ya da dijital içerik erişimi yoluyla yapılır.',
        ],
      },
      {
        heading: 'Süreç ve süre',
        bullets: [
          'Başarılı ödeme bildiriminin ardından sipariş kaydı oluşturulur.',
          'Ekibimiz normal koşullarda bir iş günü içinde müşteriyle iletişime geçerek ihtiyaçları ve gerekli erişimleri teyit eder.',
          'Paketin iş planı ve tahmini teslim süresi yazılı olarak bildirilir. Aksi ayrıca belirtilmedikçe hizmet en geç 30 gün içinde tamamlanır.',
          '“24 saatte kurulum” gibi özel süreler yalnızca ilgili paket koşulları ve müşterinin gerekli tüm bilgileri eksiksiz sağlaması halinde geçerlidir.',
        ],
      },
      {
        heading: 'Müşteri kaynaklı gecikmeler',
        paragraphs: [
          'Alan adı, logo, ürün verisi, şirket bilgisi, pazaryeri hesabı veya üçüncü taraf erişimlerinin eksik ya da hatalı verilmesi teslim süresini etkileyebilir. Bu durumda yeni plan müşteriyle paylaşılır.',
        ],
      },
      {
        heading: 'Destek',
        paragraphs: [`Teslimatla ilgili sorularınız için ${COMPANY_CONTACT.phoneDisplay} veya ${COMPANY_CONTACT.email} üzerinden bize ulaşabilirsiniz.`],
      },
    ],
  },
  {
    slug: 'iade-politikasi',
    title: 'İptal, Cayma ve İade Politikası',
    summary: 'Dijital hizmet paketleri için iptal, cayma ve bedel iadesi koşulları.',
    sections: [
      {
        heading: 'Cayma hakkı',
        paragraphs: [
          'Tüketici, mesafeli hizmet sözleşmesinin kurulduğu tarihten itibaren 14 gün içinde herhangi bir gerekçe göstermeden cayma hakkını kullanabilir. Bildirimin bu süre içinde yazılı olarak veya kalıcı veri saklayıcısı ile iletilmesi yeterlidir.',
        ],
      },
      {
        heading: 'Hizmete erken başlama',
        paragraphs: [
          'Müşteri, ödeme sırasında ayrıca onay vererek hizmetin 14 günlük cayma süresi dolmadan başlatılmasını talep edebilir. Hizmetin açık onayla tamamen ifa edilmesi halinde cayma hakkı sona erebilir. Elektronik ortamda anında ifa edilen hizmetler ve anında teslim edilen dijital içerikler için mevzuattaki cayma hakkı istisnaları uygulanabilir.',
        ],
      },
      {
        heading: 'İade süreci',
        bullets: [
          `Talep, sipariş numarası ve iletişim bilgileriyle ${COMPANY_CONTACT.email} adresine gönderilir.`,
          'Talep ve hizmetin ifa durumu incelenerek müşteriye yazılı dönüş yapılır.',
          'İade hakkının doğması halinde tahsil edilen bedel yasal süre içinde, ödeme yapılan araca uygun biçimde iade edilir.',
          'Tutarın karta veya hesaba yansıma süresi bankanın işlem sürelerine göre değişebilir.',
        ],
      },
      {
        heading: 'Ayıplı veya eksik hizmet',
        paragraphs: [
          'Hizmetin kararlaştırılan kapsamdan eksik veya ayıplı sunulduğunu düşünüyorsanız destek kayıtlarıyla birlikte bize ulaşabilirsiniz. Tüketicinin ücretsiz düzeltme, bedel indirimi, sözleşmeden dönme ve mevzuattan doğan diğer seçimlik hakları saklıdır.',
        ],
      },
      {
        heading: 'İletişim',
        paragraphs: [sellerDetails],
      },
    ],
  },
];

export function getLegalPageBySlug(slug: string | undefined) {
  if (!slug) {
    return undefined;
  }
  return LEGAL_PAGES.find((item) => item.slug === slug);
}

export const LEGAL_LAST_UPDATED = LEGAL_DOCUMENT_VERSION;
