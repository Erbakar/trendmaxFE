import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DynamicPage from './pages/DynamicPage';
import SSS from './pages/SSS';
import Paketler from './pages/Paketler';
import Kampus from './pages/Kampus';
import BlogDetail from './pages/BlogDetail';
import PremiumLanding from './pages/premium/PremiumLanding';
import MobilUygulama from './pages/premium/MobilUygulama';
import Entegrasyon from './pages/premium/Entegrasyon';
import SEO from './pages/premium/SEO';
import Temalar from './pages/premium/Temalar';
import CozumlerLanding from './pages/cozumler/CozumlerLanding';
import EticaretPaketleri from './pages/cozumler/EticaretPaketleri';
import PremiumEticaret from './pages/cozumler/PremiumEticaret';
import OzelCozumler from './pages/cozumler/OzelCozumler';
import EIhracat from './pages/cozumler/EIhracat';
import Referanslar from './pages/Referanslar';
import Entegrasyonlar from './pages/Entegrasyonlar';
import StoksuzSatis from './pages/StoksuzSatis';
import SifirRisk from './pages/cozumler/SifirRisk';
import PazarYeriPro from './pages/cozumler/PazarYeriPro';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        <main className="flex-grow overflow-x-hidden">
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
            <Route path="/e-ihracat" element={<EIhracat />} />
            <Route path="/premium" element={<PremiumLanding />} />
            <Route path="/premium/mobil" element={<MobilUygulama />} />
            <Route path="/premium/entegrasyon" element={<Entegrasyon />} />
            <Route path="/premium/seo" element={<SEO />} />
            <Route path="/premium/temalar" element={<Temalar />} />
            <Route path="/referanslar" element={<Referanslar />} />
            <Route path="/:category" element={<DynamicPage />} />
            <Route path="/:category/:subpage" element={<DynamicPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
