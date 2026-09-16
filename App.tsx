import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import SeoManager from './components/SeoManager';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';

const SSS = lazy(() => import('./pages/SSS'));
const Paketler = lazy(() => import('./pages/Paketler'));
const Kampus = lazy(() => import('./pages/Kampus'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const PremiumLanding = lazy(() => import('./pages/premium/PremiumLanding'));
const MobilUygulama = lazy(() => import('./pages/premium/MobilUygulama'));
const Entegrasyon = lazy(() => import('./pages/premium/Entegrasyon'));
const SEO = lazy(() => import('./pages/premium/SEO'));
const Temalar = lazy(() => import('./pages/premium/Temalar'));
const CozumlerLanding = lazy(() => import('./pages/cozumler/CozumlerLanding'));
const EticaretPaketleri = lazy(() => import('./pages/cozumler/EticaretPaketleri'));
const PremiumEticaret = lazy(() => import('./pages/cozumler/PremiumEticaret'));
const OzelCozumler = lazy(() => import('./pages/cozumler/OzelCozumler'));
const EIhracat = lazy(() => import('./pages/cozumler/EIhracat'));
const SifirRisk = lazy(() => import('./pages/cozumler/SifirRisk'));
const PazarYeriPro = lazy(() => import('./pages/cozumler/PazarYeriPro'));
const Referanslar = lazy(() => import('./pages/Referanslar'));
const Entegrasyonlar = lazy(() => import('./pages/Entegrasyonlar'));
const StoksuzSatis = lazy(() => import('./pages/StoksuzSatis'));
const Odeme = lazy(() => import('./pages/Odeme'));
const OdemeSonuc = lazy(() => import('./pages/OdemeSonuc'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const Iletisim = lazy(() => import('./pages/Iletisim'));
const Hakkimizda = lazy(() => import('./pages/Hakkimizda'));
const TemaOnizleme = lazy(() => import('./pages/TemaOnizleme'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PageLoader = () => (
  <div className="flex min-h-[55vh] items-center justify-center bg-gray-50 pt-20" role="status">
    <span className="h-10 w-10 animate-spin rounded-full border-4 border-orange-100 border-t-orange-600" />
    <span className="sr-only">Sayfa yükleniyor</span>
  </div>
);

/** Eski #/sayfa bağlantılarını temiz URL yapısına kayıpsız taşır. */
const LegacyHashRedirect: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!window.location.hash.startsWith('#/')) return;
    const target = window.location.hash.slice(1);
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    navigate(target, { replace: true });
  }, [navigate]);

  return null;
};

const App: React.FC = () => (
  <Router>
    <LegacyHashRedirect />
    <ScrollToTop />
    <SeoManager />
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow overflow-x-hidden">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sss" element={<SSS />} />
            <Route path="/fiyatlar" element={<Paketler />} />
            <Route path="/kampus" element={<Kampus />} />
            <Route path="/kampus/:slug" element={<BlogDetail />} />
            <Route path="/cozumler" element={<CozumlerLanding />} />
            <Route path="/cozumler/paketler" element={<EticaretPaketleri />} />
            <Route path="/cozumler/premium" element={<PremiumEticaret />} />
            <Route path="/cozumler/ozel" element={<OzelCozumler />} />
            <Route path="/cozumler/e-ihracat" element={<EIhracat />} />
            <Route path="/cozumler/sifir-risk" element={<SifirRisk />} />
            <Route path="/cozumler/pazar-yeri-pro" element={<PazarYeriPro />} />
            <Route path="/entegrasyonlar" element={<Entegrasyonlar />} />
            <Route path="/stoksuz-satis" element={<StoksuzSatis />} />
            <Route path="/e-ihracat" element={<Navigate to="/cozumler/e-ihracat" replace />} />
            <Route path="/premium" element={<PremiumLanding />} />
            <Route path="/premium/mobil" element={<MobilUygulama />} />
            <Route path="/premium/entegrasyon" element={<Entegrasyon />} />
            <Route path="/premium/seo" element={<SEO />} />
            <Route path="/premium/temalar" element={<Temalar />} />
            <Route path="/referanslar" element={<Referanslar />} />
            <Route path="/odeme" element={<Odeme />} />
            <Route path="/odeme-sonuc" element={<OdemeSonuc />} />
            <Route path="/yasal/:slug" element={<LegalPage />} />
            <Route path="/hakkimizda" element={<Hakkimizda />} />
            <Route path="/iletisim" element={<Iletisim />} />
            <Route path="/tema/:slug" element={<TemaOnizleme />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  </Router>
);

export default App;
