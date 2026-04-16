import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Hero({ canPlay = false }) {
  const sectionRef = useRef()
  const labelRef = useRef()
  const line1Ref = useRef()
  const line2Ref = useRef()
  const subRef = useRef()
  const btnsRef = useRef()
  const shapesRef = useRef()

  useGSAP(() => {
    const animated = [
      ...Array.from(shapesRef.current.children),
      labelRef.current,
      line1Ref.current,
      line2Ref.current,
      subRef.current,
      btnsRef.current,
    ]

    if (!canPlay) {
      gsap.set(animated, { opacity: 0 })
      return
    }

    gsap.set(animated, { clearProps: 'all' })

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from(shapesRef.current.children, {
      opacity: 0,
      scale: 0.4,
      stagger: 0.12,
      duration: 1.2,
      ease: 'power2.out',
    }, 0)

    tl.from(labelRef.current, { opacity: 0, y: 20, duration: 0.6 }, 0.3)

    tl.from([line1Ref.current, line2Ref.current], {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      duration: 0.9,
    }, 0.5)

    tl.from(subRef.current, { opacity: 0, y: 24, duration: 0.7 }, 0.95)
    tl.from(btnsRef.current, { opacity: 0, y: 20, duration: 0.6 }, 1.1)
  }, { scope: sectionRef, dependencies: [canPlay] })

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="h-screen relative z-10 overflow-hidden flex items-center"
    >
      <div className="absolute inset-y-0 left-0 w-[42%] bg-accent/2 border-l border-accent/10 pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-150 h-150 rounded-full bg-accent/8 blur-[120px] pointer-events-none" />

      {/*Geometric decorations*/}
      <div ref={shapesRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-[10%] w-40 h-40 border border-accent/20 rotate-12" />
        <div className="absolute top-28 right-[14%] w-16 h-16 bg-accent/8 rotate-45" />
        <div className="absolute bottom-40 right-[38%] w-6 h-6 bg-accent/40 rotate-12" />
        <div
          className="absolute bottom-28 left-[42%]"
          style={{
            width: 0,
            height: 0,
            borderLeft: '18px solid transparent',
            borderRight: '18px solid transparent',
            borderBottom: '32px solid rgba(115,206,68,0.18)',
          }}
        />
        <div className="absolute top-1/2 left-0 w-24 h-px bg-accent/30" />
        <div className="absolute top-32 left-[44%] grid grid-cols-3 gap-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-accent/30" />
          ))}
        </div>
        <div className="absolute top-12 right-[42%] w-8 h-8 border-t-2 border-r-2 border-accent/40" />
        <div className="absolute bottom-24 right-[6%] w-4 h-4 border border-accent/30 rotate-45" />
      </div>

      {/*Main content*/}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-10 md:px-16 flex flex-col items-start">
        <p
          ref={labelRef}
          className="font-mono text-accent text-xs tracking-[0.35em] uppercase mb-6 flex items-center gap-3"
        >
          <span className="inline-block w-8 h-px bg-accent" />
          Wilson Performance Series
        </p>

        <h1 className="font-heading leading-[0.9] mb-8">
          <span
            ref={line1Ref}
            className="block text-6xl md:text-8xl lg:text-[9rem] text-text"
          >
            Precision
          </span>
          <span
            ref={line2Ref}
            className="block text-6xl md:text-8xl lg:text-[9rem] text-accent"
            style={{ WebkitTextStroke: '1px rgba(115,206,68,0.4)' }}
          >
            Under Tension
          </span>
        </h1>

        <p
          ref={subRef}
          className="max-w-md text-muted text-base font-sub leading-relaxed mb-10 border-l-2 border-accent/40 pl-4"
        >
          Explore the next generation of Wilson performance.<br />
          Engineered for power, refined for control.
        </p>

        <div ref={btnsRef} className="flex gap-4 flex-wrap">
          <button className="px-8 py-3 bg-accent text-bg font-mono text-sm rounded hover:brightness-110 transition-all">
            Explore Collection
          </button>
          <button className="px-8 py-3 border border-secondary text-muted font-mono text-sm rounded hover:border-accent hover:text-accent transition-all">
            Learn More
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted text-xs font-mono animate-bounce">
        <span>Scroll</span>
        <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  )
}