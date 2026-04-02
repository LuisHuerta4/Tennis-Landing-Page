const features = [
  {
    label: 'String Bed',
    stat: '16x19',
    description: 'Open string pattern for maximum spin potential and ball bite on every stroke.',
    box: { top: '15%', left: '20%' },
    anchor: { x: '25%', y: '22%' },
    target: { x: '60%', y: '35%' },
  },
  {
    label: 'Frame',
    stat: '98 sq in',
    description: 'Carbon fiber construction with optimized flex points for explosive power.',
    box: { top: '20%', right: '4%' },
    anchor: { x: '88%', y: '25%' },
    target: { x: '81%', y: '40%' },
  },
  {
    label: 'Throat',
    stat: '22mm',
    description: 'Tapered throat bridge for aerodynamic stability through the swing path.',
    box: { top: '75%', right: '40%' },
    anchor: { x: '51%', y: '76%' },
    target: { x: '38%', y: '58%' },
  },
  {
    label: 'Grip',
    stat: 'L3 4⅜"',
    description: 'Ergonomic grip geometry with moisture-wicking synthetic overgrip.',
    box: { top: '40%', left: '10%' },
    anchor: { x: '18%', y: '45%' },
    target: { x: '30%', y: '60%' },
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="relative h-screen overflow-hidden z-10"
    >
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center z-20 pointer-events-none">
        <p className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-2">
          Engineered Details
        </p>
        <h2 className="text-4xl md:text-5xl font-heading">
          Built to <span className="text-accent">Perform</span>
        </h2>
      </div>

      {/* lines */}
      <svg
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {features.map((f) => (
          <g key={f.label} filter="url(#glow)">
            {/* line from anchor to target */}
            <line
              x1={f.anchor.x} y1={f.anchor.y}
              x2={f.target.x} y2={f.target.y}
              stroke="#73ce44"
              strokeWidth="2"
              strokeDasharray="6 4"
              strokeOpacity="0.9"
            />
            {/* target point */}
            <circle
              cx={f.target.x} cy={f.target.y}
              r="5"
              fill="#73ce44"
              fillOpacity="0.9"
            />
            {/* anchor point */}
            <circle
              cx={f.anchor.x} cy={f.anchor.y}
              r="4"
              fill="#73ce44"
              fillOpacity="0.6"
            />
          </g>
        ))}
      </svg>

      {/* features cards */}
      {features.map((f) => (
        <div
          key={f.label}
          className="absolute z-20 w-72"
          style={{
            top: f.box.top,
            bottom: f.box.bottom,
            left: f.box.left,
            right: f.box.right,
          }}
        >
          <div className="bg-glass backdrop-blur-md border border-glass-border rounded-lg p-6 hover:border-accent/40 transition-colors">
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="text-base font-heading text-text">{f.label}</h3>
              <span className="font-mono text-accent text-sm">{f.stat}</span>
            </div>
            <p className="text-muted text-sm font-sub leading-relaxed">
              {f.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}