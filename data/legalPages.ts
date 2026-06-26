export type LegalPage = {
  slug: string;
  title: string;
  filePath: string;
  downloadFilePath: string;
};

export const LEGAL_PAGES: LegalPage[] = [
  {
    slug: 'kullanim-kosullari',
    title: 'Kullanim Kosullari',
    filePath: '/legal/hizmet-sartlari.html',
    downloadFilePath: '/legal/hizmet-sartlari.docx',
  },
  {
    slug: 'kvkk-aydinlatma-metni',
    title: 'KVKK Aydinlatma Metni',
    filePath: '/legal/gizlilik-ve-guvenlik.html',
    downloadFilePath: '/legal/gizlilik-ve-guvenlik.docx',
  },
  {
    slug: 'mesafeli-satis-sozlesmesi',
    title: 'Mesafeli Satis Sozlesmesi',
    filePath: '/legal/mesafeli-satis-sozlesmesi.html',
    downloadFilePath: '/legal/mesafeli-satis-sozlesmesi.docx',
  },
  {
    slug: 'teslimat-politikasi',
    title: 'Teslimat Politikasi',
    filePath: '/legal/teslimat-politikasi.html',
    downloadFilePath: '/legal/teslimat-politikasi.docx',
  },
  {
    slug: 'iade-politikasi',
    title: 'Iade Politikasi',
    filePath: '/legal/iade-politikasi.html',
    downloadFilePath: '/legal/iade-politikasi.docx',
  },
];

export function getLegalPageBySlug(slug: string | undefined) {
  if (!slug) {
    return undefined;
  }

  return LEGAL_PAGES.find((item) => item.slug === slug);
}
