export const PAYTR_PRODUCTS = [
  {
    type: 'yazilim',
    sourceId: 'basic',
    title: 'Başlangıç',
    amountTRY: 19500,
  },
  {
    type: 'yazilim',
    sourceId: 'plus',
    title: 'Uzman',
    amountTRY: 27500,
  },
  {
    type: 'yazilim',
    sourceId: 'extreme',
    title: 'Üst Düzey',
    amountTRY: 35500,
  },
  {
    type: 'egitim',
    sourceId: 'pazaryeri',
    title: 'Pazar Yeri Stoksuz E-Ticaret Birebir Eğitim Paketi',
    amountTRY: 12500,
  },
  {
    type: 'egitim',
    sourceId: 'sifir-sermaye',
    title: 'Sıfır Sermaye E-Ticaret Sitesi Paketi',
    amountTRY: 18500,
  },
  {
    type: 'egitim',
    sourceId: 'full-full',
    title: "Full + Full 2'si Bir Arada Paketi",
    amountTRY: 28500,
  },
];

export function findPaytrProduct(type, sourceId) {
  return PAYTR_PRODUCTS.find(
    (product) => product.type === type && product.sourceId === sourceId,
  );
}
