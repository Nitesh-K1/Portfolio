"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useRef, useState } from "react"
import * as THREE from "three"
import ProjectNode from "./ProjectNode"
import Lights from "./Lights"
import { projects } from "@/data/projects"

function CameraController({
  focus,
  setFocus
}: {
  focus: THREE.Vector3 | null
  setFocus: (v: THREE.Vector3 | null) => void
}) {
  const { camera } = useThree()
  const controls = useRef<any>(null)

  const defaultPos = new THREE.Vector3(0, 0, 6)
  const focusDistance = 2.2
  const exitThreshold = 3.5

  useFrame(() => {
    const target = focus ?? new THREE.Vector3(0, 0, 0)

    if (focus) {
      const desired = target.clone().add(new THREE.Vector3(0, 0, focusDistance))
      camera.position.lerp(desired, 0.07)

      const currentDistance = camera.position.distanceTo(target)
      if (currentDistance > exitThreshold) {
        setFocus(null)
      }
    } else {
      camera.position.lerp(defaultPos, 0.05)
    }

    camera.lookAt(target)

    if (controls.current) {
      controls.current.target.lerp(target, 0.08)
      controls.current.update()
    }
  })

  return <OrbitControls ref={controls} enablePan={false} />
}

export default function Scene() {
  const [focus, setFocus] = useState<THREE.Vector3 | null>(null)

  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
      <Lights />

      <CameraController focus={focus} setFocus={setFocus} />

      {projects.map((p) => (
        <ProjectNode
          key={p.id}
          position={p.position}
          onClick={() => setFocus(new THREE.Vector3(...p.position))}
        />
      ))}
    </Canvas>
  )
}
