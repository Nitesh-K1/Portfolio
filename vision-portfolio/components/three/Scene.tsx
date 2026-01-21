"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Float, Html, Environment, Stars, PerspectiveCamera, RoundedBox } from "@react-three/drei"
import { useRef, useState } from "react"
import * as THREE from "three"

interface SceneProps {
  entered: boolean
}

function Monolith() {
  const ref = useRef<THREE.Mesh>(null)
  const { mouse } = useThree()

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = mouse.x * 0.3
      ref.current.rotation.x = mouse.y * 0.2
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ref} position={[0, 1, 0]}>
        <boxGeometry args={[1.2, 2.4, 0.35]} />
        <meshPhysicalMaterial
          transmission={0.96}
          thickness={1.5}
          roughness={0.03}
          clearcoat={1}
          clearcoatRoughness={0}
          color="#f8faff"
        />
      </mesh>
    </Float>
  )
}

function PortfolioPanel({ 
  position, 
  rotation = [0, 0, 0], 
  children 
}: { 
  position: [number, number, number]
  rotation?: [number, number, number]
  children: React.ReactNode 
}) {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame(() => {
    if (groupRef.current) {
      const targetScale = hovered ? 1.08 : 1
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
    }
  })

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <RoundedBox args={[4.8, 3.4, 0.2]} radius={0.35} smoothness={8}>
        <meshPhysicalMaterial
          transmission={0.92}
          roughness={0.08}
          clearcoat={1}
          clearcoatRoughness={0}
          thickness={1.5}
          color="#ffffff"
          side={THREE.DoubleSide}
          emissive={hovered ? "#3366ff" : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </RoundedBox>

      <Html
        transform
        distanceFactor={1}
        center
        className="w-full h-full p-10 pointer-events-auto overflow-y-auto"
      >
        <div className="bg-black/40 backdrop-blur-3xl rounded-3xl h-full p-10 text-white border border-white/10">
          {children}
        </div>
      </Html>
    </group>
  )
}

export default function Scene({ entered }: SceneProps) {
  const { camera } = useThree()

  useFrame(() => {
    if (entered) {
      camera.position.lerp(new THREE.Vector3(0, 1.5, 9), 0.05)
      camera.lookAt(0, 1, 0)
    } else {
      camera.position.lerp(new THREE.Vector3(0, 1, 4), 0.05)
    }
  })

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 1, entered ? 9 : 4]} fov={55} />

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={3}
        maxDistance={20}
        dampingFactor={0.08}
        rotateSpeed={0.5}
        enabled={entered}
      />

      <ambientLight intensity={0.6} />
      <directionalLight position={[8, 10, 5]} intensity={1.2} />

      <Stars radius={150} depth={60} count={8000} factor={5} saturation={0} fade speed={1} />

      <Monolith />

      {entered && (
        <>
          {/* Paste your real module content here */}
          <PortfolioPanel position={[-6, 2, -4]} rotation={[0, 0.3, 0]}>
            <h2 className="text-4xl font-bold mb-8">Projects</h2>
            {/* Copy entire ProjectsModule content here (grid, cards, etc.) */}
          </PortfolioPanel>

          <PortfolioPanel position={[6, 1.5, -5]} rotation={[0, -0.3, 0]}>
            <h2 className="text-4xl font-bold mb-8">Skills</h2>
            {/* Copy SkillsModule content here */}
          </PortfolioPanel>

          <PortfolioPanel position={[-5, -2, -3]} rotation={[0, 0.2, 0]}>
            <h2 className="text-4xl font-bold mb-8">About</h2>
            {/* Copy AboutModule content here (photo + bio) */}
          </PortfolioPanel>

          <PortfolioPanel position={[5, -2.5, -4]} rotation={[0, -0.2, 0]}>
            <h2 className="text-4xl font-bold mb-8">Contact</h2>
            {/* Copy ContactModule content here */}
          </PortfolioPanel>
        </>
      )}

      <Environment preset="night" background intensity={0.4} />
    </Canvas>
  )
}