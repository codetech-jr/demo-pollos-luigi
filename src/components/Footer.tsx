import React from 'react';
import Link from 'next/link';
import { ChefHat, MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Column 1: Brand & Desc */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/20">
                                <ChefHat className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-black text-2xl text-white tracking-tight">Pollos Luigi</span>
                        </div>
                        <p className="text-slate-400 font-medium max-w-sm leading-relaxed">
                            Expertos en pollo a la broaster y pizzas con tradición. Llevando el verdadero sabor a mesa desde hace años en los Valles del Tuy.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-red-600 flex items-center justify-center text-slate-300 hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-red-600 flex items-center justify-center text-slate-300 hover:text-white transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Legal & Useful Links */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg text-white">Legal & Info</h4>
                        <ul className="space-y-3 font-medium">
                            <li><Link href="/nosotros" className="hover:text-red-500 transition-colors">Sobre Nosotros</Link></li>
                            <li><Link href="/faq" className="hover:text-red-500 transition-colors">Preguntas Frecuentes</Link></li>
                            <li><Link href="/zonas" className="hover:text-red-500 transition-colors">Zonas de Cobertura</Link></li>
                            <li><Link href="#" className="hover:text-red-500 transition-colors">Términos y Condiciones</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg text-white">Delivery e Información</h4>
                        <ul className="space-y-4 font-medium">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-white">+58 414-792-70-59</p>
                                    <p className="text-sm">Abiertos todos los días (11am - 10pm)</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-white">Casco Central, Charallave</p>
                                    <p className="text-sm">Sector La Estrella. (Frente a la Plaza)</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
                    <p>© {new Date().getFullYear()} Pollos Luigi. Todos los derechos reservados.</p>
                    <p className="text-slate-500">Diseñado con <span className="text-red-600">❤</span> en Charallave.</p>
                </div>
            </div>
        </footer>
    );
}
