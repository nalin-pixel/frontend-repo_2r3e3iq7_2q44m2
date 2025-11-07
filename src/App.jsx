import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B12] text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Wolftech Technologies, Jaipur • Rajasthan</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
