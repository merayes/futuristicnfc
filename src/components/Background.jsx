import { Canvas } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const AnimatedStars = () => {
  const starsRef = useRef()
  
  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1
      starsRef.current.rotation.y = Math.cos(clock.getElapsedTime() * 0.1) * 0.1
    }
  })

  return (
    <Stars
      ref={starsRef}
      radius={100}
      depth={50}
      count={2000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  )
}

const Background = () => (
  <Canvas className="absolute top-0 left-0 w-full h-full z-0">
    <color attach="background" args={['#000000']} />
    <AnimatedStars />
    <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
  </Canvas>
)

export default Background;
