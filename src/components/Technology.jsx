import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const materials = [
  {
    number: '01',
    name: 'Carbon Fiber',
    stat: '30% lighter',
    description:
      'Aerospace-grade carbon layup delivers explosive stiffness-to-weight ratio, transferring every joule of energy directly into the ball.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-accent">
        <path d="M4 20 L20 4 L36 20 L20 36 Z" />
        <path d="M12 20 L20 12 L28 20 L20 28 Z" />
        <circle cx="20" cy="20" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    number: '02',
    name: 'String Bed',
    stat: '16x19 pattern',
    description:
      'Open string pattern engineered for maximum dwell time and spin generation. Polyester mains paired with natural gut crosses.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-accent">
        <line x1="8" y1="4" x2="8" y2="36" />
        <line x1="16" y1="4" x2="16" y2="36" />
        <line x1="24" y1="4" x2="24" y2="36" />
        <line x1="32" y1="4" x2="32" y2="36" />
        <line x1="4" y1="10" x2="36" y2="10" />
        <line x1="4" y1="18" x2="36" y2="18" />
        <line x1="4" y1="26" x2="36" y2="26" />
        <line x1="4" y1="34" x2="36" y2="34" />
      </svg>
    ),
  },
  {
    number: '03',
    name: 'Grip System',
    stat: '4⅜" ergonomic',
    description:
      'Multi-layer synthetic overgrip with moisture-wicking channels. Tacky polymer surface maintains contact in high-sweat conditions.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-accent">
        <rect x="14" y="4" width="12" height="32" rx="6" />
        <line x1="14" y1="14" x2="26" y2="14" />
        <line x1="14" y1="20" x2="26" y2="20" />
        <line x1="14" y1="26" x2="26" y2="26" />
      </svg>
    ),
  },
  {
    number: '04',
    name: 'Vibration Dampener',
    stat: '-42% vibration',
    description:
      'SBR rubber insert at the throat absorbs off-center shock, protecting the arm while preserving the pure feedback of a centered strike.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-accent">
        <path d="M8 20 Q14 8 20 20 Q26 32 32 20" />
        <path d="M4 20 Q10 4 20 20 Q30 36 36 20" strokeOpacity="0.4" />
      </svg>
    ),
  },
]

export default function Technology() {
  const sectionRef = useRef()
  const headingRef = useRef()
  const labelRef = useRef()
  const dividerRef = useRef()
  const cardRefs = useRef([])
  const featureRef = useRef()

  useGSAP(() => {
    gsap.from([labelRef.current, headingRef.current], {
      opacity: 0,
      y: 28,
      stagger: 0.15,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play reverse play reverse',
      },
    })

    gsap.from(dividerRef.current, {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 1.0,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: dividerRef.current,
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      },
    })

    gsap.from(cardRefs.current, {
      opacity: 0,
      y: 50,
      stagger: 0.13,
      duration: 0.65,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: dividerRef.current,
        start: 'top 70%',
        toggleActions: 'play reverse play reverse',
      },
    })

    gsap.from(featureRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: featureRef.current,
        start: 'top 80%',
        end: 'bottom 30%',
        toggleActions: 'play reverse play reverse',
      },
    })
  }, { scope: sectionRef })

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="relative z-10 py-28 overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-heading text-[20vw] text-text/2 leading-none whitespace-nowrap">
          CARBON
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-10 md:px-16">

        <p ref={labelRef} className="font-mono text-accent text-xs tracking-[0.35em] uppercase mb-3 flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-accent" />
          Materials &amp; Construction
        </p>
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-heading mb-14">
          Engineered to <span className="text-accent">Win</span>
        </h2>

        <div ref={dividerRef} className="w-full h-px bg-accent/30 mb-14" />

        {/*4 column material grid*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {materials.map((m, i) => (
            <div
              key={m.name}
              ref={el => cardRefs.current[i] = el}
              className="relative flex flex-col gap-5 px-8 py-6 first:pl-0 last:pr-0
                         border-r border-secondary/20 last:border-r-0"
            >
              <span className="absolute top-2 right-4 font-heading text-6xl text-text/5 select-none leading-none">
                {m.number}
              </span>

              {m.icon}

              <h3 className="font-heading text-xl text-text leading-tight">
                {m.name}
              </h3>

              <p className="text-muted text-sm font-sub leading-relaxed flex-1">
                {m.description}
              </p>

              <div className="inline-flex items-center gap-2 mt-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="font-mono text-accent text-xs">{m.stat}</span>
              </div>
            </div>
          ))}
        </div>

        {/*Full-width featured callout panel*/}
        <div ref={featureRef} className="mt-20 relative overflow-hidden rounded-lg border border-glass-border bg-glass backdrop-blur-md p-10 md:p-14">

          <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4">
                Signature Material
              </p>
              <h3 className="font-heading text-3xl md:text-4xl mb-5">
                Carbon Fiber<br />
                <span className="text-accent">Layup Technology</span>
              </h3>
              <p className="text-muted font-sub text-sm leading-relaxed">
                Each frame begins as a series of unidirectional carbon sheets, hand-laid at opposing angles to eliminate torsional flex.
                The result is a frame that resists twisting on off-center hits while remaining supple enough for arm-friendly feedback.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '30%', label: 'Lighter vs Aluminium' },
                { value: '3x', label: 'Stiffer Under Load' },
                { value: '12', label: 'Carbon Sheet Layers' },
                { value: '0.4mm', label: 'Per-Layer Thickness' },
              ].map(({ value, label }) => (
                <div key={label} className="border border-glass-border rounded-lg p-5 bg-bg/40">
                  <div className="font-heading text-3xl text-accent mb-1">{value}</div>
                  <div className="font-mono text-xs text-secondary tracking-wide uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}