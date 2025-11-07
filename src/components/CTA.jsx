import { Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-purple-900/50 via-blue-900/40 to-slate-900/30 p-8 sm:p-12 text-center backdrop-blur-xl shadow-2xl">
          <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/20">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-white">Build the future with us</h3>
          <p className="mt-2 text-slate-200/90">Tell us about your idea. We’ll turn it into a product users love.</p>
          <form className="mt-8 grid gap-4 sm:grid-cols-3 text-left">
            <input type="text" placeholder="Your name" className="col-span-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500" required/>
            <input type="email" placeholder="Email" className="col-span-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500" required/>
            <input type="text" placeholder="Company" className="col-span-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
            <textarea placeholder="Project brief" rows="4" className="sm:col-span-3 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <button type="submit" className="sm:col-span-3 inline-flex justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white font-medium shadow-lg shadow-purple-600/30 hover:brightness-110 transition">Request Consultation</button>
          </form>
        </div>
      </div>
    </section>
  );
}
