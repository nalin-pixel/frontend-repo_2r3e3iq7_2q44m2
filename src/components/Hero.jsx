import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 lg:pt-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/10 to-orange-400/10 blur-3xl pointer-events-none" />
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 min-h-[70vh] items-center">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur-md">Jaipur • Rajasthan • India</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Wolftech Technologies
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              We craft advanced digital products and intelligent services — from cloud-native platforms to AI-powered apps. Futuristic, not sci‑fi. Practical, measurable impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-white shadow-lg shadow-purple-600/30 hover:brightness-110 transition">
                Start a Project <ArrowRight className="h-4 w-4"/>
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full px-5 py-3 border border-white/20 bg-white/10 text-white hover:bg-white/20 transition">
                Explore Services
              </a>
            </div>
          </div>
          <div className="lg:col-span-6" />
        </div>
      </div>
    </section>
  );
}
