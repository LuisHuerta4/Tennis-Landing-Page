import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ROW_ONE = [
  'WILSON',
  'PRECISION UNDER TENSION',
  'ENGINEERED FOR PERFORMANCE',
  'BLADE SERIES',
  'CARBON FIBER',
  'NEXT GENERATION',
]

const ROW_TWO = [
  'POWER',
  'CONTROL',
  'SPIN TECHNOLOGY',
  'PROFESSIONAL GRADE',
  'HAND CRAFTED',
  'WINNING FORMULA',
]

function Dot() {
  return (
    <span className="mx-5 w-1.5 h-1.5 rounded-full bg-current opacity-40 shrink-0 inline-block self-center" />
  )
}

function TickerRow({ items, direction = 'left', className = '' }) {
  const trackRef = useRef()

  useGSAP(() => {
    gsap.to(trackRef.current, {
      xPercent: direction === 'left' ? -50 : 50,
      duration: 50,
      ease: 'none',
      repeat: -1,
    })

    if (direction === 'right') {
      gsap.set(trackRef.current, { xPercent: -50 })
    }
  })

  const repeated = [...items, ...items, ...items, ...items]

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={trackRef} className="flex whitespace-nowrap will-change-transform">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center font-heading text-2xl tracking-[0.2em] uppercase">
            {item}
            <Dot />
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Ticker() {
  return (
    <div className="relative z-10 -skew-y-1 my-2 overflow-hidden">

      <TickerRow
        items={ROW_ONE}
        direction="left"
        className="bg-accent text-bg py-5 px-0"
      />

      <TickerRow
        items={ROW_TWO}
        direction="right"
        className="bg-bg border-y border-accent/20 text-accent py-5 px-0"
      />
    </div>
  )
}