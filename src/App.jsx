import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background base with subtle texture and deep vignette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(120% 80% at 50% -10%, rgba(16,0,28,0.9) 0%, rgba(0,0,0,1) 60%)'
        }} />
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '22px 22px'
        }} />
      </div>

      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
