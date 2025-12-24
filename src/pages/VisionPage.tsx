import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VisionPage() {
  return (
    <main className="flex-grow py-24 bg-surface relative min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Volver al inicio</span>
        </Link>

        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
            Nuestra Visión
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            Llevar el sabor auténtico del campo a cada mesa, preservando la tradición artesanal en un mundo moderno.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Vision Content */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Un Futuro Saboroso
              </h2>
              <p className="text-secondary leading-relaxed mb-6">
                En La Campesina, soñamos con un mundo donde la calidad artesanal se una a la innovación sostenible. Queremos que cada libra de nuestro queso no solo deleite el paladar, sino que también cuente la historia de nuestra tierra y nuestras manos.
              </p>
              <ul className="space-y-3 text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-0.5">•</span>
                  Expandir nuestra tradición a nuevas comunidades
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-0.5">•</span>
                  Innovar en procesos ecológicos y responsables
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-0.5">•</span>
                  Ser el referente del queso campesino premium en Colombia
                </li>
              </ul>
            </div>
          </div>

          {/* Decorative Image */}
          <div className="relative h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-indigo-100 rounded-3xl blur-xl -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2070"
              alt="Visión de La Campesina"
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl max-w-md"
            />
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary to-accent text-white py-16 px-8 rounded-3xl text-center">
          <h3 className="text-3xl font-serif font-bold mb-4">
            "Del campo a tu corazón, con amor y tradición"
          </h3>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Nuestra visión es simple: hacer que cada bocado sea una celebración de la vida campesina.
          </p>
        </div>
      </div>
    </main>
  );
}