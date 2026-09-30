import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RESTAURANT_INFO } from '../data/restaurant';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fcf9f4]/95 backdrop-blur-md border-b border-[#ddc0ba]/40 shadow-[0_1px_8px_rgba(28,25,23,0.03)] transition-all">
      <div className="h-20 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Restaurant Branding */}
        <Link 
          to="/" 
          onClick={closeMenu}
          className="flex flex-col justify-center min-w-0 shrink group focus:outline-none py-1"
        >
          <span className="font-serif-editorial text-[17px] sm:text-lg xl:text-2xl tracking-tight text-[#1c1c19] uppercase font-medium group-hover:text-[#9d3d26] transition-colors leading-[1.12] sm:leading-tight sm:whitespace-nowrap">
            <span className="block sm:inline">Shetty Biriyani </span>
            <span className="block sm:inline">Center</span>
          </span>
          <span className="text-[10px] sm:text-[11px] lg:text-xs text-[#5c604c] uppercase tracking-[0.14em] sm:tracking-[0.16em] font-semibold mt-0.5 whitespace-nowrap">
            {RESTAURANT_INFO.shortLocation}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-xs xl:text-[13px] uppercase tracking-wider transition-colors py-1 relative ${
                  isActive
                    ? 'text-[#9d3d26] font-semibold'
                    : 'text-[#56423d] hover:text-[#1c1c19] font-medium'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#9d3d26] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-1.5 sm:gap-3 xl:gap-4 shrink-0">
          <a
            href={RESTAURANT_INFO.phoneTel}
            className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3.5 py-2 rounded border border-[#8a726c]/40 text-[#1c1c19] hover:bg-[#ebe8e3] transition-colors whitespace-nowrap"
            title="Call Restaurant Directly"
          >
            <span className="material-symbols-outlined text-[17px] text-[#5c604c]">call</span>
            <span>Call ({RESTAURANT_INFO.phoneFormatted})</span>
          </a>

          <a
            href={RESTAURANT_INFO.orderLinks.zomato}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider px-2.5 sm:px-4 py-1.5 sm:py-2 rounded bg-[#9d3d26] text-white hover:bg-[#802913] transition-colors shadow-sm whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[15px] sm:text-[17px]">shopping_bag</span>
            <span>Order Online</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded text-[#1c1c19] hover:bg-[#ebe8e3] transition-colors focus:outline-none shrink-0"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Animated Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-t border-[#ddc0ba]/40 bg-[#fcf9f4] px-4 pt-4 pb-6 shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={closeMenu}
                    className={`px-3 py-2.5 rounded text-sm uppercase tracking-wider font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#f0ede9] text-[#9d3d26]'
                        : 'text-[#1c1c19] hover:bg-[#f6f3ee]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9d3d26]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 pt-4 border-t border-[#ddc0ba]/40 flex flex-col gap-2.5">
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider py-2.5 rounded border border-[#8a726c]/40 text-[#1c1c19] bg-white hover:bg-[#ebe8e3] transition-colors"
              >
                <span className="material-symbols-outlined text-[18px] text-[#5c604c]">call</span>
                <span>Call {RESTAURANT_INFO.phoneFormatted}</span>
              </a>

              <a
                href={RESTAURANT_INFO.orderLinks.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider py-2.5 rounded bg-[#9d3d26] text-white hover:bg-[#802913] transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                <span>Order on Zomato / Swiggy</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
