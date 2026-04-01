export default function Footer() {
  return (
    <footer id="footer" className="relative z-10 border-t border-glass-border py-12 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-heading text-xl tracking-wider uppercase">
          <span className="text-accent">W</span>ilson
        </div>
        <ul className="flex gap-8 text-sm font-sub text-muted">
          <li><a href="#hero" className="hover:text-accent transition-colors">Home</a></li>
          <li><a href="#features" className="hover:text-accent transition-colors">Features</a></li>
          <li><a href="#collection" className="hover:text-accent transition-colors">Collection</a></li>
        </ul>
        <p className="text-xs font-mono text-secondary">
          Personal project — not affiliated with Wilson Sporting Goods.
        </p>
      </div>
    </footer>
  )
}