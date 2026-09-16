import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { getLegalPageBySlug, LEGAL_LAST_UPDATED } from '../data/legalPages';
import AnimatedHero from '../components/AnimatedHero';
import { HERO_IMAGES } from '../data/heroImages';

const LegalPage: React.FC = () => {
  const { slug } = useParams();
  const legalPage = getLegalPageBySlug(slug);

  if (!legalPage) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
            <h1 className="mb-4 text-2xl font-black text-gray-900">Belge bulunamadı</h1>
            <p className="mb-6 text-gray-600">İstediğiniz yasal belge şu anda mevcut değil.</p>
            <Link
              to="/"
              className="inline-flex rounded-xl bg-orange-600 px-6 py-3 font-bold text-white transition-colors hover:bg-orange-700"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16 pt-20">
      <AnimatedHero
        title={legalPage.title}
        subtitle={`${legalPage.summary} Son güncelleme: ${LEGAL_LAST_UPDATED}`}
        breadcrumb={[{ label: 'Yasal Metinler' }, { label: legalPage.title }]}
        icon={FileText}
        badge="Yasal Bilgilendirme"
        image={HERO_IMAGES.corporateOperations}
        imagePosition="center right"
        showActions={false}
        compact
      />

      <div id="icerik" className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <article className="space-y-9 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
          {legalPage.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-4 text-xl font-black text-gray-900 sm:text-2xl">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mb-3 leading-7 text-gray-600 last:mb-0">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-3 pl-5 text-gray-600">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="list-disc leading-7 marker:text-orange-500">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>

        <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50 p-5 text-sm leading-relaxed text-orange-950">
          Bu metin, internet sitesindeki mevcut hizmet ve satış akışını açıklamak amacıyla yayımlanmıştır.
          Sorularınız veya hak talepleriniz için <Link to="/iletisim" className="font-bold underline">iletişim sayfamızı</Link> kullanabilirsiniz.
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
