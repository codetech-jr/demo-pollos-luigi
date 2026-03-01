import React from 'react';
import Image from 'next/image';

const POSTS = [
    "https://images.unsplash.com/photo-1626645738815-bfaeb3a0937a?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=600&auto=format&fit=crop"
];

export default function InstagramSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-20 relative">
            <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative border border-slate-800">

                {/* Glow Effects */}
                <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-red-600/20 blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-yellow-500/10 blur-3xl pointer-events-none"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                    {/* Left: Copywriter */}
                    <div className="text-center lg:text-left text-white max-w-lg mx-auto lg:mx-0">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
                            Nos gusta presumir <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">nuestro sabor.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-400 font-medium mb-8 leading-relaxed">
                            Únete a nuestra comunidad en redes sociales donde publicamos promos sorpresa, menús secretos y el día a día de nuestros cocineros preparando el pollo más crujiente.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-bold shadow-xl transition-all hover:scale-105 active:scale-95 text-lg"
                        >
                            Síguenos @PollosLuigi
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                        </a>
                    </div>

                    {/* Right: Instagram Grids */}
                    <div className="grid grid-cols-2 gap-4">
                        {POSTS.map((url, idx) => (
                            <div
                                key={idx}
                                className={`relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-800 ${idx % 2 === 0 ? 'mt-0 lg:mt-8' : 'mb-0 lg:mb-8'}`}
                            >
                                <Image
                                    src={url}
                                    alt="Post de Pollos Luigi"
                                    fill
                                    className="object-cover transform hover:scale-110 transition-transform duration-500 cursor-pointer"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
