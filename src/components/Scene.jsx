
import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function WireIcosahedron() {
  const ref = useRef()
  useFrame((_, dt) => {
    if (!ref.current) return
    ref.current.rotation.y += dt * 0.1
    ref.current.rotation.x += dt * 0.04
  })
  return (
    <mesh ref={ref} position={[0, 1, -4]}>
      <icosahedronGeometry args={[2.6, 1]} />
      <meshBasicMaterial wireframe color={'#00ff6a'} transparent opacity={0.1} />
    </mesh>
  )
}

// Floating bipyramids
function FloatingBipyramid({ x, startY, speed }) {
  const ref = useRef()
  const { z, rotX, rotY } = useMemo(() => ({
    z: -5 - Math.random() * 2,
    rotX: Math.random() * Math.PI,
    rotY: Math.random() * Math.PI,
  }), [])

  useFrame((_, dt) => {
    if (!ref.current) return
 
    ref.current.rotation.x += dt * 0.3
    ref.current.rotation.y += dt * 0.25

    ref.current.position.y += dt * speed
    if (ref.current.position.y > 6) {
      ref.current.position.y = -6
    }
  })

  return (
    <mesh ref={ref} position={[x, startY, z]} rotation={[rotX, rotY, 0]}>
      <octahedronGeometry args={[0.6, 0]} />
      <meshBasicMaterial wireframe color={'#ffffff'} transparent opacity={0.5} />
    </mesh>
  )
}

export default function Scene() {

  const bipyramids = useMemo(() => {
    const arr = []
    const leftXs = [-9, -6, -3.3]   
    const rightXs = [3.3, 6, 9]    
    leftXs.forEach((x, i) => {
      arr.push({
        x,
        startY: -6 + i * 4, 
        speed: 0.5,
      })
    })

    rightXs.forEach((x, i) => {
      arr.push({
        x,
        startY: -4 + i * 4,
        speed: 0.5,
      })
    })

    return arr
  }, [])

  return (
    <div className="scene-bg" aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: false, powerPreference: 'low-power' }}
      >
        <ambientLight intensity={0.1} />

        <WireIcosahedron />

        {bipyramids.map((p, i) => (
          <FloatingBipyramid key={i} {...p} />
        ))}
      </Canvas>
    </div>
  )
}
