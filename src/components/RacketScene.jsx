import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function PlaceholderRacket() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  )
}

export default function RacketScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <PlaceholderRacket />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}
