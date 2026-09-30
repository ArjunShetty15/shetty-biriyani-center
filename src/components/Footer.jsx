import React from 'react';
import { Link } from 'react-router-dom';
import { RESTAURANT_INFO } from '../data/restaurant';

export default function Footer() {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="w-full bg-[#f6f3ee] border-t border-[#ddc0ba]/40 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#ddc0ba]/30">
          
          {/* Brand & Location */}
          <div className="md:col-span-5 flex flex-col">
            <Link to="/" className="inline-block mb-2">
              <span className="font-serif-editorial text-2xl uppercase tracking-tight text-[#1c1c19] font-medium hover:text-[#9d3d26] transition-colors">
                {RESTAURANT_INFO.name}
              </span>
            </Link>
            <p className="text-xs uppercase tracking-[0.18em] text-[#5c604c] font-semibold mb-3">
              {RESTAURANT_INFO.fullLocation}
            </p>
            <p className="text-sm text-[#56423d] max-w-sm leading-relaxed mb-4">
              {RESTAURANT_INFO.aboutText}
            </p>
            <div className="flex items-center gap-2 text-sm text-[#1c1c19]">
              <span className="material-symbols-outlined text-[18px] text-[#9d3d26]">phone</span>
              <span className="text-xs uppercase tracking-wider text-[#5c604c] font-medium">Direct Inquiries:</span>
              <a 
                href={RESTAURANT_INFO.phoneTel}
                className="font-semibold hover:text-[#9d3d26] transition-colors"
              >
                {RESTAURANT_INFO.phoneFormatted}
              </a>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#5c604c] font-bold mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#56423d] hover:text-[#9d3d26] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Order Online & Partner Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#5c604c] font-bold mb-4">
              Order Online
            </h4>
            <p className="text-xs text-[#56423d] mb-3">
              Direct delivery dispatch available via our official delivery partners:
            </p>
            <div className="flex flex-col gap-2 max-w-xs">
              <a
                href={RESTAURANT_INFO.orderLinks.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded bg-white border border-[#ddc0ba]/60 hover:border-[#9d3d26] text-xs font-semibold uppercase tracking-wider text-[#1c1c19] hover:text-[#9d3d26] transition-all group"
              >
                <span>Zomato</span>
                <span className="flex items-center text-[11px] text-[#5c604c] group-hover:text-[#9d3d26] font-normal">
                  Order Online <span className="material-symbols-outlined text-[14px] ml-1">arrow_forward</span>
                </span>
              </a>
              <a
                href={RESTAURANT_INFO.orderLinks.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded bg-white border border-[#ddc0ba]/60 hover:border-[#9d3d26] text-xs font-semibold uppercase tracking-wider text-[#1c1c19] hover:text-[#9d3d26] transition-all group"
              >
                <span>Swiggy</span>
                <span className="flex items-center text-[11px] text-[#5c604c] group-hover:text-[#9d3d26] font-normal">
                  Order Online <span className="material-symbols-outlined text-[14px] ml-1">arrow_forward</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#56423d]">
          <p>© {new Date().getFullYear()} {RESTAURANT_INFO.name}, {RESTAURANT_INFO.fullLocation}. All rights reserved.</p>
          <p className="tracking-widest uppercase text-[11px] text-[#5c604c] font-semibold">
            Authentic South Indian Fare
          </p>
        </div>
      </div>
    </footer>
  );
}
