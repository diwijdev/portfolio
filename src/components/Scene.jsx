import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from './Model'

export default function Scene() {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov:50 }}>
      <ambientLight intensity={2} />
      <directionalLight position={[5, 10, 7]} intensity={1} />
      <Suspense fallback={null}>
        <Model scale={1} />
      </Suspense>
    </Canvas>
  )
}
