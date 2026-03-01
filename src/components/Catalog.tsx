'use client';

import { Product } from '@/store/cartStore';
import { PackageOpen } from 'lucide-react';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

interface CatalogProps {
    products: Product[];
}

export default function Catalog({ products }: CatalogProps) {
    if (!products || products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
                <div className="w-24 h-24 mb-6 text-slate-200 bg-slate-50 flex items-center justify-center rounded-3xl">
                    <PackageOpen className="w-12 h-12 text-slate-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">No encontramos resultados</h3>
                <p className="text-slate-500 max-w-md">
                    Intenta buscar con otros términos o cambia la categoría seleccionada para ver más opciones deliciosas.
                </p>
            </div>
        );
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
            {products.map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                    <ProductCard product={product} />
                </motion.div>
            ))}
        </motion.div>
    );
}
