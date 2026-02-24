
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSection {
  title: string;
  items: FaqItem[];
}

const ECOMMERCE_FAQS: FaqItem[] = [
  { question: "Sermayemiz olması şart mı ? Ne kadar sermayeye ihtiyaç var ?", answer: "Sıfır Sermaye E-Ticaret sisteminde ürün, stok, şirket kurma, kargo, vergi ve operasyonel maliyetiniz yoktur. Tüm operasyon tarafımızca finanse edilir ve siz sadece kar marjınızda odaklanırsınız. Dijital pazarlama tarafında harcayacağınız reklam bütçesi tamamen sizin tasarrufunuzdadır." },
  { question: "Mağaza kurabilmek için şirket & vergi mükellefi olmam gerekiyor mu ?", answer: "Sıfır sermaye sistemi ile kendi e-ticaret mağazanızın sahibi olmanız için şirket & vergi mükellefi olmanız gerekmiyor. Vergi, fatura, tedarik gibi tüm süreçleri biz yönetiyoruz, siz sadece reklam & satış yapmaya başlayıp markanızı büyütmeye odaklanabiliyorsunuz." },
  { question: "Vergi mükellefi olmadan satış yapıyorsam satışlardan elde ettiğim kârımı nasıl alacağım ?", answer: "Sıfır Sermaye sisteminde elde ettiğiniz kârı panelinizde anlık olarak takip edebiliyor olacaksınız. Kazancınız her ay sonunda hesaplanarak tarafınıza bildiriliyor ve takip eden ayın 5. gününde tarafınıza ödeniyor olacak." },
  { question: "Nasıl e-ticaret mağazası alabilirim ?", answer: "Web sayfamızda paketler bölümüne giriş yaptıktan sonra ''Sıfır Sermaye E-Ticaret Sitesi Paketi'' sekmesine tıklayın. Paketi seçtikten sonra eğer hali hazırda bir alan adınız yoksa, alan adı satın al bölümünden e-ticaret sitenizi kurmamızı istediğiniz alan adı ismini girerek sorgula bölümüne tıklayın ve bir sonraki aşamaya geçin. Alan adınız hazır ise 'Kendi Alan Adını Kullan' sekmesine sahip olduğunuz domainin girişini yaparak bir sonraki aşamaya devam edin. Kredi kartı ile öde ya da banka havalesi seçeneklerinden birini seçerek satın alma işlemini tamamlayabilirsiniz." },
  { question: "E-Ticaret tecrübem yok, zorluk yaşar mıyım ?", answer: "Sıfır Sermaye e-ticaret sisteminde size gerekli olan tüm teknik, hukuki, kargo ve ödeme alt yapısını hazır vaziyette teslim ediyoruz. Trend Akademi olarak kuruluştan itibaren tüm süreçlerde size destek oluyor, sistem kullanımı ve dijital pazarlama eğitimlerimiz ile her noktada size destek oluyoruz." },
  { question: "E-Ticaret mağazamda ürün satıldığında fatura kesmem gerekiyor mu ? Ürün kargolama süreci nasıl olacak ?", answer: "Mağazanızda ürün satıldığında herhangi bir manuel müdahale gerekmeksizin otomatik olarak sipariş havuzuna düşer ve tedarikçi bilgilendirilerek müşterinize ürünün kargolanması sağlanır. Tüm kargo firmaları ile anlaşmalı olarak çalışan tedarikçilerimiz ürünlerin zamanında ve sorunsuz kargolanmasından sorumludur." },
  { question: "Mağaza tasarımında değişiklik yapabilir miyim ?", answer: "Mağaza başlığı, logo ve banner alanlarını dilediğiniz gibi değiştirebilir, mağaza tasarımınızı özgünleştirebilirsiniz. Dönemsel ya da sürekli yapacağınız kampanyalara uygun tasarımlar yapabilir, dilediğiniz kategori ya da ürüne yönlendirme yapabilirsiniz. Trend Akademi olarak dijital pazarlama ve tasarım desteği hizmetlerimiz de bulunmaktadır." },
  { question: "Ürün ekleme & çıkarma yapabilir miyim ?", answer: "Dilediğiniz kategoride ürün ekleme & çıkarma yapabilir, dilerseniz belli kategorilere yoğunlaşarak mağazanızı butik hale getirebilirsiniz." },
  { question: "Satabileceğimiz kaç ürün var, tedarikçi siz misiniz ?", answer: "Sıfır sermaye E-Ticaret mağazanızda 30.000 + ürün bulunmaktadır. Yeni tedarikçi anlaşmaları ile günden güne ürün portföyünüzü arttırmak için çalışıyoruz." },
  { question: "Karlılık nasıl, yüzde kaç karlılıkla çalışacağız ?", answer: "Kar marjını ayarlamak tamamen sizin kontrolünüzdedir. Size özel kullanıcı paneliniz kar marjını ayarlama, gerektiğinde düşürüp yükseltme ve kampanyalara katılma rahatlığı sağlar. Başlangıçta ürünler için ayarlayacağımız minimum kar marjı %20'tir. Sektör ve ürünlere göre kar marjınız %25 - %60 aralığında değişiyor olacaktır." },
  { question: "Satış garantisi veriyor musunuz ?", answer: "Eğitim sürecinde öğrendiğiniz tüm aşamaları eksiksiz bir şekilde tamamlamanız ve işinize odaklanmanız durumunda kuracağımız sistem ile satış yapmamanız mümkün değildir. Dijital pazarlama eğitimlerimiz ile sizleri her daim destekliyor olacağız." },
  { question: "Mağaza paketi dışında ücret ödeyecek miyim ? Ücret aylık, yıllık mı ?", answer: "Mağaza kurulumu hizmet bedelimiz tek seferliktir. Paket içeriğinde bulunmayan bir hizmet talep etmediğiniz sürece ekstra ücretlendirme ya da sürpriz bir ödemeyle asla karşılaşmazsınız. Panel yönetimi & dijital pazarlama hizmetlerinde talebinize göre aylık & yıllık danışmanlık paketlerimiz de bulunmaktadır. 1. Yılı tamamlamanızın ardından hosting hizmetleri için yıllık yenileme güncel hizmet bedeli 59 USD + kdv'dir. Domain yenileme ücreti hizmet aldığınız firmaya göre değişkenlik göstermektedir." },
  { question: "Takip eden yıllar için herhangi bir taahhüt & sözleşme imzalıyor muyuz ?", answer: "Firmamızdan aldığınız hizmetler ile ilgili sizden habersiz asla yenileme yapılmaz, taahhüt & sözleşme imzalatılmaz. Sıfır sermaye e-ticaret projesini her yıl yenilemek tamamen sizin tasarrufunuzdadır." },
  { question: "Müşteriler satın aldıkları ürünü iade etmek isterse süreç nasıl işliyor ?", answer: "İade süreçlerinde müşterinin muhattabı tamamen biziz, uygun şartlarda iadeyi kabul etmek, tedarikçi firmaya iadesini sağlamak tamamen bizim sorumluluğumuzdadır. İade & hasarlı ürün kargo maliyeti de dahil hiç bir sorunla siz uğraşmayacaksınız." },
];

