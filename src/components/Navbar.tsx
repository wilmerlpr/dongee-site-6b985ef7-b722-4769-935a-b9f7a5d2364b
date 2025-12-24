import { Link } from 'react-router-dom';
import { Menu, Milk } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ 
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-accent/10 p-2 rounded-xl group-hover:bg-accent/20 transition-colors">
              <Milk className="h-6 w-6 text-accent" />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight text-primary">
              La Campesina
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-secondary hover:text-accent transition-colors">Inicio</Link>
            <Link to="/producto" className="text-sm font-medium text-secondary hover:text-accent transition-colors">Producto</Link>
            <Link to="/nosotros/vision" className="text-sm font-medium text-secondary hover:text-accent transition-colors">Visión</Link>
            <a href="#contacto" className="text-sm font-medium text-secondary hover:text-accent transition-colors">Contacto</a>
            
            <Link 
              to="/producto"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-accent transition-all hover:shadow-glow transform hover:-translate-y-0.5"
            >
              Comprar Ahora
            </Link>
          </div>

          <button className="md:hidden p-2 text-primary">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}