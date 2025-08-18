// src/components/Scene.jsx
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function WireIcosahedron() {
  const ref = useRef()
  useFrame((_, dt) => {
    if (!ref.current) return
    ref.current.rotation.y += dt * 0.1
    ref.current.rotation.x += dt * 0.04
  })
  return (
    <mesh ref={ref} position={[0, 0, -4]}>
      <icosahedronGeometry args={[2.6, 1]} />
      <meshBasicMaterial wireframe color={'#00ff6a'} transparent opacity={0.08} />
    </mesh>
  )
}

export default function Scene() {
  return (
    <div className="scene-bg" aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: false, powerPreference: 'low-power' }}
      >
        {/* Very light ambient for a hint of depth if we add more later */}
        <ambientLight intensity={0.1} />
        <WireIcosahedron />
      </Canvas>
    </div>
  )
}
