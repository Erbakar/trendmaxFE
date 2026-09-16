import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, Clock3, RefreshCw, XCircle } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/company';

type OrderStatus = {
  orderId: string;
  status: 'token_requested' | 'token_failed' | 'pending' | 'success' | 'failed';
  product: { title: string; amountTRY: number };
  failedReasonMessage?: string | null;
};

type ViewStatus = 'checking' | 'pending' | 'success' | 'failed' | 'unknown';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

const getStoredOrder = () => {
  try {
    const stored = sessionStorage.getItem('trendmaxPaytrOrder');
    return stored ? JSON.parse(stored) as { orderId?: string; orderToken?: string } : {};
  } catch {
    return {};
  }
};

const OdemeSonuc: React.FC = () => {
  const [params] = useSearchParams();
  const [viewStatus, setViewStatus] = useState<ViewStatus>('checking');
  const [order, setOrder] = useState<OrderStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  const credentials = useMemo(() => {
    const stored = getStoredOrder();
    return {
      orderId: params.get('siparis') || stored.orderId || '',
      orderToken: params.get('anahtar') || stored.orderToken || '',
      redirectedAsFailed: params.get('durum') === 'basarisiz',
    };
  }, [params]);

  const checkOrder = useCallback(async () => {
    if (!credentials.orderId || !credentials.orderToken) {
      setViewStatus(credentials.redirectedAsFailed ? 'failed' : 'unknown');
      return true;
    }

    try {
      setError(null);
      const response = await fetch(
        `${API_BASE_URL}/api/paytr/order/${encodeURIComponent(credentials.orderId)}/?anahtar=${encodeURIComponent(credentials.orderToken)}`,
        { headers: { Accept: 'application/json' } },
      );
      const data = await response.json().catch(() => null);
      if (!response.ok || !data) {
        throw new Error(data?.error || 'Sipariş durumu alınamadı.');
      }

      const nextOrder = data as OrderStatus;
      setOrder(nextOrder);
      if (nextOrder.status === 'success') {
        setViewStatus('success');
        sessionStorage.removeItem('trendmaxPaytrOrder');
        return true;
      }
      if (nextOrder.status === 'failed' || nextOrder.status === 'token_failed') {
        setViewStatus('failed');
        return true;
      }

      setViewStatus(credentials.redirectedAsFailed ? 'failed' : 'pending');
      return credentials.redirectedAsFailed;
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Sipariş durumu alınamadı.');
      setViewStatus(credentials.redirectedAsFailed ? 'failed' : 'unknown');
      return true;
    }
  }, [credentials]);

  useEffect(() => {
    if (window.self !== window.top) {
      window.top!.location.href = window.location.href;
      return;
    }

    let cancelled = false;
    let timeoutId: number | undefined;
    let attempts = 0;

    const poll = async () => {
      if (cancelled) return;
      const terminal = await checkOrder();
      attempts += 1;
      if (!terminal && attempts < 15) {
        timeoutId = window.setTimeout(poll, 2000);
      }
    };
    void poll();

    return () => {
      cancelled = true;
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [checkOrder]);

  const content = {
    checking: {
      icon: RefreshCw,
      iconClass: 'text-orange-600 animate-spin',
      title: 'Ödeme durumu kontrol ediliyor',
      description: 'PayTR tarafından gönderilen güvenli ödeme bildirimi bekleniyor.',
    },
    pending: {
      icon: Clock3,
      iconClass: 'text-orange-600',
      title: 'Ödemeniz kontrol ediliyor',
      description: 'İşlem sonucu henüz kesinleşmedi. Bu sayfa kısa süre içinde otomatik olarak güncellenecek.',
    },
    success: {
      icon: CheckCircle2,
      iconClass: 'text-emerald-600',
      title: 'Ödemeniz başarıyla alındı',
      description: 'Siparişiniz PayTR’nin güvenli bildirimiyle doğrulandı. Ekibimiz hizmet başlangıcı için sizinle iletişime geçecek.',
    },
    failed: {
      icon: XCircle,
      iconClass: 'text-red-600',
      title: 'Ödeme tamamlanamadı',
      description: 'İşlem başarısız oldu veya ödeme ekranı kapatıldı. Kartınızdan tahsilat yapılmadıysa tekrar deneyebilirsiniz.',
    },
    unknown: {
      icon: Clock3,
      iconClass: 'text-gray-500',
      title: 'Sipariş bilgisi doğrulanamadı',
      description: 'Bu sayfada kesin bir ödeme sonucu gösteremiyoruz. Sipariş numaranızla destek ekibimize ulaşabilirsiniz.',
    },
  }[viewStatus];
  const Icon = content.icon;

  return (
    <div className="min-h-screen bg-gray-50 pb-16 pt-28">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-12">
          <Icon className={`mx-auto h-16 w-16 ${content.iconClass}`} />
          <h1 className="mt-6 text-3xl font-black text-gray-900">{content.title}</h1>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-gray-600">{content.description}</p>

          {order && (
            <div className="mx-auto mt-7 max-w-lg rounded-2xl border border-gray-200 bg-gray-50 p-5 text-left">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm text-gray-500">Paket</span>
                <span className="text-right font-bold text-gray-900">{order.product.title}</span>
              </div>
              <div className="mt-3 flex items-center justify-between gap-4">
                <span className="text-sm text-gray-500">Tutar</span>
                <span className="font-black text-gray-900">{order.product.amountTRY.toLocaleString('tr-TR')} TL</span>
              </div>
              <div className="mt-3 border-t border-gray-200 pt-3 text-xs text-gray-500">
                Sipariş No: <span className="break-all font-mono">{order.orderId}</span>
              </div>
            </div>
          )}

          {error && <p role="alert" className="mt-5 text-sm font-semibold text-red-600">{error}</p>}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {(viewStatus === 'pending' || viewStatus === 'unknown') && (
              <button
                type="button"
                onClick={() => {
                  setViewStatus('checking');
                  void checkOrder();
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-6 py-3 font-bold text-white hover:bg-orange-700"
              >
                <RefreshCw className="h-4 w-4" /> Tekrar Kontrol Et
              </button>
            )}
            {viewStatus === 'failed' && (
              <Link to="/fiyatlar" className="rounded-xl bg-orange-600 px-6 py-3 font-bold text-white hover:bg-orange-700">
                Tekrar Deneyin
              </Link>
            )}
            <Link to="/" className="rounded-xl border border-gray-300 px-6 py-3 font-bold text-gray-700 hover:bg-gray-100">
              Ana Sayfa
            </Link>
            <a href={COMPANY_CONTACT.phoneHref} className="rounded-xl border border-gray-300 px-6 py-3 font-bold text-gray-700 hover:bg-gray-100">
              Bizi Arayın
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdemeSonuc;
