'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';
import { X, Trash2, ShoppingBag, MapPin, Store, Clock, User, Phone, Wallet, DollarSign, Smartphone, Trash } from 'lucide-react';

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
    const { items: cart, cartTotal, exchangeRate, removeItem: removeFromCart, updateQuantity } = useCartStore();
    const totalPrice = cartTotal();

    // Checkout State
    const [deliveryMode, setDeliveryMode] = useState<'Delivery' | 'Retiro'>('Delivery');
    const [isScheduled, setIsScheduled] = useState(false);
    const [scheduledTime, setScheduledTime] = useState('');
    const [payMethod, setPayMethod] = useState<'Pago Móvil' | 'Zelle' | 'Efectivo'>('Pago Móvil');

    // User info state
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const generarPedido = () => {
        try {
            // Modifica número por este que solicita el usuario de PolloLuigi.
            const tel = "584147927059";
            let mensaje = `👋 *¡Hola Pollos Luigi!* Aquí va mi nuevo pedido:\n\n`;
            cart.forEach((i) => {
                mensaje += `▪️ *${i.quantity}x ${i.name}*\n     Subtotal: $${(i.price * i.quantity).toFixed(2)}\n`;
            });

            mensaje += `\n💰 *TOTAL PAGO: $${totalPrice.toFixed(2)}*\n`;
            mensaje += `💵 *Equivalente Bs. ${(totalPrice * (exchangeRate || 50)).toFixed(2)}*\n\n`;

            mensaje += `*Cliente:* ${formData.name}\n`;
            mensaje += `*Teléfono:* ${formData.phone}\n`;
            if (deliveryMode === 'Delivery') {
                mensaje += `*Dirección:* ${formData.address}\n`;
            }
            if (isScheduled && scheduledTime) {
                mensaje += `*Programado:* ${scheduledTime}\n`;
            }

            mensaje += `🏍️ *Modalidad:* ${deliveryMode}\n`;
            mensaje += `💸 *Pago Por:* ${payMethod}\n`;

            const targetURL = `https://api.whatsapp.com/send?phone=${tel}&text=${encodeURIComponent(mensaje)}`;
            console.log("Despachando Enlace...");
            window.location.href = targetURL;
        } catch (err) {
            console.error("Link Parser Fallo", err);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity"
                onClick={onClose}
            />

            {/* Sidebar Modal */}
            <aside className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-slate-50 shadow-2xl z-50 animate-slide-in-right flex flex-col">

                {/* Header */}
                <header className="flex items-center justify-between p-6 bg-white border-b border-slate-200 shrink-0 shadow-sm z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                            <ShoppingBag className="w-5 h-5 text-red-600" />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900">Tu Pedido</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-8 scroll-smooth pb-44">

                    {/* Empty State */}
                    {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-40 text-slate-400">
                            <ShoppingBag className="w-16 h-16 mb-4 opacity-50" />
                            <p className="font-medium text-lg">Tu carrito está vacío</p>
                        </div>
                    ) : (
                        /* Product List Minimalist */
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center gap-2 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
                                    <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0">
                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    </div>

                                    {/* Item Row Layout Update en el array .map(item) de Cart */}
                                    <div className="flex flex-col flex-1 pl-3">
                                        <span className="text-sm font-bold text-slate-800 leading-tight mb-1">{item.name}</span>
                                        <span className="text-[11px] text-slate-500 font-medium"> ${(item.price).toFixed(2)} c/u</span>
                                    </div>

                                    {/* UI Multiplicador con Interacciones y Boton Papelera juntos a la derecha */}
                                    <div className="flex flex-col items-end gap-2 ml-auto">
                                        <div className="flex items-center gap-1.5 bg-slate-100 rounded-md border border-slate-200">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 hover:bg-slate-200 rounded-l-md text-slate-600 font-bold active:scale-95 transition">-</button>
                                            <span className="text-xs font-bold text-slate-900 w-4 text-center select-none">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 hover:bg-slate-200 rounded-r-md text-slate-600 font-bold active:scale-95 transition">+</button>
                                        </div>
                                        <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-400 hover:text-red-600 font-semibold px-1 underline transition flex items-center"><Trash2 className="w-4 h-4 mr-1" /></button>
                                    </div>

                                </div>
                            ))}
                        </div>
                    )}

                    {cart.length > 0 && (
                        <>
                            {/* Delivery/Scheduling Panel */}
                            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-5">
                                {/* Mode Switch */}
                                <div className="flex bg-slate-100 p-1.5 rounded-2xl">
                                    <button
                                        onClick={() => setDeliveryMode('Delivery')}
                                        className={`flex-1 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${deliveryMode === 'Delivery' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                    >
                                        <MapPin className="w-4 h-4" /> Delivery
                                    </button>
                                    <button
                                        onClick={() => setDeliveryMode('Retiro')}
                                        className={`flex-1 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${deliveryMode === 'Retiro' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                    >
                                        <Store className="w-4 h-4" /> Retiro
                                    </button>
                                </div>

                                {/* Customer Forms */}
                                <div className="space-y-3">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Nombre del Cliente"
                                            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-slate-900 bg-white placeholder-slate-400"
                                        />
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Phone className="h-5 w-5 text-slate-400" />
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Teléfono (Ej. 0414...)"
                                            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-slate-900 bg-white placeholder-slate-400"
                                        />
                                    </div>

                                    {deliveryMode === 'Delivery' && (
                                        <div className="relative">
                                            <div className="absolute top-3 left-3 pointer-events-none">
                                                <MapPin className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <textarea
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                placeholder="Dirección exacta de entrega..."
                                                rows={2}
                                                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500 transition-all resize-none text-slate-900 bg-white placeholder-slate-400"
                                            ></textarea>
                                        </div>
                                    )}
                                </div>

                                {/* Schedule Toggle */}
                                <div className="pt-2 border-t border-slate-100">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative">
                                            <input type="checkbox" className="sr-only" checked={isScheduled} onChange={() => setIsScheduled(!isScheduled)} />
                                            <div className={`block w-10 h-6 rounded-full transition-colors ${isScheduled ? 'bg-red-600' : 'bg-slate-300'}`}></div>
                                            <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${isScheduled ? 'translate-x-4' : ''}`}></div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                                            <Clock className="w-4 h-4 text-slate-400" /> Programar Pedido
                                        </div>
                                    </label>

                                    {isScheduled && (
                                        <div className="mt-3 animate-fade-in">
                                            <input
                                                type="time"
                                                value={scheduledTime}
                                                onChange={(e) => setScheduledTime(e.target.value)}
                                                className="w-full px-4 py-3 bg-red-50 border border-red-100 text-slate-900 bg-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-red-500 rounded-xl text-sm font-bold"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Payment Mode Panel */}
                            <div className="space-y-4">
                                <h3 className="font-bold text-slate-900 pl-1 text-lg">Método de Pago</h3>
                                <div className="grid grid-cols-3 gap-2">
                                    <button
                                        onClick={() => setPayMethod('Pago Móvil')}
                                        className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all gap-2 ${payMethod === 'Pago Móvil' ? 'border-red-600 bg-red-50 text-red-700' : 'border-slate-100 bg-white text-slate-500 hover:bg-slate-50 hover:border-slate-200'}`}
                                    >
                                        <Smartphone className="w-6 h-6" />
                                        <span className="text-xs font-bold">Pago Móvil</span>
                                    </button>
                                    <button
                                        onClick={() => setPayMethod('Zelle')}
                                        className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all gap-2 ${payMethod === 'Zelle' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-100 bg-white text-slate-500 hover:bg-slate-50 hover:border-slate-200'}`}
                                    >
                                        <DollarSign className="w-6 h-6" />
                                        <span className="text-xs font-bold">Zelle</span>
                                    </button>
                                    <button
                                        onClick={() => setPayMethod('Efectivo')}
                                        className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all gap-2 ${payMethod === 'Efectivo' ? 'border-green-600 bg-green-50 text-green-700' : 'border-slate-100 bg-white text-slate-500 hover:bg-slate-50 hover:border-slate-200'}`}
                                    >
                                        <Wallet className="w-6 h-6" />
                                        <span className="text-xs font-bold">Efectivo</span>
                                    </button>
                                </div>

                                {payMethod === 'Pago Móvil' && (
                                    <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 animate-fade-in space-y-3">
                                        <div className="text-xs text-blue-900 border-l-4 border-blue-600 pl-3 font-medium space-y-1">
                                            <p>Banco: <strong className="font-bold">Bancamiga (0172)</strong></p>
                                            <p>CI: <strong className="font-bold">25.845.201</strong></p>
                                            <p>Telf: <strong className="font-bold">0414-792-70-59</strong></p>
                                        </div>
                                    </div>
                                )}
                                {payMethod === 'Zelle' && (
                                    <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 animate-fade-in space-y-3">
                                        <div className="text-xs text-indigo-900 border-l-4 border-indigo-600 pl-3 font-medium space-y-1">
                                            <p>Email: <strong className="font-bold">pollosluigi@gmail.com</strong></p>
                                            <p>Titular: Luis Gonzalez</p>
                                        </div>
                                    </div>
                                )}
                                {payMethod === 'Efectivo' && (
                                    <div className="bg-green-50 p-4 rounded-2xl border border-green-100 animate-fade-in">
                                        <p className="text-xs text-green-800 font-medium">Por favor indica si necesitas vuelto al momento de que te contactemos para confirmar.</p>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>

                {/* FOOTER CHECKOUT FIJO: Usando display USD e INCLUYENDO Total Bolivares según Task 5*/}
                <div className="absolute bottom-0 left-0 w-full bg-white p-4 border-t border-slate-200 shadow-[0_-5px_40px_rgba(0,0,0,0.15)] z-20">
                    <button
                        onClick={() => {
                            if (cart.length === 0 || !formData.name || !formData.phone || (deliveryMode === 'Delivery' && !formData.address)) {
                                alert("Por favor completa los datos de entrega (Nombre y Teléfono) antes de confirmar el pedido.");
                                return;
                            }
                            generarPedido();
                        }}
                        className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white rounded-2xl py-3 px-5 flex flex-col items-center justify-center shadow-lg shadow-red-900/30 transition-transform active:scale-[0.98]"
                    >
                        <div className="w-full flex items-center justify-between font-bold text-lg mb-0.5">
                            <span>Confirmar Pedido</span>
                            <div className="bg-red-800/40 px-2 rounded-lg">${totalPrice.toFixed(2)}</div>
                        </div>
                        <div className="text-[11px] font-semibold text-red-200/90 tracking-wide">
                            Total Dólar Referencial ~ Bs. {(totalPrice * (exchangeRate || 50.00)).toFixed(2)}
                        </div>
                    </button>
                </div>
            </aside>

            <style jsx global>{`
                @keyframes slide-in-right {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
                .animate-slide-in-right {
                    animation: slide-in-right 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.2s ease-out;
                }
            `}</style>
        </>
    );
}
