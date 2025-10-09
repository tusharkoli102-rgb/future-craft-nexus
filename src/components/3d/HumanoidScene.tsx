import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, PerspectiveCamera, Float } from '@react-three/drei';
import * as THREE from 'three';

interface HumanoidSceneProps {
  scrollProgress: number;
}

export const HumanoidScene = ({ scrollProgress }: HumanoidSceneProps) => {
  const humanoidRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  // Generate particle geometry
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  // Animate based on scroll
  useFrame((state) => {
    if (!humanoidRef.current || !cameraRef.current || !particlesRef.current) return;

    const progress = scrollProgress;

    // Section 1 (0-0.25): Initial view
    // Section 2 (0.25-0.5): Camera moves closer, humanoid rotates
    // Section 3 (0.5-0.75): Environment brightens, particles swirl
    // Section 4 (0.75-1): Camera pans up, humanoid dissolves

    // Camera animation
    if (progress < 0.25) {
      // Section 1: Wide shot
      cameraRef.current.position.z = 8 - progress * 8;
      cameraRef.current.position.y = 0;
    } else if (progress < 0.5) {
      // Section 2: Move closer and orbit
      const localProgress = (progress - 0.25) * 4;
      cameraRef.current.position.z = 6 - localProgress * 2;
      cameraRef.current.position.x = Math.sin(localProgress * Math.PI) * 2;
      cameraRef.current.position.y = localProgress * 0.5;
    } else if (progress < 0.75) {
      // Section 3: Side view
      const localProgress = (progress - 0.5) * 4;
      cameraRef.current.position.x = 2 + localProgress * 1;
      cameraRef.current.position.y = 0.5 + localProgress * 0.5;
      cameraRef.current.position.z = 4;
    } else {
      // Section 4: Pan upward
      const localProgress = (progress - 0.75) * 4;
      cameraRef.current.position.y = 1 + localProgress * 3;
      cameraRef.current.position.z = 4 + localProgress * 2;
    }

    cameraRef.current.lookAt(0, 0, 0);

    // Humanoid rotation and scale
    humanoidRef.current.rotation.y = progress * Math.PI * 2;
    humanoidRef.current.rotation.x = Math.sin(progress * Math.PI) * 0.2;
    
    // Dissolve effect in final section
    if (progress > 0.75) {
      const dissolve = (progress - 0.75) * 4;
      humanoidRef.current.scale.setScalar(1 - dissolve * 0.5);
    } else {
      humanoidRef.current.scale.setScalar(1);
    }

    // Particle animation
    particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 8]} fov={50} />
      
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ff00ff" />
      <spotLight
        position={[0, 5, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#ffffff"
        castShadow
      />
      
      {/* Rim lights */}
      <pointLight position={[0, 0, -5]} intensity={0.8} color="#00ffff" />
      <pointLight position={[5, 2, 5]} intensity={0.6} color="#ff00ff" />

      {/* Environment (optional) removed to simplify) */}

      {/* Humanoid (using abstract sphere with distortion for demo) */}
      <group ref={humanoidRef}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          {/* Head */}
          <Sphere args={[0.5, 64, 64]} position={[0, 1.5, 0]}>
            <meshStandardMaterial
              color="#00ffff"
              emissive="#0088ff"
              emissiveIntensity={scrollProgress > 0.5 ? 0.5 : 0.2}
              metalness={0.9}
              roughness={0.1}
            />
          </Sphere>

          {/* Body */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 1.5, 32]} />
            <meshStandardMaterial
              color="#0088ff"
              emissive="#0044ff"
              emissiveIntensity={scrollProgress > 0.5 ? 0.3 : 0.1}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>

          {/* Arms */}
          <mesh position={[-0.6, 0.5, 0]} rotation={[0, 0, Math.PI / 6]}>
            <cylinderGeometry args={[0.15, 0.15, 1, 16]} />
            <meshStandardMaterial
              color="#0088ff"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          <mesh position={[0.6, 0.5, 0]} rotation={[0, 0, -Math.PI / 6]}>
            <cylinderGeometry args={[0.15, 0.15, 1, 16]} />
            <meshStandardMaterial
              color="#0088ff"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>

          {/* Glow sphere around character */}
          <Sphere args={[2, 32, 32]} position={[0, 0.5, 0]}>
            <meshBasicMaterial
              color={scrollProgress > 0.5 ? "#00ffff" : "#0088ff"}
              transparent
              opacity={0.05 + scrollProgress * 0.1}
              side={THREE.BackSide}
            />
          </Sphere>
        </Float>
      </group>

      {/* Holographic grid */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[20, 20, 20, 20]} />
        <meshBasicMaterial
          color="#00ffff"
          wireframe
          transparent
          opacity={scrollProgress > 0.25 ? 0.2 : 0.05}
        />
      </mesh>

      {/* Floating particles */}
      <points ref={particlesRef} geometry={particlesGeometry}>
        <pointsMaterial
          size={0.05}
          color="#00ffff"
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
};
