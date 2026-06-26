import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getLegalPageBySlug } from '../data/legalPages';

const LegalPage: React.FC = () => {
  const { slug } = useParams();
  const legalPage = getLegalPageBySlug(slug);

  if (!legalPage) {
    return (
      <div className="pt-24 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
            <h1 className="text-2xl font-black text-gray-900 mb-4">Belge Bulunamadi</h1>
            <p className="text-gray-600 mb-6">Istediginiz yasal belge su anda mevcut degil.</p>
            <Link
              to="/"
              className="inline-flex px-6 py-3 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-700 transition-colors"
            >
              Ana Sayfaya Don
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <Link to="/" className="text-sm font-semibold text-orange-600 hover:text-orange-700">
            Ana Sayfa
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-sm text-gray-600">{legalPage.title}</span>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between gap-4">
            <h1 className="text-2xl md:text-3xl font-black text-gray-900">{legalPage.title}</h1>
            <a
              href={legalPage.downloadFilePath}
              download
              className="text-sm font-semibold text-orange-600 hover:text-orange-700"
            >
              Indir
            </a>
          </div>

          <iframe
            title={legalPage.title}
            src={legalPage.filePath}
            className="w-full h-[75vh] bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
