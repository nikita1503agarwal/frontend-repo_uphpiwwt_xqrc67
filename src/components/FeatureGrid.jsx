import { Shield, Sparkles, Wand2, Cpu, Stars, Bot } from 'lucide-react'

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-transform hover:scale-[1.02] hover:shadow-[0_0_50px_-10px_rgba(168,85,247,0.6)]">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-purple-500/10 to-fuchsia-500/10 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.8)]">
          <Icon size={22} />
        </div>
        <h3 className="text-lg font-semibold text-white/90">{title}</h3>
        <p className="mt-2 text-sm text-purple-100/80">{desc}</p>
      </div>
    </div>
  )
}

function FeatureGrid() {
  const features = [
    { icon: Stars, title: 'Neon Precision', desc: 'High-contrast UI with cinematic lighting and subtle reflections.' },
    { icon: Wand2, title: 'Bhakti + Tech', desc: 'A spiritual aesthetic infused with modern interfaces and symmetry.' },
    { icon: Cpu, title: 'Futuristic Engine', desc: 'Powered by immersive 3D and smooth motion for a premium feel.' },
    { icon: Bot, title: 'Guided Discovery', desc: 'Find roles and mentors through an enlightened guided flow.' },
    { icon: Shield, title: 'Trust & Clarity', desc: 'Glassmorphism surfaces that feel safe, secure, and balanced.' },
    { icon: Sparkles, title: 'Hyper Glow', desc: 'Purple neon accents and smoke-lit ambience for a dramatic vibe.' },
  ]

  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why it feels premium</h2>
        <p className="mt-3 text-purple-100/80">Every element is tuned for harmony — deep shadows, neon highlights, and balanced geometry.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} />
        ))}
      </div>
    </section>
  )
}

export default FeatureGrid
