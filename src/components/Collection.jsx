const rackets = [
  {
    name: 'Blade 100',
    weight: '300g',
    balance: '32 cm',
    tagline: 'The Feel Racket.',
    imageBefore: '/images/racket_blade100_before.webp',
    imageAfter: '/images/racket_blade100_after.webp',
  },
  {
    name: 'Pro Staff One',
    weight: '331g',
    balance: '30.5cm',
    tagline: 'Precision in every swing.',
    imageBefore: '/images/racket_one95_before.webp',
    imageAfter: '/images/racket_one95_after.webp',
  },
  {
    name: 'Ultra 100',
    weight: '300g',
    balance: '33.0cm',
    tagline: 'Power without compromise.',
    imageBefore: '/images/racket_ultra100_before.webp',
    imageAfter: '/images/racket_ultra100_after.webp',
  },
  {
    name: 'Intrigue Sakura',
    weight: '264g',
    balance: '33cm',
    tagline: 'Flex meets stability.',
    imageBefore: '/images/racket_sakura_before.webp',
    imageAfter: '/images/racket_sakura_after.webp',
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
            className="group relative bg-glass backdrop-blur-md border border-glass-border rounded-lg overflow-hidden text-center hover:border-accent/40 transition-all"
          >
            <img
              src={racket.imageBefore}
              alt={racket.name}
              className="absolute bottom-0 left-0 right-0 z-0 w-full h-3/5 object-contain object-bottom transition-all duration-500 ease-out opacity-100 group-hover:opacity-0"
            />

            <img
              src={racket.imageAfter}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 z-0 w-full h-full object-contain p-2 scale-110 opacity-0 transition-all duration-500 ease-out group-hover:object-cover group-hover:p-0 group-hover:scale-125 group-hover:opacity-40"
            />

            <div className="absolute inset-0 z-10 bg-linear-to-t from-bg via-bg/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-20 h-full flex flex-col p-6">
              <h3 className="text-xl font-heading mb-1">{racket.name}</h3>
              <p className="text-muted text-sm font-sub mb-2">{racket.tagline}</p>
              <div className="flex justify-center gap-4 text-xs font-mono text-secondary">
                <span>{racket.weight}</span>
                <span className="text-accent">|</span>
                <span>{racket.balance}</span>
              </div>
              <div className="mt-auto pt-48">
                <button className="w-full py-2 border border-secondary text-muted text-sm font-mono rounded group-hover:border-accent group-hover:text-accent transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}