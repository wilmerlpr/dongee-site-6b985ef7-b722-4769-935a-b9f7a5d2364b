import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex-grow">
      <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-surface pt-20">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-pulse" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-3xl mix-blend-multiply opacity-70" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-secondary">Disponible hoy fresco</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-primary font-serif">
                El arte del <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-600">
                  Queso Campesino
                </span>
              </h1>
              
              <p className="text-lg text-secondary max-w-lg leading-relaxed">
                Disfruta la pureza de la tradición. Queso fresco de libra, elaborado artesanalmente cada mañana para llevar la textura perfecta a tu mesa.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/producto"
                  className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-accent transition-all shadow-lg hover:shadow-glow transform hover:-translate-y-1"
                >
                  Ordenar Libra <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-4 px-6 py-4">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                       <div key={i} className="w-8 h-8 rounded-full border-2 border-surface bg-slate-200 flex items-center justify-center text-xs overflow-hidden">
                          <img src={`https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&q=80&w=2070`} alt="Client" className="w-full h-full object-cover" />
                       </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex text-yellow-400 mb-0.5">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                    <span className="font-semibold text-primary">+500 Clientes felices</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:h-[600px] w-full flex items-center justify-center">
               <div className="relative w-full aspect-square max-w-md lg:max-w-full">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-[3rem] transform rotate-6 scale-95"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&q=80&w=2070"
                    alt="Queso Campesino Premium"
                    className="relative w-full h-full object-cover rounded-[3rem] shadow-2xl z-10"
                  />
                  
                  {/* Floating Card */}
                  <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block max-w-xs animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="flex items-center gap-4">
                      <div className="bg-green-50 p-3 rounded-xl">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-secondary">Calidad Garantizada</p>
                        <p className="text-lg font-bold text-primary">100% Leche Fresca</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}