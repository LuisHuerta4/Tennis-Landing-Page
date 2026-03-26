export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-5 flex items-center justify-between bg-bg/80 backdrop-blur-md border-b border-glass-border">
      <div className="font-heading text-xl tracking-wider uppercase">
        <span className="text-accent">W</span>ilson
      </div>
      <ul className="hidden md:flex gap-8 text-sm font-sub text-muted">
        <li><a href="#hero" className="hover:text-accent transition-colors">Home</a></li>
        <li><a href="#features" className="hover:text-accent transition-colors">Features</a></li>
        <li><a href="#collection" className="hover:text-accent transition-colors">Collection</a></li>
      </ul>
      <button className="px-5 py-2 text-sm font-mono bg-accent text-bg rounded hover:brightness-110 transition">
        Shop Now
      </button>
    </nav>
  )
}