const rackets = [
  {
    name: 'Blade 98',
    weight: '305g',
    balance: '32.5cm',
    tagline: 'The benchmark for control.',
  },
  {
    name: 'Pro Staff 97',
    weight: '315g',
    balance: '31.0cm',
    tagline: 'Precision in every swing.',
  },
  {
    name: 'Ultra 100',
    weight: '300g',
    balance: '33.0cm',
    tagline: 'Power without compromise.',
  },
  {
    name: 'Clash 100',
    weight: '295g',
    balance: '33.5cm',
    tagline: 'Flex meets stability.',
  },
]

export default function Collection() {
  return (
    <section
      id="collection"
      className="min-h-screen flex flex-col items-center justify-center relative z-10 py-24 px-4"
    >
      <p className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-3">
        The Lineup
      </p>
      <h2 className="text-4xl md:text-5xl font-heading text-center mb-16">
        Choose Your <span className="text-accent">Weapon</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {rackets.map((racket) => (
          <div
            key={racket.name}
            className="group bg-glass backdrop-blur-md border border-glass-border rounded-lg p-6 text-center hover:border-accent/40 transition-all"
          >
            <div className="h-48 flex items-center justify-center mb-6 rounded bg-bg/50">
              <span className="text-secondary text-xs font-mono">3D Model</span>
            </div>
            <h3 className="text-xl font-heading mb-1">{racket.name}</h3>
            <p className="text-muted text-sm font-sub mb-4">{racket.tagline}</p>
            <div className="flex justify-center gap-4 text-xs font-mono text-secondary">
              <span>{racket.weight}</span>
              <span className="text-accent">|</span>
              <span>{racket.balance}</span>
            </div>
            <button className="mt-6 w-full py-2 border border-secondary text-muted text-sm font-mono rounded group-hover:border-accent group-hover:text-accent transition-colors">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}