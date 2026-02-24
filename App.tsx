
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DynamicPage from './pages/DynamicPage';
import SSS from './pages/SSS';
import Paketler from './pages/Paketler';
import Kampus from './pages/Kampus';
import BlogDetail from './pages/BlogDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        <main className="flex-grow overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sss" element={<SSS />} />
            <Route path="/fiyatlar" element={<Paketler />} />
            <Route path="/kampus" element={<Kampus />} />
            <Route path="/kampus/:slug" element={<BlogDetail />} />
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
