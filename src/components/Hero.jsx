import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function NeonGlow() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Bottom purple glow */}
      <div className="absolute inset-x-0 bottom-0 h-[45%]">
        <div className="absolute inset-0 blur-3xl opacity-70" style={{
          background: 'radial-gradient(50% 60% at 50% 100%, rgba(168,85,247,0.55) 0%, rgba(88,28,135,0.35) 35%, rgba(0,0,0,0) 70%)'
        }} />
      </div>

      {/* Soft vignette */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(120% 80% at 50% 10%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.9) 100%)'
      }} />

      {/* Subtle vertical beams */}
      <div className="absolute inset-0 opacity-60 mix-blend-screen">
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-purple-400/50 to-transparent" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-fuchsia-400/40 to-transparent" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-purple-400/50 to-transparent" />
      </div>
    </div>
  )
}

function Smoke() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Layered animated smoke using gradients */}
      <motion.div
        className="absolute -bottom-32 left-0 right-0 h-72"
        initial={{ opacity: 0.4, y: 0 }}
        animate={{ opacity: [0.35, 0.6, 0.35], y: [-10, -20, -10] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(60% 60% at 50% 100%, rgba(110,21,147,0.55) 0%, rgba(168,85,247,0.28) 30%, rgba(0,0,0,0) 70%)'
        }}
      />
      <motion.div
        className="absolute -bottom-28 -left-20 h-72 w-[140%] blur-2xl"
        initial={{ opacity: 0.25, x: -10 }}
        animate={{ opacity: [0.2, 0.35, 0.2], x: [0, 10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(45% 50% at 30% 80%, rgba(124,58,237,0.45) 0%, rgba(147,51,234,0.25) 35%, rgba(0,0,0,0) 70%)'
        }}
      />
      <motion.div
        className="absolute -bottom-24 right-0 h-64 w-full blur-2xl"
        initial={{ opacity: 0.3, x: 10 }}
        animate={{ opacity: [0.25, 0.5, 0.25], x: [0, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(60% 60% at 70% 90%, rgba(192,38,211,0.35) 0%, rgba(168,85,247,0.2) 40%, rgba(0,0,0,0) 70%)'
        }}
      />
    </div>
  )
}

function Title() {
  return (
    <div className="relative z-20 mx-auto max-w-5xl px-6 pt-28 pb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-block rounded-2xl border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-purple-200/80"
      >
        Spiritual tech • Futuristic careers
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="mt-6 bg-gradient-to-b from-purple-200 via-purple-100 to-purple-400/80 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.45)] sm:text-7xl"
      >
        JOB GURU
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2 }}
        className="relative mx-auto mt-4 h-6 w-80"
      >
        {/* Smoke trail rising from the letters */}
        <div className="absolute inset-x-0 -top-3 mx-auto h-10 w-full blur-xl opacity-70" style={{
          background: 'radial-gradient(60% 100% at 50% 100%, rgba(203,166,255,0.15) 5%, rgba(216,180,254,0.08) 40%, rgba(0,0,0,0) 80%)'
        }} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mx-auto mt-6 max-w-2xl text-lg text-purple-100/80"
      >
        A premium portal where devotion meets ambition. Discover roles, mentors and opportunities illuminated by neon wisdom.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-10 flex items-center justify-center gap-4"
      >
        <button className="group relative overflow-hidden rounded-2xl border border-purple-400/30 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(168,85,247,0.7)]">
          <span className="relative z-10">Explore Roles</span>
          <span className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </button>
        <button className="rounded-2xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors">
          Watch Demo
        </button>
      </motion.div>
    </div>
  )
}

function SplineCover() {
  return (
    <div className="absolute inset-0">
      <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black">
      {/* 3D immersive background */}
      <SplineCover />

      {/* Overlays & effects */}
      <NeonGlow />
      <Smoke />

      {/* Content */}
      <div className="relative z-10">
        <Title />
      </div>

      {/* Subtle glass gradient on top to prevent too bright highlights from blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    </section>
  )
}

export default Hero
