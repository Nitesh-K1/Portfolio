"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

type Props = {
  position: [number, number, number]
  onClick: () => void
}

export default function ProjectNode({ position, onClick }: Props) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    ref.current.rotation.y += 0.005
    ref.current.position.y += Math.sin(state.clock.elapsedTime) * 0.002
  })

  return (
    <mesh
      ref={ref}
      position={position}
      onClick={onClick}
      onPointerOver={() => {
        setHovered(true)
        document.body.style.cursor = "pointer"
      }}
      onPointerOut={() => {
        setHovered(false)
        document.body.style.cursor = "default"
      }}
    >
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial
        emissive="#00ffff"
        emissiveIntensity={hovered ? 1.2 : 0.5}
      />
    </mesh>
  )
}
