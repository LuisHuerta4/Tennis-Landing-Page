import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Center } from '@react-three/drei'

const MODEL_PATH = '/models/tennis_racket_wilson_blade/scene.gltf'

function RacketModel() {
  const { scene } = useGLTF(MODEL_PATH)
  return (
    <Center>
      <primitive object={scene} scale={1} />
    </Center>
  )
}

useGLTF.preload(MODEL_PATH)

export default function RacketScene() {
  return (
    <div className="fixed inset-0 z-20 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ pointerEvents: 'auto' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-3, 2, -2]} intensity={0.3} />
        <Environment preset="city" />
        <Suspense fallback={null}>
          <RacketModel />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}