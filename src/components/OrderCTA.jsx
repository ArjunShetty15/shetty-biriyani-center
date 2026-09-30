import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurant';

export default function OrderCTA() {
  return (
    <section className="w-full bg-[#1c1c19] text-[#fcf9f4] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[1.5px] bg-[#c2593f]"></span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#dbc2ac] font-semibold">
            Online Ordering
          </span>
        </div>

        <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white mb-3 leading-tight">
          Ready to Order?
        </h2>

        <p className="text-sm sm:text-base text-[#dcdad5] max-w-xl mb-8 leading-relaxed">
          Order Shetty Biriyani Center online through our official partner platforms or call us directly.
        </p>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href={RESTAURANT_INFO.orderLinks.zomato}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded bg-[#9d3d26] text-white hover:bg-[#802913] transition-colors shadow-sm"
          >
            <span>Order on Zomato</span>
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </a>

          <a
            href={RESTAURANT_INFO.orderLinks.swiggy}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded bg-[#f0ede9] text-[#1c1c19] hover:bg-white transition-colors shadow-sm"
          >
            <span>Order on Swiggy</span>
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </a>

          <a
            href={RESTAURANT_INFO.phoneTel}
            className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded border border-[#8a726c]/50 text-white hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px] text-[#dbc2ac]">phone</span>
            <span>Call {RESTAURANT_INFO.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
