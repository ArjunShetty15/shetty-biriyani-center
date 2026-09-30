import React from 'react';
import { motion } from 'framer-motion';
import { RESTAURANT_INFO } from '../data/restaurant';
import OrderCTA from '../components/OrderCTA';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Services() {
  useDocumentTitle('Services | Shetty Biriyani Center');

  return (
    <div className="w-full flex flex-col">
      
      {/* Header Section */}
      <section className="w-full bg-[#f6f3ee] py-12 sm:py-16 border-b border-[#ddc0ba]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[1.5px] bg-[#9d3d26]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#5c604c] font-semibold">
              Services
            </span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-5xl uppercase tracking-tight text-[#1c1c19] mb-3">
            How You Can Order
          </h1>

          <p className="text-sm sm:text-base text-[#56423d] max-w-2xl leading-relaxed">
            Whether you choose to dine with us in Yelahanka, pick up takeaway, order online to your doorstep, or arrange catering for a group, we prepare every dish with generous flavour.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. DELIVERY */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-xl bg-[#f6f3ee] border border-[#ddc0ba]/40 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#fcf9f4] border border-[#ddc0ba]/50 flex items-center justify-center text-[#9d3d26] mb-5 shadow-xs">
                <span className="material-symbols-outlined text-[24px]">delivery_dining</span>
              </div>
              <span className="text-xs uppercase tracking-[0.16em] text-[#5c604c] font-bold">
                Online Delivery
              </span>
              <h2 className="font-serif-editorial text-2xl sm:text-3xl uppercase tracking-tight text-[#1c1c19] mt-1 mb-3">
                Delivery
              </h2>
              <p className="text-sm text-[#56423d] leading-relaxed mb-6">
                Freshly prepared dum biriyanis and side dishes delivered right to your location. Conveniently order online through our official partner platforms.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#ddc0ba]/30">
              <a
                href={RESTAURANT_INFO.orderLinks.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded bg-[#9d3d26] text-white hover:bg-[#802913] transition-colors shadow-sm"
              >
                <span>Order on Zomato</span>
                <span className="material-symbols-outlined text-[15px]">open_in_new</span>
              </a>

              <a
                href={RESTAURANT_INFO.orderLinks.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded bg-white border border-[#ddc0ba]/60 text-[#1c1c19] hover:bg-[#ebe8e3] transition-colors shadow-sm"
              >
                <span>Order on Swiggy</span>
                <span className="material-symbols-outlined text-[15px]">open_in_new</span>
              </a>
            </div>
          </motion.div>

          {/* 2. TAKEAWAY */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="p-8 rounded-xl bg-[#f6f3ee] border border-[#ddc0ba]/40 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#fcf9f4] border border-[#ddc0ba]/50 flex items-center justify-center text-[#9d3d26] mb-5 shadow-xs">
                <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
              </div>
              <span className="text-xs uppercase tracking-[0.16em] text-[#5c604c] font-bold">
                Quick Pickup
              </span>
              <h2 className="font-serif-editorial text-2xl sm:text-3xl uppercase tracking-tight text-[#1c1c19] mt-1 mb-3">
                Takeaway
              </h2>
              <p className="text-sm text-[#56423d] leading-relaxed mb-6">
                Pick up freshly packed biriyani and chicken specialties directly from the counter. Call us ahead to have your order ready and packed when you arrive.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[#ddc0ba]/30">
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded bg-[#9d3d26] text-white hover:bg-[#802913] transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>Call to Order ({RESTAURANT_INFO.phoneFormatted})</span>
              </a>
            </div>
          </motion.div>

          {/* 3. DINE-IN */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="p-8 rounded-xl bg-[#f6f3ee] border border-[#ddc0ba]/40 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#fcf9f4] border border-[#ddc0ba]/50 flex items-center justify-center text-[#9d3d26] mb-5 shadow-xs">
                <span className="material-symbols-outlined text-[24px]">restaurant</span>
              </div>
              <span className="text-xs uppercase tracking-[0.16em] text-[#5c604c] font-bold">
                Table Service
              </span>
              <h2 className="font-serif-editorial text-2xl sm:text-3xl uppercase tracking-tight text-[#1c1c19] mt-1 mb-3">
                Dine-In
              </h2>
              <p className="text-sm text-[#56423d] leading-relaxed mb-6">
                Casual and friendly seating in Yelahanka, Bengaluru. Popular for lunch, dinner, solo dining, university students and groups. Free street parking available.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[#ddc0ba]/30">
              <a
                href={RESTAURANT_INFO.orderLinks.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded border border-[#8a726c]/50 text-[#1c1c19] bg-white hover:bg-[#ebe8e3] transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[16px] text-[#5c604c]">directions</span>
                <span>Get Directions to Restaurant</span>
              </a>
            </div>
          </motion.div>

          {/* 4. CATERING */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="p-8 rounded-xl bg-[#f6f3ee] border border-[#ddc0ba]/40 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#fcf9f4] border border-[#ddc0ba]/50 flex items-center justify-center text-[#9d3d26] mb-5 shadow-xs">
                <span className="material-symbols-outlined text-[24px]">soup_kitchen</span>
              </div>
              <span className="text-xs uppercase tracking-[0.16em] text-[#5c604c] font-bold">
                Bulk Orders
              </span>
              <h2 className="font-serif-editorial text-2xl sm:text-3xl uppercase tracking-tight text-[#1c1c19] mt-1 mb-3">
                Catering
              </h2>
              <p className="text-sm text-[#56423d] leading-relaxed mb-6">
                We cater authentic dum biriyani, chicken roasts, and South Indian specialties in bulk quantities for parties, office functions, and family events.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[#ddc0ba]/30">
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded bg-[#9d3d26] text-white hover:bg-[#802913] transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>Enquire via Phone ({RESTAURANT_INFO.phoneFormatted})</span>
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Dark Order CTA Section */}
      <OrderCTA />

    </div>
  );
}
