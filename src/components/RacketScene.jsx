import { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment } from '@react-three/drei'
import * as THREE from 'three'
import { RACKET_KEYFRAMES } from '../lib/racketKeyframes'
import { scrollStore } from '../lib/scrollStore'
import { loadStore } from '../lib/loadStore'

const MODEL_PATH = '/models/tennis_racket_wilson_blade/scene.gltf'

function RacketModel() {
  const { scene } = useGLTF(MODEL_PATH)
  const groupRef = useRef()
  const smoothProgress = useRef(0)

  const scaleMultiplier = useRef(1)

  // component mounts once GLTF fully loaded
  useEffect(() => {
    loadStore.onReady?.()

    function updateScaleMultiplier() {
      const w = window.innerWidth
      if (w < 768) scaleMultiplier.current = 0.65
      else if (w < 1024) scaleMultiplier.current = 0.8
      else scaleMultiplier.current = 1
    }

    updateScaleMultiplier()
    window.addEventListener('resize', updateScaleMultiplier)
    return () => window.removeEventListener('resize', updateScaleMultiplier)
  }, [])

  useFrame(() => {
    if (!groupRef.current) return

    smoothProgress.current = THREE.MathUtils.lerp(
      smoothProgress.current,
      scrollStore.progress,
      0.1 // higher = snappier, lower = smoother
    )

    const p = smoothProgress.current
    const fromIndex = Math.floor(p)
    const toIndex = Math.min(fromIndex + 1, RACKET_KEYFRAMES.length - 1)
    const t = p - fromIndex

    const from = RACKET_KEYFRAMES[Math.min(fromIndex, RACKET_KEYFRAMES.length - 1)]
    const to = RACKET_KEYFRAMES[toIndex]

    // position
    groupRef.current.position.x = THREE.MathUtils.lerp(from.position[0], to.position[0], t)
    groupRef.current.position.y = THREE.MathUtils.lerp(from.position[1], to.position[1], t)
    groupRef.current.position.z = THREE.MathUtils.lerp(from.position[2], to.position[2], t)

    // rotation
    groupRef.current.rotation.x = THREE.MathUtils.lerp(from.rotation[0], to.rotation[0], t)
    groupRef.current.rotation.y = THREE.MathUtils.lerp(from.rotation[1], to.rotation[1], t)
    groupRef.current.rotation.z = THREE.MathUtils.lerp(from.rotation[2], to.rotation[2], t)

    // scale
    const s = THREE.MathUtils.lerp(from.scale, to.scale, t) * scaleMultiplier.current
    groupRef.current.scale.setScalar(s)
  })

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={1} />
    </group>
  )
}

useGLTF.preload(MODEL_PATH)

export default function RacketScene() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-3, 2, -2]} intensity={0.3} />
        <Environment preset="city" />
        <Suspense fallback={null}>
          <RacketModel />
        </Suspense>
      </Canvas>
    </div>
  )
}