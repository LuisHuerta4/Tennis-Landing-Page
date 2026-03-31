import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RACKET_KEYFRAMES } from '../lib/racketKeyframes'
import { scrollStore } from '../lib/scrollStore'

export default function ScrollAnimationManager() {
  useGSAP(() => {
    RACKET_KEYFRAMES.forEach((keyframe, i) => {
      const el = document.getElementById(keyframe.id)
      if (!el) return

      ScrollTrigger.create({
        trigger: el,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          scrollStore.progress = i + self.progress
        },
      })
    })
  }, [])

  return null
}