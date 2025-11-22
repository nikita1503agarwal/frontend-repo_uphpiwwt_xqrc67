function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-purple-100/70">© {new Date().getFullYear()} Job Guru. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-purple-100/70">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
