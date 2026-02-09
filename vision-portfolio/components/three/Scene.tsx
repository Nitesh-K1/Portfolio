"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Float, Html, Environment, Stars, PerspectiveCamera, RoundedBox } from "@react-three/drei"
import { useRef, useState, useEffect } from "react"
import { projects as projectData, Project } from "@/data/projects"
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
  children, 
  onClick,
}: { 
  position: [number, number, number]
  rotation?: [number, number, number]
  children: React.ReactNode 
  onClick?: () => void
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
      onClick={onClick}
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
        <div className="bg-black/40 backdrop-blur-3xl rounded-3xl h-full p-10 text-white text-lg md:text-xl border border-white/10">
          {children}
        </div>
      </Html>
    </group>
  )
}

function ProjectMonolith({ project, onSelect }: { project: Project; onSelect: (p: Project) => void }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002
    }
  })

  return (
    <mesh ref={ref} position={project.position} onClick={() => onSelect(project)}>
      <boxGeometry args={[1.2, 2.4, 0.35]} />
      <meshPhysicalMaterial
        transmission={0.96}
        thickness={1.5}
        roughness={0.03}
        clearcoat={1}
        clearcoatRoughness={0}
        color="#dfe8ff"
      />

      <Html center distanceFactor={1} className="pointer-events-auto">
        <div className="bg-black/60 rounded-xl p-4 text-white w-64 text-lg">
          <h3 className="font-semibold text-2xl">{project.name}</h3>
          <p className="text-base opacity-80">{project.description}</p>
        </div>
      </Html>
    </mesh>
  )
}

export default function Scene({ entered }: SceneProps) {
  // CameraController must be rendered inside the Canvas so hooks work
  function CameraController({ entered, userInteracting }: { entered: boolean; userInteracting: boolean }) {
    const { camera } = useThree()

    useFrame(() => {
      if (userInteracting) return
      if (entered) {
        // when not interacting, slowly lerp back to the intended entered camera
        camera.position.lerp(new THREE.Vector3(0, 1.5, 9), 0.05)
        camera.lookAt(0, 1, 0)
      } else {
        // when leaving, retract more slowly
        camera.position.lerp(new THREE.Vector3(0, 1, 4), 0.02)
      }
    })

    return null
  }

  const [showProjects, setShowProjects] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [userInteracting, setUserInteracting] = useState(false)

  useEffect(() => {
    let t: any
    const onWheel = () => {
      setUserInteracting(true)
      clearTimeout(t)
      t = setTimeout(() => setUserInteracting(false), 700)
    }

    window.addEventListener("wheel", onWheel, { passive: true })
    return () => {
      window.removeEventListener("wheel", onWheel)
      clearTimeout(t)
    }
  }, [])

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 1, entered ? 9 : 4]} fov={55} />
      <CameraController entered={entered} userInteracting={userInteracting} />

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={3}
        maxDistance={20}
        dampingFactor={0.08}
        zoomSpeed={0.6}
        rotateSpeed={0.5}
        enabled={entered}
        onStart={() => setUserInteracting(true)}
        onEnd={() => setUserInteracting(false)}
      />

      <ambientLight intensity={0.6} />
      <directionalLight position={[8, 10, 5]} intensity={1.2} />

      <Stars radius={150} depth={60} count={8000} factor={5} saturation={0} fade speed={1} />

      <Monolith />

      {entered && !showProjects && (
        <>
          <PortfolioPanel position={[-6, 2, -4]} rotation={[0, 0.3, 0]} onClick={() => setShowProjects(true)}>
            <h2 className="text-4xl font-bold mb-8">Projects</h2>
            <p className="opacity-70">Click to view projects</p>
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

      {entered && showProjects && (
        <>
          {projectData.map((p) => (
            <ProjectMonolith key={p.id} project={p} onSelect={(proj) => setSelectedProject(proj)} />
          ))}

          {selectedProject && (
            <PortfolioPanel position={[0, 1.2, -2]} rotation={[0, 0, 0]}>
              <h2 className="text-4xl font-bold mb-4">{selectedProject.name}</h2>
              <p className="opacity-80 mb-6">{selectedProject.description}</p>
              <div className="mt-6">
                <button onClick={() => { setSelectedProject(null); setShowProjects(false); }} className="px-4 py-2 rounded bg-white/10">Close</button>
              </div>
            </PortfolioPanel>
          )}
        </>
      )}

      <Environment preset="night" background intensity={0.4} />
    </Canvas>
  )
}