export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-center justify-center relative z-10 text-center px-4"
    >
      <p className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-4">
        Wilson Performance Series
      </p>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading leading-none">
        Precision
        <br />
        <span className="text-accent">Under Tension</span>
      </h1>
      <p className="mt-6 max-w-xl text-muted text-base md:text-lg font-sub leading-relaxed">
        Explore the next generation of Wilson performance. Engineered for power, refined for control.
      </p>
      <div className="mt-10 flex gap-4">
        <button className="px-8 py-3 bg-accent text-bg font-mono text-sm rounded hover:brightness-110 transition">
          Explore Collection
        </button>
        <button className="px-8 py-3 border border-secondary text-muted font-mono text-sm rounded hover:border-accent hover:text-accent transition">
          Learn More
        </button>
      </div>
      <div className="absolute bottom-10 flex flex-col items-center text-muted text-xs font-mono animate-bounce">
        <span>Scroll</span>
        <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  )
}