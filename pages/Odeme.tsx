import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowDown, CheckCircle2, LockKeyhole, ShieldCheck } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/company';
import { findPaytrProduct } from '../shared/paytrProducts';

type PaytrTokenResponse = {
  token: string;
  iframeUrl: string;
  orderId: string;
  orderToken: string;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

declare global {
  interface Window {
    iFrameResize?: (options: Record<string, unknown>, selector: string) => void;
  }
}

const Odeme: React.FC = () => {
  const [params] = useSearchParams();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [privacyNotice, setPrivacyNotice] = useState(false);
  const [contracts, setContracts] = useState(false);
  const [earlyPerformance, setEarlyPerformance] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentInfo, setPaymentInfo] = useState<PaytrTokenResponse | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<1 | 2>(1);
  const formRef = useRef<HTMLFormElement>(null);
  const paymentAreaRef = useRef<HTMLDivElement>(null);

  const type = params.get('tip') ?? '';
  const sourceId = params.get('paket') ?? '';
  const selectedProduct = useMemo(() => findPaytrProduct(type, sourceId), [type, sourceId]);

  useEffect(() => {
    if (!paymentInfo) return;

    const resizePaytrFrame = () => window.iFrameResize?.({}, '#paytriframe');
    const existingScript = document.getElementById('paytr-iframe-resizer') as HTMLScriptElement | null;
    if (window.iFrameResize) {
      resizePaytrFrame();
      return;
    }
    if (existingScript) {
      existingScript.addEventListener('load', resizePaytrFrame, { once: true });
      return () => existingScript.removeEventListener('load', resizePaytrFrame);
    }

    const script = document.createElement('script');
    script.id = 'paytr-iframe-resizer';
    script.src = 'https://www.paytr.com/js/iframeResizer.min.js?v2';
    script.async = true;
    script.addEventListener('load', resizePaytrFrame, { once: true });
    document.body.appendChild(script);
    return () => script.removeEventListener('load', resizePaytrFrame);
  }, [paymentInfo]);

  const continueToApprovals = () => {
    if (!formRef.current?.reportValidity()) return;
    setCheckoutStep(2);
    window.setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };

  useEffect(() => {
    if (!paymentInfo) return;
    setIframeLoaded(false);
    const scrollTimer = window.setTimeout(() => {
      paymentAreaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 180);
    return () => window.clearTimeout(scrollTimer);
  }, [paymentInfo]);

  const handlePayment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedProduct) {
      setError('Seçilen paket bulunamadı.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/paytr/token/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productType: selectedProduct.type,
          productSourceId: selectedProduct.sourceId,
          customer: { fullName, email, phone, address },
          acceptances: {
            privacyNotice,
            preInformation: contracts,
            distanceSales: contracts,
            earlyPerformance,
          },
        }),
      });

      const data = await response.json().catch(() => null);
      if (!response.ok || !data) {
        throw new Error(data?.error ?? 'Ödeme başlatılamadı.');
      }

      const paymentSession = data as PaytrTokenResponse;
      sessionStorage.setItem(
        'trendmaxPaytrOrder',
        JSON.stringify({ orderId: paymentSession.orderId, orderToken: paymentSession.orderToken }),
      );
      setPaymentInfo(paymentSession);
    } catch (requestError) {
      const message =
        requestError instanceof Error ? requestError.message : 'Beklenmeyen bir hata oluştu.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (!selectedProduct) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
            <h1 className="mb-4 text-2xl font-black text-gray-900">Paket bulunamadı</h1>
            <p className="mb-6 text-gray-600">
              Ödeme sayfasına eksik veya hatalı bir paket seçimiyle geldiniz.
            </p>
            <Link
              to="/fiyatlar"
              className="inline-flex rounded-xl bg-orange-600 px-6 py-3 font-bold text-white transition-colors hover:bg-orange-700"
            >
              Paketlere Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16 pt-24">
      <div className="mx-auto mb-6 max-w-5xl px-4 sm:mb-8">
        <nav className="flex flex-wrap items-center gap-2 text-sm font-bold text-gray-500">
          <Link to="/" className="inline-flex min-h-11 items-center hover:text-orange-600">Ana Sayfa</Link>
          <span>/</span>
          <Link to="/fiyatlar" className="inline-flex min-h-11 items-center hover:text-orange-600">Paketler</Link>
          <span>/</span>
          <span className="text-gray-900">Güvenli Ödeme</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <section className="rounded-2xl border border-orange-100 bg-orange-50 p-5 lg:hidden" aria-label="Seçilen paket özeti">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-700">Seçilen Paket</p>
          <div className="mt-3 flex items-end justify-between gap-4">
            <h1 className="font-black leading-tight text-gray-900">{selectedProduct.title}</h1>
            <p className="shrink-0 text-xl font-black text-orange-600">{selectedProduct.amountTRY.toLocaleString('tr-TR')} TL</p>
          </div>
          <p className="mt-2 text-xs text-gray-500">KDV dahildir. Kart bilgileriniz yalnızca PayTR ekranında işlenir.</p>
        </section>

        <section className="h-fit rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-2xl bg-emerald-50 p-3 text-emerald-600">
              <ShieldCheck className="h-7 w-7" />
            </span>
            <div>
              <h1 className="text-2xl font-black text-gray-900 sm:text-3xl">Güvenli Ödeme</h1>
              <p className="mt-1 text-sm text-gray-500">Kart bilgileriniz yalnızca PayTR ekranında işlenir.</p>
            </div>
          </div>

          {!paymentInfo ? (
            <form ref={formRef} className="scroll-mt-28" onSubmit={handlePayment}>
              <div className="mb-6 grid grid-cols-2 gap-2 rounded-2xl bg-gray-100 p-1.5 text-xs font-black sm:text-sm">
                <div className={`rounded-xl px-3 py-2.5 text-center ${checkoutStep === 1 ? 'bg-white text-orange-700 shadow-sm' : 'text-emerald-700'}`}>
                  {checkoutStep === 2 ? '✓ ' : '1. '}Müşteri bilgileri
                </div>
                <div className={`rounded-xl px-3 py-2.5 text-center ${checkoutStep === 2 ? 'bg-white text-orange-700 shadow-sm' : 'text-gray-500'}`}>
                  2. Onay ve ödeme
                </div>
              </div>

              {checkoutStep === 1 ? (
                <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm font-bold text-gray-700">Ad Soyad</label>
                <input
                  id="fullName"
                  name="name"
                  required
                  minLength={3}
                  maxLength={60}
                  autoComplete="name"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  className="min-h-12 w-full rounded-xl border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-gray-700">E-posta</label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  maxLength={254}
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="min-h-12 w-full rounded-xl border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-bold text-gray-700">Telefon</label>
                <input
                  id="phone"
                  name="tel"
                  required
                  type="tel"
                  inputMode="tel"
                  maxLength={20}
                  autoComplete="tel"
                  placeholder="05xx xxx xx xx"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="min-h-12 w-full rounded-xl border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />
              </div>
              <div>
                <label htmlFor="address" className="mb-2 block text-sm font-bold text-gray-700">Fatura adresi</label>
                <textarea
                  id="address"
                  name="street-address"
                  required
                  minLength={10}
                  maxLength={400}
                  autoComplete="street-address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  className="min-h-28 w-full rounded-xl border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />
              </div>

                  <button
                    type="button"
                    onClick={continueToApprovals}
                    className="flex min-h-14 w-full items-center justify-center rounded-xl bg-orange-600 px-5 py-4 text-base font-black text-white transition-colors hover:bg-orange-700 sm:text-lg"
                  >
                    Devam Et
                  </button>
                  <p className="text-center text-xs text-gray-500">Sonraki adımda sözleşmeleri onaylayıp güvenli ödemeye geçeceksiniz.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-gray-200 bg-white p-4 text-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="font-black text-gray-900">{fullName}</p>
                        <p className="mt-1 truncate text-gray-500">{email}</p>
                        <p className="mt-1 text-gray-500">{phone}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCheckoutStep(1)}
                        className="shrink-0 rounded-lg px-3 py-2 font-bold text-orange-700 hover:bg-orange-50"
                      >
                        Düzenle
                      </button>
                    </div>
                  </div>

              <div className="space-y-3 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
                <label className="flex min-h-11 cursor-pointer items-start gap-3">
                  <input
                    required
                    type="checkbox"
                    checked={privacyNotice}
                    onChange={(event) => setPrivacyNotice(event.target.checked)}
                    className="mt-0.5 h-5 w-5 shrink-0 accent-orange-600"
                  />
                  <span>
                    <Link to="/yasal/kvkk-aydinlatma-metni" target="_blank" className="font-bold text-orange-700 hover:underline">
                      KVKK Aydınlatma Metni
                    </Link>
                    ’ni ve{' '}
                    <Link to="/yasal/gizlilik-ve-guvenlik" target="_blank" className="font-bold text-orange-700 hover:underline">
                      Gizlilik ve Güvenlik Politikası
                    </Link>
                    ’nı okudum.
                  </span>
                </label>
                <label className="flex min-h-11 cursor-pointer items-start gap-3">
                  <input
                    required
                    type="checkbox"
                    checked={contracts}
                    onChange={(event) => setContracts(event.target.checked)}
                    className="mt-0.5 h-5 w-5 shrink-0 accent-orange-600"
                  />
                  <span>
                    <Link to="/yasal/on-bilgilendirme-formu" target="_blank" className="font-bold text-orange-700 hover:underline">
                      Ön Bilgilendirme Formu
                    </Link>
                    ’nu ve{' '}
                    <Link to="/yasal/mesafeli-satis-sozlesmesi" target="_blank" className="font-bold text-orange-700 hover:underline">
                      Mesafeli Satış Sözleşmesi
                    </Link>
                    ’ni okudum ve kabul ediyorum.
                  </span>
                </label>
                <label className="flex min-h-11 cursor-pointer items-start gap-3">
                  <input
                    required
                    type="checkbox"
                    checked={earlyPerformance}
                    onChange={(event) => setEarlyPerformance(event.target.checked)}
                    className="mt-0.5 h-5 w-5 shrink-0 accent-orange-600"
                  />
                  <span>
                    Hizmetin 14 günlük cayma süresi dolmadan başlatılmasını talep ediyorum; hizmet tamamen
                    ifa edildiğinde cayma hakkımı kaybedebileceğim konusunda bilgilendirildim.
                  </span>
                </label>
              </div>

              {error && (
                <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-700">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-4 text-base font-black text-white transition-colors hover:bg-orange-700 disabled:cursor-not-allowed disabled:bg-orange-300 sm:px-6 sm:text-lg"
              >
                <LockKeyhole className="h-5 w-5" />
                {loading
                  ? 'Ödeme Başlatılıyor...'
                  : `${selectedProduct.amountTRY.toLocaleString('tr-TR')} TL Güvenli Öde`}
              </button>
                  <button
                    type="button"
                    onClick={() => setCheckoutStep(1)}
                    className="min-h-11 w-full rounded-xl px-4 py-2 text-sm font-bold text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                  >
                    Bilgilerime geri dön
                  </button>
                </div>
              )}
            </form>
          ) : (
            <div ref={paymentAreaRef} className="scroll-mt-28 space-y-4">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600" />
                  <div className="min-w-0 flex-1">
                    <p className="text-lg font-black text-emerald-950">Son adım: Ödemenizi tamamlayın</p>
                    <p className="mt-1 text-sm leading-relaxed text-emerald-800">
                      Kart bilgilerinizi hemen aşağıdaki PayTR güvenli ödeme alanına girin.
                    </p>
                    <p className="mt-2 truncate text-xs text-emerald-700" title={paymentInfo.orderId}>
                      Sipariş No: {paymentInfo.orderId}
                    </p>
                  </div>
                  <ArrowDown className="mt-1 h-5 w-5 shrink-0 animate-bounce text-emerald-700" aria-hidden="true" />
                </div>
              </div>

              <div
                className="relative min-h-[640px] overflow-hidden rounded-2xl border-2 border-orange-200 bg-white shadow-sm sm:min-h-[680px]"
                aria-label="PayTR kartla ödeme alanı"
              >
                {!iframeLoaded && (
                  <div className="absolute inset-x-0 top-0 z-10 flex min-h-32 items-center justify-center bg-white px-4 text-center">
                    <div>
                      <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-orange-100 border-t-orange-600" />
                      <p className="mt-3 text-sm font-bold text-gray-700">Güvenli ödeme ekranı yükleniyor…</p>
                    </div>
                  </div>
                )}
                <iframe
                  id="paytriframe"
                  title="PayTR Güvenli Ödeme"
                  src={paymentInfo.iframeUrl}
                  className="h-[700px] w-full border-0 sm:h-[680px]"
                  allow="payment"
                  scrolling="no"
                  onLoad={() => setIframeLoaded(true)}
                />
              </div>

              <div className="flex items-center justify-center gap-2 rounded-xl bg-gray-50 px-4 py-3 text-center text-xs font-semibold text-gray-500">
                <LockKeyhole className="h-4 w-4 shrink-0 text-emerald-600" />
                Kart bilgileriniz Trendmax tarafından görülmez veya saklanmaz.
              </div>
            </div>
          )}
        </section>

        <aside className="h-fit space-y-6 lg:sticky lg:top-24">
          <div className="hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:block">
            <h2 className="text-xl font-black text-gray-900">Sipariş Özeti</h2>
            <div className="my-6 border-y border-gray-100 py-5">
              <p className="font-bold text-gray-900">{selectedProduct.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                E-ticaret yazılımı, kurulum, eğitim veya danışmanlık hizmeti; kapsam seçilen pakete göre uygulanır.
              </p>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Ara toplam</span>
              <span>{selectedProduct.amountTRY.toLocaleString('tr-TR')} TL</span>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
              <span>KDV</span>
              <span>Fiyata dahil</span>
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">
              <span className="font-black text-gray-900">Toplam</span>
              <span className="text-2xl font-black text-orange-600">
                {selectedProduct.amountTRY.toLocaleString('tr-TR')} TL
              </span>
            </div>
          </div>

          <details className="group rounded-2xl border border-gray-200 bg-white shadow-sm">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-black text-gray-900">
              Satıcı ve teslimat bilgisi
              <span className="text-xl text-orange-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <div className="border-t border-gray-100 px-5 pb-5">
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-gray-400">Satıcı</dt>
                <dd className="font-bold text-gray-800">{COMPANY_CONTACT.legalName} ({COMPANY_CONTACT.brandName})</dd>
              </div>
              <div>
                <dt className="text-gray-400">Adres</dt>
                <dd className="leading-relaxed text-gray-700">{COMPANY_CONTACT.bursaAddress}</dd>
              </div>
              <div>
                <dt className="text-gray-400">Teslimat</dt>
                <dd className="leading-relaxed text-gray-700">
                  Hizmet ve erişimler elektronik ortamda sağlanır. Paket kapsamı ve gerekli müşteri bilgilerinin
                  tamamlanmasına göre teslim süresi sipariş sonrası yazılı olarak bildirilir.
                </dd>
              </div>
            </dl>
            <div className="mt-5 flex flex-wrap gap-x-4 text-sm font-bold text-orange-700">
              <Link to="/yasal/teslimat-politikasi" target="_blank" className="inline-flex min-h-11 items-center">Teslimat</Link>
              <Link to="/yasal/iade-politikasi" target="_blank" className="inline-flex min-h-11 items-center">İptal ve İade</Link>
              <Link to="/iletisim" className="inline-flex min-h-11 items-center">İletişim</Link>
            </div>
            </div>
          </details>
        </aside>
      </div>
    </div>
  );
};

export default Odeme;
