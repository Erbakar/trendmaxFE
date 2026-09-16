import React from 'react';
import { HelpCircle } from 'lucide-react';
import { HERO_IMAGES } from '../data/heroImages';
import SikcaSorulanSorularGrid from '../components/SikcaSorulanSorularGrid';
import AnimatedHero from '../components/AnimatedHero';

const SSS: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <AnimatedHero
        title="Sıkça Sorulan Sorular"
        subtitle="E-ticaret paketleri, ödeme, teslim ve pazaryeri eğitimleri hakkında merak ettiklerinize hızlıca ulaşın."
        breadcrumb={[{ label: 'Sıkça Sorulan Sorular' }]}
        icon={HelpCircle}
        badge="Yardım Merkezi"
        image={HERO_IMAGES.support}
        primaryAction={{ label: 'Bize Ulaşın', to: '/iletisim' }}
        secondaryActionLabel="Sorulara Göz Atın"
        compact
      />

      <div id="icerik"><SikcaSorulanSorularGrid defaultOpenId="0-0" /></div>
    </div>
  );
};

export default SSS;
