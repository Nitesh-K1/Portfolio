"use client"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Float, Environment } from "@react-three/drei"

function Monolith() {
  const ref = useRef<any>(null)
  const { mouse } = useThree()

  useFrame(() => {
    if (!ref.current) return
    ref.current.rotation.y = mouse.x * 0.3
    ref.current.rotation.x = mouse.y * 0.2
  })

  return (
    <Float speed={0.6} rotationIntensity={0.15} floatIntensity={0.3}>
      <mesh ref={ref} rotation={[0.12, 0.35, 0]}>
        <boxGeometry args={[1.2, 2.4, 0.35]} />
        <meshPhysicalMaterial
          transmission={0.95}
          thickness={0.9}
          roughness={0.04}
          metalness={0}
          ior={1.52}
          clearcoat={0.3}
          clearcoatRoughness={0.15}
          color="#e8f1ff"
        />
      </mesh>
    </Float>
  )
}


export default function Scene() {
  return (
        <Canvas
          camera={{ position: [0, 0, 4], fov: 45 }}
          className="absolute inset-0 z-0"
          gl={{
            physicallyCorrectLights: true,
            outputColorSpace: "srgb",
            toneMappingExposure: 1
          }}
        >

      <ambientLight intensity={0.25} />

      <directionalLight
        position={[5, 6, 5]}
        intensity={1.2}
      />

      <directionalLight
        position={[-5, -6, -5]}
        intensity={0.4}
      />
      <pointLight
        position={[0, 0, 3]}
        intensity={0.6}
      />

      <Environment preset="city" />

      <Monolith />
    </Canvas>
  )
}
