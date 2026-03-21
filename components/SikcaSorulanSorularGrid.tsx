import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SSS_FAQ_SECTIONS, type SssFaqSection } from '../data/sssFaqs';

export type SikcaSorulanSorularGridProps = {
  /** SSS sayfası: ilk soru açık */
  defaultOpenId?: string | null;
  /** Section sarmalayıcı (SSS ile aynı: py-20 bg-gray-50) */
  sectionClassName?: string;
  /** Grid üstü ortalanmış başlık */
  introTitle?: string;
  introDescription?: string;
  introClassName?: string;
  footer?: React.ReactNode;
};

const SikcaSorulanSorularGrid: React.FC<SikcaSorulanSorularGridProps> = ({
  defaultOpenId = null,
  sectionClassName = 'py-20 bg-gray-50',
  introTitle,
  introDescription,
  introClassName = 'text-center max-w-3xl mx-auto mb-12',
  footer,
}) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  const toggleAccordion = (colIndex: number, itemIndex: number) => {
    const id = `${colIndex}-${itemIndex}`;
    setOpenId(openId === id ? null : id);
  };

  const renderFaqColumn = (section: SssFaqSection, colIndex: number) => (
    <div key={colIndex} className="lg:col-span-1">
      <h3 className="block text-center text-xl font-bold text-gray-900 mb-6">{section.title}</h3>
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
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                  <span className="font-semibold text-gray-900 flex-1">{item.question}</span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pl-14">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
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
    <section className={sectionClassName}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(introTitle || introDescription) && (
          <div className={introClassName}>
            {introTitle && <h2 className="text-4xl font-black text-gray-900 mb-4">{introTitle}</h2>}
            {introDescription && <p className="text-gray-500">{introDescription}</p>}
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {SSS_FAQ_SECTIONS.map((sec, colIndex) => renderFaqColumn(sec, colIndex))}
        </div>
        {footer && <div className="mt-10">{footer}</div>}
      </div>
    </section>
  );
};

export default SikcaSorulanSorularGrid;
