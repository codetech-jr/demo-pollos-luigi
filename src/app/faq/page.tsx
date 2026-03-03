import React from 'react';
import { HelpCircle } from 'lucide-react';

const FAQS = [
    {
        question: "¿Cobran comisión por pago por transferencia en Bolívares?",
        answer: "No, no cobramos ninguna comisión extra. El cálculo se realiza a la tasa establecida del día multiplicando el subtotal en dólares por la tasa de cambio ($1 = tasa del día del BCV)."
    },
    {
        question: "¿Cuánto es el monto mínimo para pedir delivery?",
        answer: "El monto mínimo de compra para facturar pedidos por delivery es de $5.00."
    },
    {
        question: "¿Puedo programar un pedido para otro día?",
        answer: "Actualmente solo puedes programar pedidos para el mismo día dentro de nuestro horario laborable. Solo selecciona 'Programar' en el carrito y especifica la hora de entrega."
    },
    {
        question: "¿Qué pasa si mi pedido llega frío o equivocado?",
        answer: "Nuestra prioridad es la calidad. Si hay algún inconveniente grave con tu orden comprobable (falta un producto, error de orden grosero), te repondremos el producto en el menor tiempo posible. Comunícate directo al WhatsApp de soporte."
    },
    {
        question: "¿Tienen opciones vegetarianas o Keto?",
        answer: "Sí, puedes sustituir la carne de cualquier hamburguesa por un medallón de Falafel (Veggie) sin costo adicional, o pedir tus burgers 'En Plato' o envueltas en lechuga (Keto)."
    }
];

export default function FAQPage() {
    return (
        <main className="min-h-screen pt-24 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-16">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <HelpCircle className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Preguntas Frecuentes</h1>
                <p className="text-lg text-slate-500">
                    Todo lo que necesitas saber acerca de nuestros procesos de compra y delivery.
                </p>
            </div>

            <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                    <details
                        key={idx}
                        className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden open:ring-2 open:ring-primary/20 open:border-primary/50 transition-all duration-300"
                    >
                        <summary className="flex items-center justify-between font-bold text-lg text-slate-800 cursor-pointer p-6 list-none hover:bg-slate-50 select-none">
                            {faq.question}
                            <span className="transition-transform group-open:-rotate-45 text-slate-400 group-hover:text-primary ml-4">
                                <svg className="w-6 h-6" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-6-6h12"></path></svg>
                            </span>
                        </summary>

                        <div className="px-6 pb-6 text-slate-600 leading-relaxed font-medium border-t border-slate-100 pt-4 bg-slate-50/50">
                            {faq.answer}
                        </div>
                    </details>
                ))}
            </div>

        </main>
    );
}
