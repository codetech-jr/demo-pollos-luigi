'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, MapPin, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

interface NavbarProps {
    onOpenCart: () => void;
}

export default function Navbar({ onOpenCart }: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const cartItems = useCartStore((state) => state.items);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Left: Logo & Location */}
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-12 h-12 bg-white rounded-full overflow-hidden shadow-md group-hover:scale-105 transition-transform border-2 border-primary shrink-0">
                                <Image
                                    src="/logo.png"
                                    alt="Pollos Luigi"
                                    fill
                                    className="object-cover scale-110"
                                />
                            </div>
                            <span className="hidden md:block font-black text-2xl text-red-700 tracking-tight drop-shadow-sm">Pollos Luigi</span>
                        </Link>

                        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-full text-sm font-medium text-slate-600 border border-slate-200">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>Charallave</span>
                        </div>
                    </div>

                    {/* Center: Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
                        <Link href="/" className="hover:text-primary transition-colors">Menú</Link>
                        <Link href="/nosotros" className="hover:text-primary transition-colors">Nosotros</Link>
                        <Link href="/zonas" className="hover:text-primary transition-colors">Zonas</Link>
                        <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
                    </div>

                    {/* Right: Status & Cart */}
                    <div className="flex items-center gap-3 sm:gap-5">
                        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-sm font-semibold">
                            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                            Abierto
                        </div>

                        <button
                            onClick={onOpenCart}
                            className="relative p-2 text-slate-700 hover:text-primary hover:bg-yellow-50 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            <ShoppingBag className="w-6 h-6" />
                            {totalItems > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary border-2 border-white rounded-full transform translate-x-1 -translate-y-1">
                                    {totalItems}
                                </span>
                            )}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 text-slate-700 hover:text-primary hover:bg-yellow-50 rounded-full transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-b border-slate-200 shadow-lg px-4 pt-2 pb-6 space-y-4">
                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-xl text-sm font-medium text-slate-600 mb-4">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>Tu ubicación: Charallave</span>
                    </div>
                    <div className="flex flex-col gap-4 font-semibold text-slate-700 text-lg">
                        <Link href="/" className="hover:text-primary px-2" onClick={() => setIsMobileMenuOpen(false)}>Menú</Link>
                        <Link href="/nosotros" className="hover:text-primary px-2" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</Link>
                        <Link href="/zonas" className="hover:text-primary px-2" onClick={() => setIsMobileMenuOpen(false)}>Zonas de Delivery</Link>
                        <Link href="/faq" className="hover:text-primary px-2" onClick={() => setIsMobileMenuOpen(false)}>Preguntas Frecuentes</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
