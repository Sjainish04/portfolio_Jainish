"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";

export function FloatingShape() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.15;
    meshRef.current.rotation.y = t * 0.2;
  });

  return (
    <mesh ref={meshRef} scale={2.2}>
      <icosahedronGeometry args={[1, 4]} />
      <MeshDistortMaterial
        color="#6366f1"
        emissive="#1e1b4b"
        emissiveIntensity={0.4}
        roughness={0.2}
        metalness={0.6}
        distort={0.45}
        speed={1.5}
      />
    </mesh>
  );
}
