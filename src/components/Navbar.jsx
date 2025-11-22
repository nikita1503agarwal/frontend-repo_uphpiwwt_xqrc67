import { Menu, Sparkles } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur-md shadow-[0_0_60px_-10px_rgba(168,85,247,0.35)]">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-600 shadow-[0_0_30px_rgba(168,85,247,0.9)] grid place-items-center text-white">
                <Sparkles size={18} />
              </div>
              <span className="text-xl font-semibold tracking-wider text-white/90">
                Job Guru
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a className="text-white/70 hover:text-white transition-colors" href="#features">Features</a>
              <a className="text-white/70 hover:text-white transition-colors" href="#roles">Roles</a>
              <a className="text-white/70 hover:text-white transition-colors" href="#pricing">Pricing</a>
              <a className="text-white/70 hover:text-white transition-colors" href="#contact">Contact</a>
              <button className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-2 font-medium text-white shadow-[0_0_30px_rgba(168,85,247,0.6)] ring-1 ring-white/10 transition-transform hover:scale-[1.03]">
                Get Started
              </button>
            </nav>
            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
