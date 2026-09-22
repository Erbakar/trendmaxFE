import React from 'react';

type PaytrSecureBadgeProps = {
  className?: string;
};

const PaytrSecureBadge: React.FC<PaytrSecureBadgeProps> = ({ className = '' }) => (
  <a
    href="https://www.paytr.com"
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-3 ${className}`}
    aria-label="PayTR güvenli ödeme altyapısı"
  >
    <img src="/logos/paytr-white.png" alt="PayTR" className="h-4 w-auto" width={80} height={16} />
    <span className="text-[11px] font-black uppercase tracking-[0.16em] sm:text-xs">Güvenli Ödeme</span>
  </a>
);

export default PaytrSecureBadge;
