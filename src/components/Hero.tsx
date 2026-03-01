'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div className="relative bg-slate-900 overflow-hidden pt-28 pb-32">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-yellow-500/10 blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Text formulation */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left z-10 lg:col-span-7 xl:col-span-8 max-w-xl lg:max-w-2xl xl:max-w-3xl pr-0 md:pr-4 mx-auto lg:mx-0"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-yellow-400 text-sm font-semibold mb-6">
                            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                            Ingredientes Frescos, Sabor Premium
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
                            Pollo a la Broaster y Pizzas<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-primary">¡Con Sabor Brutal!</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                            Preparadas al momento con la receta original, pollos frescos y pizzas crujientes.
                            Pide ahora y disfruta de la verdadera experiencia en Charallave.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <button className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-red-800 text-white rounded-2xl font-bold text-lg shadow-lg shadow-primary/30 transition-all hover:-translate-y-1">
                                Ver Menú
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Column: Giant Floating Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                        className="relative z-10 flex justify-center lg:justify-end mt-12 lg:mt-0 px-4 lg:col-span-5 xl:col-span-4"
                    >
                        <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] animate-bounce" style={{ animationDuration: '3s' }}>
                            <Image
                                src="https://images.unsplash.com/photo-1626645738815-bfaeb3a0937a?q=80&w=800&auto=format&fit=crop"
                                alt="Pollo Frito Premium"
                                fill
                                priority
                                className="object-cover rounded-full shadow-2xl border-4 border-slate-800 object-center"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
