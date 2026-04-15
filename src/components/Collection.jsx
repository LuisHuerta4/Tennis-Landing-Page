import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

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

const SLANT = 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)'

export default function Collection() {
  const sectionRef = useRef()
  const headingRef = useRef()
  const labelRef = useRef()
  const cardRefs = useRef([])

  useGSAP(() => {
    // Heading
    gsap.from([labelRef.current, headingRef.current], {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        toggleActions: 'play reverse play reverse',
      },
    })

    // Cards
    cardRefs.current.forEach((card, i) => {
      const isRightCol = i % 2 === 1
      gsap.from(card, {
        opacity: 0,
        y: isRightCol ? 80 : -80,
        scale: 0.94,
        duration: 0.4,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 30%',
          toggleActions: 'play reverse play reverse',
        },
        delay: 0.1 + i * 0.12,
      })
    })
  }, { scope: sectionRef })

  return (
    <section
      id="collection"
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center relative z-10 py-24 px-4"
    >
      <p ref={labelRef} className="font-mono text-accent text-sm tracking-[0.3em] uppercase mb-3">
        The Lineup
      </p>
      <h2 ref={headingRef} className="text-4xl md:text-5xl font-heading text-center mb-16">
        Choose Your <span className="text-accent">Weapon</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl w-full">
        {rackets.map((racket, i) => (
          <div
            key={racket.name}
            ref={el => cardRefs.current[i] = el}
            className="group relative flex flex-row h-44 rounded-lg overflow-hidden border border-glass-border hover:border-accent/50 transition-all duration-300 cursor-pointer"
          >

            {/* Left panel */}
            <div className="relative w-2/5 flex items-center justify-center shrink-0 overflow-hidden">
              <img
                src={racket.imageBefore}
                alt={racket.name}
                className="absolute inset-0 w-full h-full object-contain p-3 transition-all duration-500 ease-out opacity-100 group-hover:opacity-0 group-hover:scale-110"
              />
              <img
                src={racket.imageAfter}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-contain p-3 scale-105 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-110"
              />
            </div>

            {/* Right panel */}
            <div className="relative flex-1 flex items-center">
              <div
                className="absolute inset-0 bg-accent transition-all duration-300 group-hover:brightness-110"
                style={{ clipPath: SLANT }}
              />
              <div className="relative z-10 pl-12 pr-6 py-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-heading text-bg leading-tight mb-0.5">
                    {racket.name}
                  </h3>
                  <p className="text-bg/70 text-sm font-sub">{racket.tagline}</p>
                </div>
                <div className="flex items-center gap-3 text-sm font-mono text-bg/80 mt-2">
                  <span>{racket.weight}</span>
                  <span className="text-bg/40">|</span>
                  <span>{racket.balance}</span>
                </div>
                <button className="mt-2 self-start text-xs font-mono text-bg/60 hover:text-bg flex items-center gap-1 transition-colors">
                  View Details
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}