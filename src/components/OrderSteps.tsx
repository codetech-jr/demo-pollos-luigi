'use client';

import React from 'react';
import { ShoppingBag, CreditCard, Map } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OrderSteps() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

            <div className="mb-12">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-black tracking-widest uppercase mb-4 border border-red-100 shadow-sm">
                    <span className="text-yellow-500">⚡</span> NUEVO SISTEMA AUTOMATIZADO
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Cero Filas. Full Sabor.</h2>
                <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto font-medium">
                    Haz tu pedido en menos de 2 minutos directamente por nuestra web y recíbelo caliente o pásalo buscando.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 relative">

                {/* Step 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0 }}
                    className="flex-1 bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 z-10 relative group hover:-translate-y-2 transition-transform duration-300 w-full max-w-sm"
                >
                    <div className="absolute -top-5 -left-5 w-10 h-10 bg-yellow-400 text-red-800 rounded-full flex items-center justify-center font-black text-xl shadow-md border-2 border-white">
                        1
                    </div>
                    <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                        <ShoppingBag className="w-10 h-10 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Llena el carrito</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Explora nuestro menú, elige el pollo más crujiente y suma raciones.
                    </p>
                </motion.div>

                {/* Arrow Desktop Only */}
                <div className="hidden md:flex flex-col justify-center items-center text-slate-300 -mx-4 z-0">
                    <svg className="w-16 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>

                {/* Step 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2 }}
                    className="flex-1 bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 z-10 relative group hover:-translate-y-2 transition-transform duration-300 w-full max-w-sm"
                >
                    <div className="absolute -top-5 -left-5 w-10 h-10 bg-yellow-400 text-red-800 rounded-full flex items-center justify-center font-black text-xl shadow-md border-2 border-white">
                        2
                    </div>
                    <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                        <CreditCard className="w-10 h-10 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Paga directo</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Múltiples métodos de pago integrados. Zelle, Efectivo o Pago Móvil.
                    </p>
                </motion.div>

                {/* Arrow Desktop Only */}
                <div className="hidden md:flex flex-col justify-center items-center text-slate-300 -mx-4 z-0">
                    <svg className="w-16 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>

                {/* Step 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.4 }}
                    className="flex-1 bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 z-10 relative group hover:-translate-y-2 transition-transform duration-300 w-full max-w-sm"
                >
                    <div className="absolute -top-5 -left-5 w-10 h-10 bg-yellow-400 text-red-800 rounded-full flex items-center justify-center font-black text-xl shadow-md border-2 border-white">
                        3
                    </div>
                    <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                        <Map className="w-10 h-10 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Disfruta tu comida</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Recibe tu pedido por delivery o búscalo listo en nuestro restaurante físico.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
