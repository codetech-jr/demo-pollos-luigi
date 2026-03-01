'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useCartStore, Product } from '@/store/cartStore';

export default function PromoBanner() {
    const addItem = useCartStore((state) => state.addItem);

    const promoProduct: Product = {
        id: "301",
        name: "Combo Pollo Pizza",
        desc: "Medio Pollo Broaster (4pz) con papas fritas, ensalada + 1 Pizza M Primavera + 1 Refresco 1L.",
        price: 19.00,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
        category: "Combos"
    };

    const handleAddPromo = () => {
        addItem(promoProduct);
        // Dispatch custom global event to open sidebar if needed, or rely on user clicking cart icon
        console.log('Promo combo added to cart');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 px-4">
            <div className="relative bg-red-700 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row items-center p-8 md:p-12 border-[6px] border-yellow-400/20">

                {/* Background Patterns */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-yellow-500/20 blur-3xl pointer-events-none"></div>

                {/* Content */}
                <div className="relative z-10 w-full md:w-1/2 text-center md:text-left text-white space-y-4">
                    <span className="inline-block px-4 py-1.5 bg-yellow-400 text-slate-900 rounded-full text-sm font-black tracking-wider uppercase mb-2 shadow-sm">
                        Oferta Especial
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-white drop-shadow-sm">
                        Combo <span className="text-yellow-400">Pollo Pizza</span>
                    </h2>
                    <p className="text-lg md:text-xl text-red-50 font-medium max-w-md pt-2">
                        Medio Pollo (4pz) + Papas + Ensalada + 1 Pizza M + Refresco. Todo por $19!
                    </p>
                    <div className="pt-6">
                        <button
                            onClick={handleAddPromo}
                            className="group bg-yellow-400 text-red-800 hover:bg-yellow-300 font-bold text-lg px-8 py-4 rounded-2xl shadow-xl transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto"
                        >
                            Agregar Combo al Pedido
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Image / Graphic Overlap */}
                <div className="relative z-10 w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
                    <div className="relative w-64 h-64 md:w-96 md:h-96 transform hover:scale-105 transition-transform duration-500 hover:rotate-2">
                        <Image
                            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
                            alt="Combo Pollo Pizza"
                            fill
                            className="object-cover rounded-full shadow-2xl border-8 border-yellow-400"
                            sizes="(max-width: 768px) 256px, 384px"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
