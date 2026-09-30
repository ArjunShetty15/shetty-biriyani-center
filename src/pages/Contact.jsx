import React from 'react';
import { motion } from 'framer-motion';
import { RESTAURANT_INFO } from '../data/restaurant';
import OrderCTA from '../components/OrderCTA';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Contact() {
  useDocumentTitle('Contact | Shetty Biriyani Center');

  return (
    <div className="w-full flex flex-col">
      
      {/* Header Section */}
      <section className="w-full bg-[#f6f3ee] py-12 sm:py-16 border-b border-[#ddc0ba]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[1.5px] bg-[#9d3d26]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#5c604c] font-semibold">
              Location & Contact
            </span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-5xl uppercase tracking-tight text-[#1c1c19] mb-3">
            Visit Shetty Biriyani Center
          </h1>

          <p className="text-sm sm:text-base text-[#56423d] max-w-2xl leading-relaxed">
            Located in Yelahanka, Bengaluru. Join us for lunch, dinner, takeaway pickup, or contact us for catering and direct orders.
          </p>
        </div>
      </section>

      {/* Contact & Map Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Contact Cards & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#5c604c]" />
                <span className="text-xs uppercase tracking-widest text-[#5c604c] font-semibold">
                  {RESTAURANT_INFO.fullLocation}
                </span>
              </div>

              <h2 className="font-serif-editorial text-3xl sm:text-4xl uppercase tracking-tight text-[#1c1c19] mb-6">
                Direct Contact
              </h2>

              <div className="flex flex-col gap-6 mb-8">
                {/* Phone Card */}
                <div className="p-6 rounded-xl bg-[#f6f3ee] border border-[#ddc0ba]/40 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fcf9f4] border border-[#ddc0ba]/50 flex items-center justify-center text-[#9d3d26] shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-[24px]">phone</span>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-[#5c604c] font-bold mb-1">
                      Phone Number
                    </h3>
                    <a
                      href={RESTAURANT_INFO.phoneTel}
                      className="font-serif-editorial text-2xl text-[#1c1c19] font-medium hover:text-[#9d3d26] transition-colors block"
                    >
                      {RESTAURANT_INFO.phoneFormatted}
                    </a>
                    <p className="text-xs text-[#56423d] mt-1">
                      Direct takeaway orders, dining enquiries, and catering bookings.
                    </p>
                  </div>
                </div>

                {/* Location Card */}
                <div className="p-6 rounded-xl bg-[#f6f3ee] border border-[#ddc0ba]/40 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fcf9f4] border border-[#ddc0ba]/50 flex items-center justify-center text-[#9d3d26] shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-[24px]">location_on</span>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-[#5c604c] font-bold mb-1">
                      Restaurant Location
                    </h3>
                    <span className="font-serif-editorial text-2xl text-[#1c1c19] font-medium block">
                      Yelahanka, Bengaluru
                    </span>
                    <p className="text-xs text-[#56423d] mt-1">
                      Karnataka, India. Free street parking available outside restaurant.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href={RESTAURANT_INFO.phoneTel}
                  className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded bg-[#9d3d26] text-white hover:bg-[#802913] transition-colors shadow-sm"
                >
                  <span className="material-symbols-outlined text-[17px]">call</span>
                  <span>Call Now</span>
                </a>

                <a
                  href={RESTAURANT_INFO.orderLinks.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded border border-[#8a726c]/50 text-[#1c1c19] bg-white hover:bg-[#ebe8e3] transition-colors shadow-sm"
                >
                  <span className="material-symbols-outlined text-[17px] text-[#5c604c]">directions</span>
                  <span>Get Directions</span>
                </a>

                <a
                  href={RESTAURANT_INFO.orderLinks.zomato}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded bg-[#f0ede9] text-[#1c1c19] hover:bg-[#ebe8e3] transition-colors"
                >
                  <span>Order Online</span>
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Map Placeholder & Directions Preview */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="rounded-xl overflow-hidden border border-[#ddc0ba]/50 bg-[#f6f3ee] shadow-sm flex flex-col h-full">
              <div className="p-4 bg-[#f0ede9] border-b border-[#ddc0ba]/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#9d3d26] text-[20px]">map</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1c1c19]">
                    Map & Directions
                  </span>
                </div>
                <a
                  href={RESTAURANT_INFO.orderLinks.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold uppercase tracking-wider text-[#9d3d26] hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </div>

              {/* Verified Clean Map Placeholder Area */}
              <div className="flex-grow min-h-[380px] bg-[#ebe8e3] relative flex items-center justify-center p-8 text-center">
                <div className="max-w-sm flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#fcf9f4] border border-[#ddc0ba]/60 flex items-center justify-center text-[#9d3d26] mb-4 shadow-sm">
                    <span className="material-symbols-outlined text-[30px]">storefront</span>
                  </div>
                  <h3 className="font-serif-editorial text-2xl text-[#1c1c19] font-medium mb-1">
                    Shetty Biriyani Center
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#5c604c] font-semibold mb-3">
                    Yelahanka · Bengaluru
                  </p>
                  <p className="text-xs text-[#56423d] leading-relaxed mb-6">
                    Join us in Yelahanka for hearty dum biriyanis and coastal favorites. Click below to open verified navigation directions on your phone or device.
                  </p>

                  <a
                    href={RESTAURANT_INFO.orderLinks.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-6 py-2.5 rounded bg-[#9d3d26] text-white hover:bg-[#802913] transition-colors shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[16px]">near_me</span>
                    <span>Launch Google Maps</span>
                  </a>
                </div>
              </div>

              <div className="p-4 bg-[#f0ede9] border-t border-[#ddc0ba]/40 text-center">
                <span className="text-[11px] text-[#5c604c] font-semibold uppercase tracking-wider">
                  Solo Dining · Groups · University Students · Family Friendly
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Dark Order CTA Section */}
      <OrderCTA />

    </div>
  );
}
