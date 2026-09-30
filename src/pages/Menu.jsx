import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menu';
import { RESTAURANT_INFO } from '../data/restaurant';
import OrderCTA from '../components/OrderCTA';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Menu() {
  useDocumentTitle('Menu | Shetty Biriyani Center');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = useMemo(() => {
    if (activeCategory === 'all') {
      return [
        {
          id: 'chicken',
          title: 'Chicken Dishes',
          subtitle: 'House Favourites & Traditional Curries',
          items: MENU_ITEMS.filter((i) => i.category === 'chicken' && !i.isRice)
        },
        {
          id: 'rice',
          title: 'Biriyani & Rice Specialties',
          subtitle: 'Aromatic Dum Rice & Fresh Fried Rice',
          items: MENU_ITEMS.filter((i) => i.isRice)
        },
        {
          id: 'boneless',
          title: 'Boneless Chicken',
          subtitle: 'Tender Hand-Cut Chicken Preparations',
          items: MENU_ITEMS.filter((i) => i.category === 'boneless')
        },
        {
          id: 'egg',
          title: 'Egg Dishes',
          subtitle: 'Fresh Cooked Egg Delicacies & Sides',
          items: MENU_ITEMS.filter((i) => i.category === 'egg')
        },
        {
          id: 'veg',
          title: 'Vegetarian & Coastal Breads',
          subtitle: 'Authentic South Indian Ragi Balls, Dosas & Breads',
          items: MENU_ITEMS.filter((i) => i.category === 'veg')
        }
      ];
    }

    if (activeCategory === 'rice') {
      return [
        {
          id: 'rice',
          title: 'Biriyani & Rice Specialties',
          subtitle: 'Aromatic Dum Rice & Fresh Fried Rice',
          items: MENU_ITEMS.filter((i) => i.isRice)
        }
      ];
    }

    const catMap = {
      chicken: { title: 'Chicken Dishes', subtitle: 'House Favourites & Traditional Curries' },
      boneless: { title: 'Boneless Chicken', subtitle: 'Tender Hand-Cut Chicken Preparations' },
      egg: { title: 'Egg Dishes', subtitle: 'Fresh Cooked Egg Delicacies & Sides' },
      veg: { title: 'Vegetarian & Coastal Breads', subtitle: 'Authentic South Indian Ragi Balls, Dosas & Breads' }
    };

    return [
      {
        id: activeCategory,
        title: catMap[activeCategory]?.title || 'Dishes',
        subtitle: catMap[activeCategory]?.subtitle || '',
        items: MENU_ITEMS.filter((i) => i.category === activeCategory)
      }
    ];
  }, [activeCategory]);

  return (
    <div className="w-full flex flex-col">
      
      {/* Menu Header Section */}
      <section className="w-full bg-[#f6f3ee] py-12 sm:py-16 border-b border-[#ddc0ba]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[1.5px] bg-[#9d3d26]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#5c604c] font-semibold">
              Our Complete Menu
            </span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-5xl uppercase tracking-tight text-[#1c1c19] mb-3">
            Authentic Fare
          </h1>

          <p className="text-sm sm:text-base text-[#56423d] max-w-2xl leading-relaxed mb-8">
            Explore our complete selection of dum biriyani, regional chicken roasts, egg dishes and vegetarian South Indian staples. Prepared fresh with generous flavour.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all focus:outline-none ${
                    isActive
                      ? 'bg-[#9d3d26] text-white shadow-sm'
                      : 'bg-[#fcf9f4] text-[#1c1c19] border border-[#ddc0ba]/60 hover:bg-[#ebe8e3]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Complete Typography-Focused Menu Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col gap-14 sm:gap-18">
          {filteredCategories.map((group) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col"
            >
              {/* Category Heading Banner */}
              <div className="border-b border-[#8a726c]/30 pb-3 mb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h2 className="font-serif-editorial text-2xl sm:text-3xl uppercase tracking-tight text-[#1c1c19] font-medium">
                    {group.title}
                  </h2>
                  {group.subtitle && (
                    <span className="text-xs text-[#5c604c] font-medium tracking-wide">
                      {group.subtitle}
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-bold text-[#5c604c] uppercase tracking-widest">
                  {group.items.length} {group.items.length === 1 ? 'Item' : 'Items'}
                </span>
              </div>

              {/* Menu Rows Grid - 2 columns on desktop, 1 on mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
                {group.items.map((dish) => (
                  <div
                    key={dish.id}
                    className="flex items-baseline justify-between py-2 border-b border-[#ddc0ba]/30 hover:bg-[#f6f3ee]/50 px-2 rounded transition-colors group"
                  >
                    <div className="flex items-center gap-2 shrink-0 max-w-[70%] sm:max-w-[75%]">
                      <span className="font-serif-editorial text-base sm:text-lg text-[#1c1c19] font-medium group-hover:text-[#9d3d26] transition-colors leading-snug">
                        {dish.name}
                      </span>
                      {dish.badge && (
                        <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#e1e5cb] text-[#454936]">
                          {dish.badge}
                        </span>
                      )}
                    </div>

                    <div className="leader-line hidden sm:block" />

                    <div className="shrink-0 text-right">
                      <span className="text-sm sm:text-base font-bold text-[#1c1c19] tabular-nums tracking-wide">
                        ₹{dish.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Takeaway / Order Callout Box */}
        <div className="mt-16 p-6 sm:p-8 rounded-xl bg-[#f0ede9] border border-[#ddc0ba]/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif-editorial text-2xl uppercase tracking-tight text-[#1c1c19] mb-1">
              Want to Order Your Meal?
            </h3>
            <p className="text-xs sm:text-sm text-[#56423d]">
              Order directly via Zomato or Swiggy, or call us for takeaway pickup in Yelahanka.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={RESTAURANT_INFO.phoneTel}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded border border-[#8a726c]/50 text-[#1c1c19] bg-white hover:bg-[#ebe8e3] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px] text-[#5c604c]">call</span>
              <span>Call {RESTAURANT_INFO.phoneFormatted}</span>
            </a>

            <a
              href={RESTAURANT_INFO.orderLinks.zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded bg-[#9d3d26] text-white hover:bg-[#802913] transition-colors shadow-sm"
            >
              <span>Order on Zomato</span>
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </a>
          </div>
        </div>
      </section>

      {/* Dark Order CTA Section */}
      <OrderCTA />

    </div>
  );
}