const MARKETPLACE_FAQS: FaqItem[] = [
  { question: "Eğitimler nasıl veriliyor, ofisinize gelmemiz gerekiyor mu ?", answer: "Eğitimlerimizin tamamı uzaktan bağlantı yöntemi ile verilmektedir, dolayısıyla lokasyonunuz neresi olursa olsun bilgisayar ve internet bağlantınız olduğu sürece her yerden eğitime katılabilirsiniz. Görüşme ve toplantı talepleriniz için mesai saatleri içerisinde ofisimizin kapıları size her daim açıktır 😊" },
  { question: "Eğitimler videolu mu ? Birebir eğitim nasıl oluyor ?", answer: "Videolu eğitim sadece eğitimde öğrendiklerinizi pekiştirmeniz için kullanılmaktadır. Trend Akademi bünyesindeki tüm kursiyerlerimiz, kendilerine özel olarak atanmış eğitmenlerimize birebir kişiye özel eğitim almaktadır." },
  { question: "Eğitim ne kadar sürüyor ?", answer: "Teorik ve pratik eğitim için ön görülen ortalama süre 1 haftadır. Sizin günlük eğitim ve pratiklere ayırabildiğiniz birim süreye göre +- değişkenlik gösterebilmektedir." },
  { question: "Eğitim paketi dışında ücret ödeyecek miyim ? Ücret aylık, yıllık mı ?", answer: "Eğitim hizmet bedelimiz tek seferliktir. Paket içeriğinde bulunmayan bir hizmet talep etmediğiniz sürece ekstra ücretlendirme ya da sürpriz bir ödemeyle asla karşılaşmazsınız. Panel yönetimi & dijital pazarlama yönetimi alanlarında talebinize göre aylık & yıllık danışmanlık paketlerimiz de bulunmaktadır." },
  { question: "Kendimize ait mağazamız mı olacak ?", answer: "Eğitim ve kurulum desteği aldığınız ilgili Pazar yerlerinde (Trendyol, Gittigidiyor, Hepsiburada vb.) mağaza ismi tarafınızca özel olarak belirlenmiş bir mağaza sahibi olacaksınız. Mağazanızda herhangi bir sınır olmadan dilediğiniz kategoride ve sayıda ürün satışı yapıyor olacaksınız." },
  { question: "Ürünleri tek tek manuel mi yükleyeceğim ? Entegratör yazılım nedir ?", answer: "Kendi ürettiğiniz & tedarik ettiğiniz ürünleri dilerseniz manuel olarak tek tek, excel ile veya yazılım entegratörü ile yükleyebilirsiniz. Eğitim sonunda tüm yöntemlerle ürün yüklemeyi öğrenmiş ve uygulayabiliyor olacaksınız. Entegratör yazılım, ürün yükleme ve güncelleme işlemlerini, görsel, stok ve fiyat takibini otomatikleştiren otonom bir yazılımdır." },
  { question: "Hangi Pazar yerlerinde mağaza açabiliyoruz ?", answer: "Trendyol, Gittigidiyor, Hepsiburada, n11, Çiçeksepeti, Amazon, ePttavm, ve diğer tüm Pazar yerlerinde eğitim desteğimiz bulunmaktadır." },
  { question: "Satışa ne zaman başlayabilirim ?", answer: "Ürünleriniz ilgili Pazar yerinde yayına alındığı anda satış yapmaya hazırsınız demektir. Bu süre maksimum bir hafta, yeterince vakit ayırırsanız 5 iş gününe kadar düşebilir." },
  { question: "Şirket kurmamız gerekiyor mu ?", answer: "Pazar yerlerinde satış yapabilmeniz için vergi mükellefi olmanız, yani şahıs şirketi, limited şirket ya da anonim şirket türlerinden birine sahip olmanız şarttır. Mali müşavir desteğimiz ile şirket açılışınızı sadece birkaç günde ekstra maliyet olmadan paket kapsamında gerçekleştiriyoruz. Vergi mükellefi olmadan satış yapmak için ''Sıfır Sermaye E-Ticaret'' paketimizi inceleyebilirsiniz." },
  { question: "Sermayemiz olması şart mı ? Ne kadar sermayeye ihtiyaç var ?", answer: "Başlangıç sermayesi tamamen yapmak istediğiniz & hedeflediğiniz ciro ile doğru orantılıdır. Pazar yeri hak ediş ödeme vadeleri 14 gün – 30 gün arasına değiştiğinden ekstra sermaye ayırmadan kredi kartı kullanarak bile işinizi finanse edebilirsiniz." },
  { question: "Dropshipping (Stoksuz E-Ticaret) Nedir ?", answer: "Dropshipping (Stoksuz Satış), stoğunuzda olmayan ve başka bir satıcıya veya üreticiye ait bir ürünün, kendi web siteniz veya bir e-ticaret platformunda (Amazon, Shopify, eBay, Hepsiburada, Gittigidiyor, N11, Trendyol v.b) bulunan sanal mağazanız üzerinden satıldığı bir E-Ticaret ( Online Satış ) metodudur." },
  { question: "Ürünleri nereden tedarik edeceğiz ?", answer: "Züccaciye, su arıtma, ayakkabı, çanta, giyim, aksesuar, kozmetik, bilgisayar & elektronik ve daha bir çok farklı sektörde anlaşmalı olduğumuz dropshipping (stoksuz e-ticaret) tedarikçilerimiz bulunmaktadır. Mağazanızı kurarken tedarikçiler arasından birlikte seçim yapıyor ve bayiliklerinizi alarak ürün yüklemelerini yine birlikte yapıyor olacağız." },
  { question: "Stok tutmamız gerekiyor mu ? Ne satacağımıza nasıl karar vereceğiz ?", answer: "Dropshipping yöntemi ile satış yaparken stok tutmanıza gerek yoktur. Ürün satın alındığında tedarikçinize siparişi geçerek direkt müşterinize kendi adınıza kargolatırsınız." },
  { question: "Satabileceğimiz kaç ürün var, tedarikçi siz misiniz ?", answer: "Ürün sayısı hedeflediğiniz ciroya göre ayarlanabilmektedir. Standart kurulumda 8 ila 10 bin ürün varken, ürün kaynağını arttırarak 20 – 30 bin aralığına ulaşmak ta mümkündür." },
  { question: "Karlılık nasıl, yüzde kaç karlılıkla çalışacağız ?", answer: "Kar marjını ayarlamak tamamen bizim kontrolümüzdedir. Entegrasyon yazılım bize kar marjını ayarlama, gerektiğinde düşürüp yükseltme ve kampanyalara katılma rahatlığı sağlar. Eğitim sürecinde dropshipping ürünleri için ayarlayacağımız minimum kar marjı %25'tir. Sektör ve ürünlere göre kar marjınız %25 - %60 aralığında değişiyor olacaktır." },
  { question: "Satış garantisi veriyor musunuz ?", answer: "Eğitim sürecinde öğrendiğiniz tüm aşamaları eksiksiz bir şekilde tamamlamanız ve işinize odaklanmanız durumunda kuracağımız sistem ile satış yapmamanız mümkün değildir." },
  { question: "Kargolarla anlaşmamız gerekiyor mu ?", answer: "Stoksuz e-ticaretin en önemli avantajlarından biri de kargoyu düşünmek zorunda olmamanızdır. Kendi kargo anlaşmanızı yapmanız gerekmez, Pazar yeri kargo entegrasyonları sayesinde en uygun fiyatlarla kargo gönderimi sağlamış olacaksınız." },
  { question: "Satılan ürünleri nasıl göndereceğiz ?", answer: "Müşteriniz Pazar yeri platformundaki mağazanızdan ürün satın aldığında sipariş kontrol panelinize yansır. Gelen siparişi tedarikçinizin sipariş sistemi üzerinden ödemesini yaparak öncelikle satın alırsınız. Akabinde pazaryeri tarafından verilen kargo barkodunu kullanarak ürünü kendi adınıza direkt müşterinize kargolatırsınız." },
];

