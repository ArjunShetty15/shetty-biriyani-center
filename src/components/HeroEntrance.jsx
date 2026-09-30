import React, { useState } from 'react';

export default function HeroEntrance({ className = '', priority = false }) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className={`relative w-full rounded-xl overflow-hidden bg-[#f0ede9] border border-[#ddc0ba]/50 shadow-sm transition-all ${className || 'h-[300px] sm:h-[380px] lg:h-[460px]'}`}>
      {!imgError && (
        <img
          src="/images/restaurant_entrance.jpg"
          alt="Shetty Biriyani Center entrance in Yelahanka, Bengaluru"
          onError={() => setImgError(true)}
          onLoad={() => setImgLoaded(true)}
          loading={priority ? 'eager' : 'lazy'}
          className={`w-full h-full object-cover object-top sm:object-[center_top] transition-opacity duration-500 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Subtle Bottom Architectural Vignette to harmonize with warm editorial theme */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/25 via-transparent to-transparent" />

      {/* Clean Verified Location Tag matching Stitch Architectural Style */}
      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1c1c19]/80 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-[#fcf9f4] shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ffdad2]" />
          Yelahanka Entrance
        </span>
      </div>

      {/* Fallback if image fails to load */}
      {imgError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#f6f3ee]">
          <div className="p-6 rounded-lg bg-[#fcf9f4] border border-[#ddc0ba]/40 flex flex-col items-center max-w-sm shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#ffdad2] flex items-center justify-center text-[#9d3d26] mb-3">
              <span className="material-symbols-outlined text-[28px]">storefront</span>
            </div>
            <span className="font-serif-editorial text-xl text-[#1c1c19] font-medium tracking-tight">
              Restaurant Entrance
            </span>
            <span className="text-[11px] uppercase tracking-widest text-[#5c604c] mt-1 font-semibold">
              [ RESTAURANT ENTRANCE · YELAHANKA, BENGALURU ]
            </span>
            <p className="text-xs text-[#56423d] mt-2 leading-relaxed">
              Shetty Biriyani Center — Main Entrance, Yelahanka.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
