import React from 'react';
import { MapPin, Info, Navigation2 } from 'lucide-react';

export default function ZonasPage() {
    return (
        <main className="min-h-screen pt-12 pb-24">

            {/* Page Header */}
            <div className="bg-slate-900 py-16 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Zonas de <span className="text-primary">Cobertura</span></h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    Llegamos a donde estés en Charallave. Conoce nuestras áreas de despacho, tarifas y tiempos estimados.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">

                    {/* Left Column: Rules & Info */}
                    <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
                        <div className="flex items-center gap-4 border-b border-slate-100 pb-6 mb-8">
                            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center">
                                <Navigation2 className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">Información de Envío</h2>
                                <p className="text-slate-500 font-medium">Tarifas base por localidad</p>
                            </div>
                        </div>

                        <div className="space-y-6">

                            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl hover:bg-red-50 transition-colors cursor-default border border-transparent hover:border-red-100">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-slate-400" />
                                    <span className="font-bold text-slate-800 text-lg">Casco Central Charallave</span>
                                </div>
                                <div className="text-right">
                                    <span className="block font-black text-lg text-primary">Gratis</span>
                                    <span className="text-xs text-slate-500 font-medium">15-20 min</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl hover:bg-red-50 transition-colors cursor-default border border-transparent hover:border-red-100">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-slate-400" />
                                    <span className="font-bold text-slate-800 text-lg">Paso Real / Ciudad Miranda</span>
                                </div>
                                <div className="text-right">
                                    <span className="block font-black text-lg text-slate-900">$2.00</span>
                                    <span className="text-xs text-slate-500 font-medium">25-35 min</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl hover:bg-red-50 transition-colors cursor-default border border-transparent hover:border-red-100">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-slate-400" />
                                    <span className="font-bold text-slate-800 text-lg">Matalinda / La Estrella</span>
                                </div>
                                <div className="text-right">
                                    <span className="block font-black text-lg text-slate-900">$3.00</span>
                                    <span className="text-xs text-slate-500 font-medium">30-45 min</span>
                                </div>
                            </div>

                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-100">
                            <div className="flex gap-4 p-5 bg-blue-50 rounded-2xl border border-blue-100">
                                <Info className="w-6 h-6 text-blue-500 shrink-0" />
                                <p className="text-sm text-blue-800 leading-relaxed font-medium">
                                    <strong>Nota:</strong> Los tiempos de entrega son aproximados y pueden variar dependiendo de la demanda, tráfico o condiciones climáticas. Si tu zona no aparece en la lista, contáctanos por WhatsApp para consultar viabilidad.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Google Maps Embed */}
                    <div className="h-[600px] w-full rounded-[2rem] overflow-hidden shadow-xl border-4 border-white bg-slate-200 relative">
                        {/* Visual Placeholder if no map available, or real iframe if configured */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125633.39865664!2d-66.96495420387532!3d10.244302636952726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a82f3c7e7baeb%3A0xe5499f52f4c1c72!2sCharallave%2C%20Miranda!5e0!3m2!1ses!2sve!4v1709404285741!5m2!1ses!2sve"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                            title="Mapa de Charallave"
                        ></iframe>
                    </div>

                </div>
            </div>
        </main>
    );
}