const SSS: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('0-0');

  const toggleAccordion = (colIndex: number, itemIndex: number) => {
    const id = `${colIndex}-${itemIndex}`;
    setOpenId(openId === id ? null : id);
  };

  const renderFaqColumn = (section: FaqSection, colIndex: number) => (
    <div key={colIndex} className="lg:col-span-1">
      <h3 className="block text-center text-xl font-bold text-gray-900 mb-6">
        {section.title}
      </h3>
      <div className="mt-6">
        <ul className="space-y-2">
          {section.items.map((item, itemIndex) => {
            const isOpen = openId === `${colIndex}-${itemIndex}`;
            return (
              <li
                key={itemIndex}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(colIndex, itemIndex)}
                  className="w-full flex items-start gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="flex-shrink-0 mt-0.5 text-orange-600">
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                  <span className="font-semibold text-gray-900 flex-1">
                    {item.question}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pl-14">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex space-x-2 text-orange-600 text-sm font-bold mb-8 uppercase tracking-widest">
            <Link to="/" className="hover:text-orange-700 transition-colors">Ana Sayfa</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">SSS</span>
          </nav>

          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Merak ettikleriniz hakkında başlıca bilgilere buradan ulaşabilirsiniz.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12">
            {renderFaqColumn(
              { title: 'E-ticaret Paketleri Hakkında', items: ECOMMERCE_FAQS },
              0
            )}
            {renderFaqColumn(
              { title: 'Pazaryeri Eğitimleri Hakkında', items: MARKETPLACE_FAQS },
              1
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SSS;
