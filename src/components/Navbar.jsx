import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-[#0B0B12]/60 border-b border-white/20 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
            <span className="font-semibold tracking-tight text-slate-900 dark:text-white">Wolftech Technologies</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => scrollTo('services')} className="text-slate-700 dark:text-slate-200 hover:text-purple-600 transition-colors">Services</button>
            <button onClick={() => scrollTo('contact')} className="text-slate-700 dark:text-slate-200 hover:text-purple-600 transition-colors">Contact</button>
            <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-white shadow-sm shadow-purple-600/30 hover:brightness-110 transition">Start a Project</a>
          </nav>
          <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/20 dark:border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3">
            <button onClick={() => scrollTo('services')} className="text-left py-2">Services</button>
            <button onClick={() => scrollTo('contact')} className="text-left py-2">Contact</button>
            <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-white shadow-sm shadow-purple-600/30">Start a Project</a>
          </div>
        </div>
      )}
    </header>
  );
}
