const features = [
  {
    label: 'String Bed',
    stat: '16x19',
    description: 'Open string pattern for maximum spin potential and ball bite on every stroke.',
  },
  {
    label: 'Frame',
    stat: '98 sq in',
    description: 'Carbon fiber construction with optimized flex points for explosive power.',
  },
  {
    label: 'Grip',
    stat: 'L3 4⅜"',
    description: 'Ergonomic grip geometry with moisture-wicking synthetic overgrip.',
  },
  {
    label: 'Throat',
    stat: '22mm',
    description: 'Tapered throat bridge for aerodynamic stability through the swing path.',
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="min-h-screen flex flex-col items-center justify-center relative z-10 py-24 px-4"
    >
      <p className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-3">
        Engineered Details
      </p>
      <h2 className="text-4xl md:text-5xl font-heading text-center mb-16">
        Built to <span className="text-accent">Perform</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {features.map((feature) => (
          <div
            key={feature.label}
            className="bg-glass backdrop-blur-md border border-glass-border rounded-lg p-6 hover:border-accent/40 transition-colors"
          >
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="text-lg font-heading text-text">{feature.label}</h3>
              <span className="font-mono text-accent text-sm">{feature.stat}</span>
            </div>
            <p className="text-muted text-sm font-sub leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}