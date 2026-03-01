import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import MenuInterface from "@/components/MenuInterface";
import OrderSteps from "@/components/OrderSteps";
import InstagramSection from "@/components/InstagramSection";
import ExchangeRateUpdater from "@/components/ExchangeRateUpdater";
import Footer from "@/components/Footer";
import { Product } from "@/store/cartStore";

const pollosLuigiMenu: Product[] = [
  // --- POLLO BROASTER ---
  { id: "101", name: "2 Piezas a la Broaster", desc: "Muslo y cuadril con papas fritas y arepitas.", price: 7.00, image: "https://images.unsplash.com/photo-1626645738815-bfaeb3a0937a?q=80&w=800&auto=format&fit=crop", category: "Pollo a la Broaster" },
  { id: "102", name: "Medio Pollo (4 piezas)", desc: "Papas fritas y arepitas.", price: 11.00, image: "https://images.unsplash.com/photo-1626645738815-bfaeb3a0937a?q=80&w=800&auto=format&fit=crop", category: "Pollo a la Broaster" },
  { id: "103", name: "Medio Pollo Luigi Full", desc: "4 piezas con papas fritas, arepitas y ensalada rallada.", price: 12.00, image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=800&auto=format&fit=crop", category: "Pollo a la Broaster" },
  { id: "104", name: "1 Pollo a la Broaster", desc: "8 piezas de pollo crujiente, papas fritas y arepitas.", price: 18.00, image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=800&auto=format&fit=crop", category: "Pollo a la Broaster" },
  { id: "105", name: "1 Pollo Luigi Full", desc: "8 piezas, papas fritas, arepitas y ensalada rallada grande.", price: 19.00, image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=800&auto=format&fit=crop", category: "Pollo a la Broaster" },
  { id: "106", name: "1 Pollo Solo", desc: "8 deliciosas piezas de pollo broaster.", price: 17.00, image: "https://images.unsplash.com/photo-1626645738815-bfaeb3a0937a?q=80&w=800&auto=format&fit=crop", category: "Pollo a la Broaster" },

  // --- RACIONES ---
  { id: "201", name: "Ración Papas Fritas", desc: "Deliciosas papas a la francesa.", price: 3.50, image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=800&auto=format&fit=crop", category: "Raciones" },
  { id: "202", name: "Ensalada Rallada", desc: "La clásica y dulce coleslaw.", price: 3.50, image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=800&auto=format&fit=crop", category: "Raciones" },
  { id: "203", name: "Ración de Arepitas", desc: "Fritas y crujientes por fuera.", price: 2.50, image: "https://images.unsplash.com/photo-1615886989441-3e4299ecac3f?q=80&w=800&auto=format&fit=crop", category: "Raciones" },

  // --- COMBOS GENERALES ---
  { id: "301", name: "Combo Pollo Pizza", desc: "Medio Pollo Broaster (4pz) con papas fritas, ensalada + 1 Pizza M Primavera + 1 Refresco 1L.", price: 19.00, image: "https://images.unsplash.com/photo-1615886989441-3e4299ecac3f?q=80&w=800&auto=format&fit=crop", category: "Combos" },
  { id: "302", name: "Combo Pollo Full 8 Pzas", desc: "1 Pollo de 8 piezas, papas fritas, arepitas, ensalada rallada y 1 refresco de 1 Litro.", price: 20.00, image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=800&auto=format&fit=crop", category: "Combos" },
  { id: "303", name: "Combo Pizza 2", desc: "1 Pepperoni mediana (33cm) + 1 Primavera mediana (33cm) + Refresco 1L.", price: 14.50, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop", category: "Combos" },
  { id: "304", name: "Combo Pizza 4", desc: "1 Latina grande (40cm) + 1 Romana mediana (33cm) + 1 Refresco de 1L.", price: 21.00, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop", category: "Combos" },

  // --- PIZZAS (Ejemplos Mediana/Grande) ---
  { id: "401", name: "Pizza Margarita (Grande 40cm)", desc: "Salsa Nápoles y mucho Queso Mozzarella.", price: 8.00, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop", category: "Pizzas" },
  { id: "402", name: "Pizza Pepperoni (Mediana 33cm)", desc: "Salsa Nápoles, Queso Mozzarella y Pepperoni rebanado.", price: 6.00, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop", category: "Pizzas" },
  { id: "403", name: "Pizza Primavera (Grande 40cm)", desc: "Queso Mozzarella, jamón y maíz tierno.", price: 11.00, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop", category: "Pizzas" },
  { id: "404", name: "Pizza Romana (Mediana 33cm)", desc: "Salsa, mozzarella, champiñones y tocineta crocante.", price: 8.00, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop", category: "Pizzas" },
  { id: "405", name: "Pizza Cuatro Estaciones (Grande)", desc: "Salsa, queso, aceitunas negras, champiñones, tocineta, jamón.", price: 15.00, image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=800&auto=format&fit=crop", category: "Pizzas" },

  // --- BEBIDAS ---
  { id: "501", name: "Refresco de 1 Litro", desc: "Variedad de sabores (Coca Cola / Chinotto / Frescolita).", price: 2.00, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop", category: "Bebidas" },
  { id: "502", name: "Jugo Natural", desc: "Diferentes frutas tropicales del día.", price: 1.80, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=800&auto=format&fit=crop", category: "Bebidas" },
  { id: "503", name: "Café", desc: "Ideal para la tarde.", price: 1.50, image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop", category: "Bebidas" },
];

async function fetchBCVRate(): Promise<number> {
  try {
    // API estable que siempre responde en VZLA
    const res = await fetch('https://ve.dolarapi.com/v1/dolares/oficial', { cache: 'no-store' });
    if (!res.ok) return 50.00;
    const data = await res.json();
    return data.promedio || data.venta || 50.00; // Tolerancia a fallo
  } catch (error) {
    return 50.00; // Caída profunda fallback
  }
}

export default async function Home() {
  const tasaDelDia = await fetchBCVRate();

  return (
    <main className="min-h-screen">
      <ExchangeRateUpdater serverRate={tasaDelDia} />
      <Hero />
      <MenuInterface products={pollosLuigiMenu} />
      <PromoBanner />
      <OrderSteps />
      <InstagramSection />

      <Footer />
      <div className="fixed bottom-2 right-2 z-[90] text-[10px] font-mono text-slate-400 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800 pointer-events-none">
        Ref BCV: Bs. {tasaDelDia.toFixed(2)}
      </div>
    </main>
  );
}
