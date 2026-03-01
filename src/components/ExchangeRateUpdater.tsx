'use client';

import { useEffect } from 'react';
import { useCartStore } from '@/store/cartStore';

export default function ExchangeRateUpdater({ serverRate }: { serverRate: number }) {
    const setExchangeRate = useCartStore((state) => state.setExchangeRate);

    useEffect(() => {
        if (serverRate > 0) {
            setExchangeRate(serverRate);
        }
    }, [serverRate, setExchangeRate]);

    return null;
}
