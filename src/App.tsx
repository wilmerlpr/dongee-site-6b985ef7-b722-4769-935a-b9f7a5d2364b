import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import VisionPage from './pages/VisionPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-accent selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/producto" element={ <ProductPage /> } />
        <Route path="/nosotros/vision" element={ <VisionPage /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;