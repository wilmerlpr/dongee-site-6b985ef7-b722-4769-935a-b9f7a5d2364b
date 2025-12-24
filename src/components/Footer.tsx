import { Milk, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
               <div className="bg-white/10 p-2 rounded-lg">
                  <Milk className="h-6 w-6 text-accent" />
               </div>
               <span className="text-xl font-serif font-bold">La Campesina</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Dedicados a traer el sabor auténtico del campo a la ciudad. Queso fresco, honesto y delicioso.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4 text-slate-400">
              <li>WhatsApp: +57 300 000 0000</li>
              <li>Email: pedidos@lacampesina.com</li>
              <li>Bogotá, Colombia</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Quesera La Campesina. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Diseñado con elegancia.</p>
        </div>
      </div>
    </footer>
  );
}