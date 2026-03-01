'use client';

import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Product } from '@/store/cartStore';
import Catalog from './Catalog';

const CATEGORIES = [
    { id: 'all', name: 'Todo', icon: '🍗' },
    { id: 'pollo a la broaster', name: 'Broaster', icon: '🍗' },
    { id: 'combos', name: 'Combos', icon: '🍟' },
    { id: 'pizzas', name: 'Pizzas', icon: '🍕' },
    { id: 'raciones', name: 'Raciones', icon: '🥗' },
    { id: 'bebidas', name: 'Bebidas', icon: '🥤' },
];

interface MenuInterfaceProps {
    products: Product[];
}

export default function MenuInterface({ products }: MenuInterfaceProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.desc.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = activeCategory === 'all' || product.category.toLowerCase() === activeCategory;

            return matchesSearch && matchesCategory;
        });
    }, [products, searchTerm, activeCategory]);

    return (
        <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 mb-20">
            <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 p-6 md:p-8 border border-slate-100/50 backdrop-blur-3xl">

                {/* Search Bar */}
                <div className="relative mb-8">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <Search className="h-6 w-6 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-14 pr-4 py-4 md:py-5 border-2 border-slate-100 rounded-2xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all text-lg font-medium text-slate-900"
                        placeholder="¿Qué se te antoja hoy?"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Categories Rail (Instagram Stories Style) */}
                <div className="flex gap-4 md:gap-8 overflow-x-auto px-6 py-6 no-scrollbar items-center justify-start md:justify-center">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`flex flex-col items-center gap-3 min-w-[5rem] group transition-all mt-2`}
                        >
                            <div className={`
                               w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center relative transition-all duration-300 text-2xl pointer-events-none
                                ${activeCategory === cat.id
                                    ? "bg-red-50 ring-2 ring-red-600 ring-offset-4 ring-offset-white shadow-lg shadow-red-200/50 scale-110 p-2"
                                    : "bg-white shadow border border-slate-100 group-hover:border-red-200 p-2"
                                }
                            `}>
                                {cat.icon}
                            </div>
                            <span className={`text-sm font-semibold transition-colors mt-2 ${activeCategory === cat.id ? 'text-primary' : 'text-slate-500 group-hover:text-slate-700'}`}>
                                {cat.name}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Dynamic Render of Filtered Catalog */}
                <Catalog products={filteredProducts} />

            </div>

            <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
        </section>
    );
}
