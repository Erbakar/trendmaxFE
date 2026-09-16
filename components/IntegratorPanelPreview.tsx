import React from 'react';
import { BarChart3, Box, PackageCheck, ShoppingCart, Truck } from 'lucide-react';

const stats = [
  { label: 'Bugünkü Sipariş', value: '128', icon: ShoppingCart, color: 'text-orange-600 bg-orange-50' },
  { label: 'Aktif Ürün', value: '12.480', icon: Box, color: 'text-blue-600 bg-blue-50' },
  { label: 'Kargoya Hazır', value: '46', icon: Truck, color: 'text-emerald-600 bg-emerald-50' },
];

const IntegratorPanelPreview: React.FC = () => (
  <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
    <div className="flex items-center justify-between border-b border-slate-100 bg-slate-950 px-5 py-4 text-white">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">PazarConnect</p>
        <p className="mt-1 font-black">Entegratör Yönetim Paneli</p>
      </div>
      <div className="flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1.5 text-xs font-bold text-emerald-300">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Senkronizasyon Aktif
      </div>
    </div>

    <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 sm:gap-4 sm:p-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm sm:rounded-2xl sm:p-4">
            <div className={`mb-2 inline-flex rounded-lg p-2 sm:mb-4 sm:rounded-xl sm:p-2.5 ${stat.color}`}>
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <p className="text-lg font-black text-slate-900 sm:text-2xl">{stat.value}</p>
            <p className="mt-1 text-[10px] font-semibold leading-tight text-slate-500 sm:text-xs">{stat.label}</p>
          </div>
        );
      })}
    </div>

    <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-[1.35fr_1fr]">
      <div className="rounded-2xl border border-slate-100 p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="font-black text-slate-900">Sipariş Akışı</p>
            <p className="text-xs text-slate-500">Tüm pazaryerleri tek görünümde</p>
          </div>
          <BarChart3 className="h-5 w-5 text-orange-500" />
        </div>
        <div className="flex h-36 items-end gap-2">
          {[36, 58, 44, 78, 62, 92, 74, 100, 82, 118, 96, 132].map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t-md bg-gradient-to-t from-orange-600 to-amber-400"
              style={{ height }}
              aria-hidden
            />
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-100 p-5">
        <p className="mb-4 font-black text-slate-900">Son İşlemler</p>
        <div className="space-y-4">
          {[
            ['Trendyol siparişi aktarıldı', 'Şimdi'],
            ['Stoklar 8 kanalda güncellendi', '2 dk'],
            ['Kargo barkodu oluşturuldu', '5 dk'],
          ].map(([label, time]) => (
            <div key={label} className="flex items-start gap-3">
              <span className="mt-0.5 rounded-lg bg-emerald-50 p-1.5 text-emerald-600">
                <PackageCheck className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-slate-700">{label}</p>
                <p className="text-xs text-slate-400">{time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default IntegratorPanelPreview;
