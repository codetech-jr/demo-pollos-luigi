'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import CartSidebar from '@/components/CartSidebar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>
            <Navbar onOpenCart={() => setIsCartOpen(true)} />
            <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            {children}
        </>
    );
}
