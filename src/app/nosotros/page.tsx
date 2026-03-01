import React from 'react';
import Image from 'next/image';
import { Clock, Star, TrendingUp } from 'lucide-react';

export default function NosotrosPage() {
    return (
        <main className="min-h-screen pt-12 pb-24">
            {/* Header section w/ Slate */}
            <div className="bg-slate-900 text-white py-24 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Nuestra Historia <span className="text-primary">Premium</span></h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Desde Charallave, redefiniendo el concepto de comida rápida con ingredientes artesanales y una obsesión por la calidad y rapidez.
                    </p>
                </div>
            </div>

            {/* Main Content - 2 Column Storytelling */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=1000&auto=format&fit=crop"
                            alt="Cocinando Burger Premium"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                                <p className="font-bold text-lg">“La calidad no es un acto, es un hábito.”</p>
                                <p className="text-sm text-slate-300 mt-2">— Founder Pollos Luigi</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">No somos comida rápida, somos <span className="text-primary">Comida Buena</span>, servida rápido.</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                BurgerApp nació de la frustración de no encontrar una hamburguesa que realmente valiera la pena en Charallave. Nos propusimos crear un menú donde cada ingrediente importa: carne 100% de res molida a diario, pan brioche horneado artesanalmente cada mañana, y vegetales seleccionados de productores locales.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Ingredientes Locales</h3>
                                <p className="text-slate-600">Apoyamos a los productores de nuestra región para garantizar la frescura absoluta todos los días.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Empaque Sostenible</h3>
                                <p className="text-slate-600">Nuestros empaques mantienen el calor y están diseñados para ser amigables con el medio ambiente.</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* 3 Box Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">

                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center group hover:shadow-xl hover:border-primary/30 transition-all">
                        <div className="w-16 h-16 bg-red-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <TrendingUp className="w-8 h-8" />
                        </div>
                        <h4 className="text-4xl font-black text-slate-900 mb-2">+50k</h4>
                        <p className="text-slate-500 font-medium text-lg">Burgers Vendidas</p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center group hover:shadow-xl hover:border-primary/30 transition-all">
                        <div className="w-16 h-16 bg-red-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <Clock className="w-8 h-8" />
                        </div>
                        <h4 className="text-4xl font-black text-slate-900 mb-2">25 min</h4>
                        <p className="text-slate-500 font-medium text-lg">Tiempo Promedio Delivery</p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center group hover:shadow-xl hover:border-primary/30 transition-all">
                        <div className="w-16 h-16 bg-red-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <Star className="w-8 h-8" />
                        </div>
                        <h4 className="text-4xl font-black text-slate-900 mb-2">4.9/5</h4>
                        <p className="text-slate-500 font-medium text-lg">Rating de Clientes</p>
                    </div>

                </div>
            </div>
        </main>
    );
}
