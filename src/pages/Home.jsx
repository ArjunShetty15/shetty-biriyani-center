import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RESTAURANT_INFO } from '../data/restaurant';
import HeroEntrance from '../components/HeroEntrance';
import OrderCTA from '../components/OrderCTA';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Home() {
  useDocumentTitle('Shetty Biriyani Center | Yelahanka, Bengaluru');

  const menuCategories = [
    { title: 'Chicken', desc: 'Slow-dum biriyanis, ghee roast, kebabs, and nati-style preparations.' },
    { title: 'Boneless Chicken', desc: 'Tender chicken boneless cuts in pepper dry, ghee roast, and chili styles.' },
    { title: 'Egg', desc: 'Boiled egg, freshly tossed egg bhurji, masala, and egg biriyani.' },
    { title: 'Veg', desc: 'Crisp parota, hot chapathi, ragi ball, fried rice, and coastal neer dosa.' },
    { title: 'Biriyani & Rice', desc: 'Signature spiced biriyani rice, half portions, and flavorful fried rice.' }
  ];

  return (
    <div className="w-full flex flex-col">
      
      {/* 1. HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#5c604c]" />
              <span className="text-xs uppercase tracking-widest text-[#5c604c] font-semibold">
                {RESTAURANT_INFO.fullLocation}
              </span>
            </div>

            {/* Editorial Title */}
            <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#1c1c19] leading-[1.04] mb-4">
              <span>Shetty </span>
              <span>Biriyani </span>
              <span className="text-[#9d3d26]">Center</span>
            </h1>

            {/* Supporting Stanza */}
            <p className="font-serif-editorial text-xl sm:text-2xl text-[#1c1c19] font-normal mb-1">
              {RESTAURANT_INFO.tagline}
            </p>
            <p className="text-sm sm:text-base text-[#56423d] max-w-xl mb-6 sm:mb-8 leading-relaxed">
              {RESTAURANT_INFO.supportingText}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded bg-[#9d3d26] text-white hover:bg-[#802913] transition-colors shadow-sm"
              >
                View Menu
              </Link>
              <a
                href={RESTAURANT_INFO.orderLinks.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded bg-[#f0ede9] text-[#1c1c19] hover:bg-[#ebe8e3] transition-colors"
              >
                Order Online
              </a>
            </div>

            {/* Direct Contact Line */}
            <div className="flex items-center gap-2.5 pt-1">
              <div className="w-8 h-8 rounded-full bg-[#f0ede9] flex items-center justify-center text-[#9d3d26]">
                <span className="material-symbols-outlined text-[18px]">phone</span>
              </div>
              <span className="text-xs text-[#5c604c] uppercase tracking-wider font-semibold">
                Direct Order & Enquiries:
              </span>
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="text-sm font-semibold text-[#1c1c19] hover:text-[#9d3d26] transition-colors tracking-wide"
              >
                {RESTAURANT_INFO.phoneFormatted}
              </a>
            </div>
          </motion.div>

          {/* Right Column (5 cols) - Entrance Photograph Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 w-full flex items-center justify-center"
          >
            <HeroEntrance />
          </motion.div>
        </div>
      </section>

      {/* 2. QUICK INFORMATION STRIP */}
      <section className="w-full bg-[#f6f3ee] py-4 border-y border-[#ddc0ba]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {RESTAURANT_INFO.services.map((service) => (
              <div key={service.id} className="flex items-center justify-center gap-2 py-1">
                <span className="material-symbols-outlined text-[#5c604c] text-[20px]">
                  {service.icon}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#1c1c19] font-semibold">
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SHORT ABOUT INTRODUCTION */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-baseline">
          <div className="md:col-span-4 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-[#9d3d26]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#5c604c] font-semibold">
                About
              </span>
            </div>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl uppercase text-[#1c1c19] tracking-tight leading-snug">
              Good food, made for everyday dining.
            </h2>
          </div>

          <div className="md:col-span-8 flex flex-col justify-center">
            <p className="text-base sm:text-lg text-[#56423d] leading-relaxed mb-6 font-normal">
              {RESTAURANT_INFO.aboutText}
            </p>
            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#9d3d26] hover:text-[#802913] group"
              >
                <span>Learn More</span>
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MENU PREVIEW */}
      <section className="w-full bg-[#f6f3ee] py-14 sm:py-20 border-t border-[#ddc0ba]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[1.5px] bg-[#9d3d26]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#5c604c] font-semibold">
                  Our Menu
                </span>
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl uppercase tracking-tight text-[#1c1c19]">
                Authentic Fare
              </h2>
            </div>
            <p className="text-sm text-[#56423d] max-w-md">
              Explore our selection of biriyani, chicken, egg and vegetarian dishes.
            </p>
          </div>

          {/* Clean Category Teaser Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {menuCategories.map((cat, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-lg bg-[#fcf9f4] border border-[#ddc0ba]/40 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-[#5c604c] tracking-widest uppercase">
                    0{idx + 1} //
                  </span>
                  <h3 className="font-serif-editorial text-xl font-medium text-[#1c1c19] uppercase mt-1 mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#56423d] leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA to Full Menu */}
          <div className="text-center pt-2">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-7 py-3 rounded bg-[#9d3d26] text-white hover:bg-[#802913] transition-colors shadow-sm"
            >
              <span>View Full Menu</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SERVICES PREVIEW */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-[#9d3d26]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#5c604c] font-semibold">
                Services
              </span>
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl uppercase tracking-tight text-[#1c1c19]">
              How You Can Order
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#9d3d26] hover:text-[#802913] group"
          >
            <span>View Services</span>
            <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESTAURANT_INFO.services.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-lg bg-[#f6f3ee] border border-[#ddc0ba]/40 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#fcf9f4] border border-[#ddc0ba]/50 flex items-center justify-center text-[#9d3d26] mb-4">
                  <span className="material-symbols-outlined text-[20px]">{service.icon}</span>
                </div>
                <h3 className="font-serif-editorial text-xl uppercase font-medium text-[#1c1c19] mb-2">
                  {service.name}
                </h3>
                <p className="text-xs text-[#56423d] leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
              <p className="text-[11px] text-[#5c604c] font-semibold uppercase tracking-wider">
                Yelahanka Service
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ORDER ONLINE CTA */}
      <OrderCTA />

      {/* 7. VISIT US PREVIEW */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-[#9d3d26]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#5c604c] font-semibold">
                Location & Access
              </span>
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl uppercase tracking-tight text-[#1c1c19] mb-2">
              Visit Shetty Biriyani Center
            </h2>
            <p className="text-base text-[#5c604c] font-semibold uppercase tracking-wider mb-2">
              {RESTAURANT_INFO.fullLocation}
            </p>
            <p className="text-sm text-[#56423d] leading-relaxed mb-6 max-w-md">
              Join us for freshly prepared biriyani and regional chicken delicacies in the heart of Yelahanka. Free street parking available.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded bg-[#9d3d26] text-white hover:bg-[#802913] transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>Call Now</span>
              </a>

              <a
                href={RESTAURANT_INFO.orderLinks.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded border border-[#8a726c]/50 text-[#1c1c19] hover:bg-[#ebe8e3] transition-colors"
              >
                <span className="material-symbols-outlined text-[16px] text-[#5c604c]">directions</span>
                <span>Get Directions</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded bg-[#f0ede9] text-[#1c1c19] hover:bg-[#ebe8e3] transition-colors"
              >
                <span>View Contact</span>
              </Link>
            </div>

            <div className="text-xs text-[#5c604c] flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-[#9d3d26]">phone</span>
              <span>Direct Phone: <strong className="text-[#1c1c19]">{RESTAURANT_INFO.phoneFormatted}</strong></span>
            </div>
          </div>

          {/* Map Preview Card matching Stitch */}
          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-[#ddc0ba]/50 bg-[#f6f3ee] shadow-sm">
              <div className="p-4 bg-[#f0ede9] border-b border-[#ddc0ba]/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#9d3d26] text-[20px]">location_on</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1c1c19]">
                    Yelahanka, Bengaluru
                  </span>
                </div>
                <a
                  href={RESTAURANT_INFO.orderLinks.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold uppercase tracking-wider text-[#9d3d26] hover:underline flex items-center gap-1"
                >
                  <span>Open in Maps</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </div>

              {/* Verified Clean Map Placeholder Area */}
              <div className="h-64 sm:h-72 w-full bg-[#ebe8e3] relative flex items-center justify-center p-6 text-center">
                <div className="max-w-xs flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#fcf9f4] border border-[#ddc0ba]/60 flex items-center justify-center text-[#9d3d26] mb-3 shadow-xs">
                    <span className="material-symbols-outlined text-[24px]">map</span>
                  </div>
                  <h4 className="font-serif-editorial text-lg text-[#1c1c19] font-medium">
                    Shetty Biriyani Center
                  </h4>
                  <p className="text-xs text-[#56423d] mt-1 mb-3">
                    Yelahanka, Bengaluru, Karnataka
                  </p>
                  <a
                    href={RESTAURANT_INFO.orderLinks.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#9d3d26] hover:underline"
                  >
                    <span>Click for Interactive Directions</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
