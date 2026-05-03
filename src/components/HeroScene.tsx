import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface HeroSceneProps {
  status?: 'connecting' | 'online' | 'offline';
}

function AIOrb({ status = 'online' }: { status?: string }) {
  const orbRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const outerLinesRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const isOnline = status === 'online';
    
    // Pulse speed based on status
    const pulseSpeed = isOnline ? 3 : 1;
    const pulse = Math.sin(time * pulseSpeed) * 0.5 + 1;

    if (orbRef.current) {
      orbRef.current.rotation.x = time * 0.1;
      orbRef.current.rotation.y = time * 0.15;
      
      const material = orbRef.current.material as any;
      if (material && 'emissiveIntensity' in material) {
        material.emissiveIntensity = pulse * (isOnline ? 3 : 0.5);
      }
    }

    if (coreRef.current) {
      coreRef.current.rotation.y = -time * 0.4;
      coreRef.current.scale.setScalar(1.2 + Math.sin(time * (isOnline ? 6 : 2)) * 0.1);
      const material = coreRef.current.material as any;
      if (material && 'emissiveIntensity' in material) {
        material.emissiveIntensity = (1.5 + Math.sin(time * (isOnline ? 8 : 4)) * 0.5) * (isOnline ? 2 : 0.5);
      }
    }

    if (outerLinesRef.current) {
      outerLinesRef.current.rotation.z = time * 0.05;
      outerLinesRef.current.rotation.y = time * 0.1;
      const material = outerLinesRef.current.material as any;
      if (material && 'emissiveIntensity' in material) {
        material.emissiveIntensity = pulse * 0.8;
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      {/* Outer Distorted Layer (Cyan) */}
      <Sphere ref={orbRef} args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#00f2ff"
          speed={status === 'online' ? 5 : 2}
          distort={0.4}
          radius={1}
          metalness={1}
          roughness={0}
          emissive="#00f2ff"
          emissiveIntensity={1}
          transparent
          opacity={0.6}
        />
      </Sphere>

      {/* Inner Core (Purple) */}
      <Sphere ref={coreRef} args={[0.5, 32, 32]} scale={1.2}>
        <meshStandardMaterial
          color="#bc13fe"
          emissive="#bc13fe"
          emissiveIntensity={3}
          roughness={0}
          metalness={1}
        />
      </Sphere>

      {/* Wireframe Shell (Brain Neural Map) */}
      <mesh ref={outerLinesRef} scale={1.8}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial 
          color="#00f2ff" 
          wireframe 
          transparent 
          opacity={0.3} 
          emissive="#00f2ff"
          emissiveIntensity={1}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 1500;
  
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 15;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
        particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#00f2ff"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Torus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.8;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <Float speed={5} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={meshRef} position={[2.5, 1.5, -3]}>
        <torusGeometry args={[1.2, 0.015, 16, 120]} />
        <meshStandardMaterial color="#bc13fe" emissive="#bc13fe" emissiveIntensity={3} />
      </mesh>
    </Float>
  );
}

function DataCube() {
  const cubeRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Orbital motion around the orb
      groupRef.current.rotation.y = time * 0.6;
      groupRef.current.position.y = Math.sin(time * 0.5) * 1;
    }
    if (cubeRef.current) {
      cubeRef.current.rotation.x = time * 2;
      cubeRef.current.rotation.z = time * 1.5;
      const material = cubeRef.current.material as any;
      if (material && 'emissiveIntensity' in material) {
        material.emissiveIntensity = 2 + Math.sin(time * 5) * 1;
      }
    }
    if (innerRef.current) {
       innerRef.current.scale.setScalar(0.8 + Math.sin(time * 8) * 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      <group position={[3.5, 0, 0]}>
        <mesh ref={cubeRef}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial 
            color="#00f2ff" 
            emissive="#00f2ff" 
            emissiveIntensity={2}
            wireframe
          />
          <mesh ref={innerRef}>
             <boxGeometry args={[0.25, 0.25, 0.25]} />
             <meshStandardMaterial color="#bc13fe" emissive="#bc13fe" emissiveIntensity={2} transparent opacity={0.7} />
          </mesh>
        </mesh>
        {/* Glow point light */}
        <pointLight intensity={1} distance={2} color="#00f2ff" />
      </group>
    </group>
  );
}

export default function HeroScene({ status = 'online' }: HeroSceneProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f2ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#bc13fe" />
        <AIOrb status={status} />
        <Torus />
        <DataCube />
        <Particles />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
}
