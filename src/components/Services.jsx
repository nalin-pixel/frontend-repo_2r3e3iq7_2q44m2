import { Code, Cloud, Smartphone, BrainCircuit } from 'lucide-react';

const services = [
  {
    icon: <BrainCircuit className="h-6 w-6 text-purple-500" />,
    title: 'AI & Automation',
    desc: 'Conversational agents, computer vision, and workflow automation that scale your operations.'
  },
  {
    icon: <Cloud className="h-6 w-6 text-blue-500" />,
    title: 'Cloud & DevOps',
    desc: 'Modernize with cloud-native architectures, CI/CD, observability, and cost-optimized deployments.'
  },
  {
    icon: <Smartphone className="h-6 w-6 text-orange-500" />,
    title: 'Product Engineering',
    desc: 'Design and build robust web and mobile apps with world-class UX and performance.'
  },
  {
    icon: <Code className="h-6 w-6 text-emerald-500" />,
    title: 'APIs & Integrations',
    desc: 'Secure, scalable APIs and integrations connecting your tools and data seamlessly.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Services</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Pragmatic innovation delivered end-to-end.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10 transition shadow-lg">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/20">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
