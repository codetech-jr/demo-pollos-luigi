'use client';

import React from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';
import { Product, useCartStore } from '@/store/cartStore';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const addItem = useCartStore((state) => state.addItem);

    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">

            {/* Product Image */}
            <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden rounded-t-3xl p-0 w-full shrink-0">
                {product.image ? (
                    <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300 font-bold bg-slate-100">SIN FOTO</div>
                )}
            </div>

            {/* Product Content */}
            <div className="p-4 md:p-5 flex flex-col justify-between flex-grow text-left">
                <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-1">
                        {product.name}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-2 leading-snug">
                        {product.desc}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-3 md:mt-4">
                    <div className="flex flex-col">
                        <span className="text-lg font-black text-slate-900">${product.price.toFixed(2)}</span>
                    </div>

                    <button
                        onClick={() => addItem(product)}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:scale-95"
                        aria-label={`Add ${product.name} to cart`}
                    >
                        <Plus className="w-5 h-5" />
                    </button>
                </div>
            </div>

        </div>
    );
}
