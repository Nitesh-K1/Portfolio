"use client"

import { Canvas } from "@react-three/fiber"
import { Float } from "@react-three/drei"

function Monolith() {
  return (
    <Float speed={1} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh>
        <boxGeometry args={[1.2, 2.4, 0.2]} />
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>
    </Float>
  )
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      className="absolute inset-0"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 3, 4]} intensity={1.2} />
      <Monolith />
    </Canvas>
  )
}
