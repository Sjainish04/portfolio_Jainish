"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { FloatingShape } from "./floating-shape";

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, -5, -5]} intensity={0.6} color="#a855f7" />

      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.2}>
        <FloatingShape />
      </Float>

      <Stars
        radius={50}
        depth={50}
        count={2000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />
    </Canvas>
  );
}
