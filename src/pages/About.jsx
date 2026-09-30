import React from 'react';
import { motion } from 'framer-motion';
import { RESTAURANT_INFO } from '../data/restaurant';
import HeroEntrance from '../components/HeroEntrance';
import OrderCTA from '../components/OrderCTA';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function About() {
  useDocumentTitle('About | Shetty Biriyani Center');

  return (
    <div className="w-full flex flex-col">
      
      {/* Header Section */}
      <section className="w-full bg-[#f6f3ee] py-12 sm:py-16 border-b border-[#ddc0ba]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[1.5px] bg-[#9d3d26]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#5c604c] font-semibold">
              About Us
            </span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-5xl uppercase tracking-tight text-[#1c1c19] mb-3">
            About Shetty Biriyani Center
          </h1>

          <p className="text-sm sm:text-base text-[#56423d] max-w-2xl leading-relaxed">
            Authentic South Indian culinary institution based in Yelahanka, Bengaluru.
          </p>
        </div>
      </section>

      {/* Main Content & Real Entrance Frame */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#5c604c]" />
              <span className="text-xs uppercase tracking-widest text-[#5c604c] font-semibold">
                {RESTAURANT_INFO.fullLocation}
              </span>
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-4xl uppercase tracking-tight text-[#1c1c19] mb-4 leading-snug">
              Good food, made for everyday dining.
            </h2>

            <p className="text-base sm:text-lg text-[#56423d] leading-relaxed mb-6">
              {RESTAURANT_INFO.aboutText}
            </p>

            <p className="text-sm sm:text-base text-[#56423d] leading-relaxed mb-6">
              From flavorful slow-cooked dum biriyanis and signature chicken ghee roasts to tender kababs, fresh egg bhurji, and regional accompaniments, every dish is prepared with fresh ingredients and bold spices.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded bg-[#9d3d26] text-white hover:bg-[#802913] transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>Contact Restaurant</span>
              </a>

              <a
                href={RESTAURANT_INFO.orderLinks.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded border border-[#8a726c]/50 text-[#1c1c19] hover:bg-[#ebe8e3] transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-[#5c604c]">directions</span>
                <span>Location</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroEntrance className="h-[360px] sm:h-[420px]" />
          </div>
        </div>

        {/* Factual Information Grid - Practical Details */}
        <div className="pt-8 border-t border-[#ddc0ba]/40">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[1.5px] bg-[#9d3d26]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#5c604c] font-semibold">
              Practical Details
            </span>
          </div>

          <h2 className="font-serif-editorial text-3xl uppercase tracking-tight text-[#1c1c19] mb-8">
            Good to Know
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESTAURANT_INFO.factualDetails.map((detail, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-[#f6f3ee] border border-[#ddc0ba]/40 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#5c604c] mb-3">
                    {detail.title}
                  </h3>
                  <ul className="flex flex-col gap-1.5">
                    {detail.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-base text-[#1c1c19] font-serif-editorial font-medium flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9d3d26]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Order CTA Section */}
      <OrderCTA />

    </div>
  );
}
