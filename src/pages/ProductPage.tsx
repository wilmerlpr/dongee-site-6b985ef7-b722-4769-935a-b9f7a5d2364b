import { useState } from 'react';
import { MessageCircle, Minus, Plus, Check, ShieldCheck } from 'lucide-react';

const PRICE_PER_UNIT = 12000;
const PHONE_NUMBER = "573000000000";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));
  const total = quantity * PRICE_PER_UNIT;

  const handleWhatsAppOrder = () => {
    const message = `Hola, deseo ordenar ${quantity} libra(s) de Queso Campesino Premium. Total: $${total.toLocaleString()}.`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main className="flex-grow py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Nuestro Único Producto</h2>
          <p className="text-secondary text-lg">Nos especializamos en una sola cosa para hacerla perfecta. Queso Campesino de libra, sin conservantes.</p>
        </div>

        <div className="bg-surface rounded-[3rem] p-8 md:p-12 shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Image Gallery Side */}
            <div className="space-y-6">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1552767059-ce182ead6c1b?q=80&w=2070&auto=format&fit=crop"
                  alt="Queso Campesino Detalle"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <p className="text-sm text-secondary uppercase tracking-wider font-semibold mb-1">Peso Neto</p>
                  <p className="text-xl font-bold text-primary">500g (1 Libra)</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <p className="text-sm text-secondary uppercase tracking-wider font-semibold mb-1">Textura</p>
                  <p className="text-xl font-bold text-primary">Suave y Húmeda</p>
                </div>
              </div>
            </div>

            {/* Details & Purchase Side */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-primary mb-2">Queso Campesino Fresco</h3>
                <div className="flex items-center gap-4 mb-6">
                   <span className="text-3xl font-serif text-accent font-bold">${PRICE_PER_UNIT.toLocaleString()}</span>
                   <span className="text-secondary text-sm bg-slate-100 px-3 py-1 rounded-full">Precio por libra</span>
                </div>
                <p className="text-secondary leading-relaxed mb-8">
                  Elaborado con leche fresca recolectada al amanecer. Nuestro proceso mantiene el suero natural, garantizando esa humedad característica que se deshace en la boca. Ideal para arepas, chocolate o tabla de quesos.
                </p>
                
                <ul className="space-y-3 mb-10">
                  {['100% Natural sin conservantes', 'Bajo en sal', 'Entrega inmediata', 'Empaque sellado'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-primary font-medium">
                      <span className="bg-green-100 text-green-600 p-1 rounded-full">
                        <Check className="w-4 h-4" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center bg-surface rounded-full p-1">
                    <button 
                      onClick={decrement}
                      className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-slate-100 transition shadow-sm"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                    <button 
                      onClick={increment}
                      className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-slate-800 transition shadow-sm"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex-grow w-full">
                    <button 
                      onClick={handleWhatsAppOrder}
                      className="w-full flex items-center justify-center gap-3 bg-accent hover:bg-blue-700 text-white py-4 px-8 rounded-2xl font-bold transition-all hover:shadow-glow transform active:scale-95"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Pedir ${total.toLocaleString()}</span>
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-secondary">
                  <ShieldCheck className="w-4 h-4" />
                  Compra segura vía WhatsApp
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}