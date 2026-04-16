import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function LoadingScreen({ ready, onComplete }) {
  const overlayRef = useRef()
  const barFillRef = useRef()
  const contentRef = useRef()

  // animate the bar from 0 to 80% slowly (GLTF loads in background)
  useEffect(() => {
    gsap.to(barFillRef.current, {
      width: '80%',
      duration: 2.5,
      ease: 'power1.out',
    })
  }, [])

  // when models ready fill bar
  useEffect(() => {
    if (!ready) return

    gsap.killTweensOf(barFillRef.current)

    const tl = gsap.timeline()

    tl.to(barFillRef.current, {
      width: '100%',
      duration: 0.25,
      ease: 'none',
    })

    tl.to(contentRef.current, {
      opacity: 0,
      y: -16,
      duration: 0.3,
      ease: 'power2.in',
    }, '+=0.1')

    tl.to(overlayRef.current, {
      yPercent: -100,
      duration: 0.9,
      ease: 'power3.inOut',
      onComplete,
    }, '-=0.05')
  }, [ready])

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-bg flex flex-col items-center justify-center"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-accent/20" />

      <div ref={contentRef} className="flex flex-col items-center gap-5">
        <div className="font-heading text-5xl tracking-wider select-none">
          <span className="text-accent">W</span>ILSON
        </div>

        <p className="font-mono text-secondary text-xs tracking-[0.4em] uppercase">
          Loading Experience
        </p>

        <div className="relative w-48 h-px bg-secondary/25 overflow-hidden rounded-full">
          <div
            ref={barFillRef}
            className="absolute left-0 top-0 h-full bg-accent rounded-full"
            style={{ width: '0%' }}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-accent/20" />
    </div>
  )
}