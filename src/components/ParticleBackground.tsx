import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ─── Floating Particles with Network Lines ─── */
const PARTICLE_COUNT = 120;
const CONNECTION_DISTANCE = 2.8;

function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);
  const mouseRef = useRef({ x: 0, y: 0 });

  const particles = useMemo(() => {
    const positions: number[] = [];
    const velocities: number[] = [];
    const sizes: number[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions.push(
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10
      );
      velocities.push(
        (Math.random() - 0.5) * 0.003,
        (Math.random() - 0.5) * 0.003,
        (Math.random() - 0.5) * 0.002
      );
      sizes.push(0.02 + Math.random() * 0.04);
    }
    return { positions, velocities, sizes };
  }, []);

  // Track mouse for subtle interaction
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const linePositions = useMemo(() => new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 6), []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const pos = particles.positions;
    const vel = particles.velocities;
    let lineIndex = 0;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      // Drift
      pos[i3] += vel[i3] + Math.sin(time * 0.3 + i * 0.1) * 0.001;
      pos[i3 + 1] += vel[i3 + 1] + Math.cos(time * 0.2 + i * 0.15) * 0.001;
      pos[i3 + 2] += vel[i3 + 2];

      // Mouse influence (very subtle)
      pos[i3] += mouseRef.current.x * 0.0005;
      pos[i3 + 1] += mouseRef.current.y * 0.0005;

      // Wrap bounds
      if (pos[i3] > 9) pos[i3] = -9;
      if (pos[i3] < -9) pos[i3] = 9;
      if (pos[i3 + 1] > 6) pos[i3 + 1] = -6;
      if (pos[i3 + 1] < -6) pos[i3 + 1] = 6;
      if (pos[i3 + 2] > 5) pos[i3 + 2] = -5;
      if (pos[i3 + 2] < -5) pos[i3 + 2] = 5;

      dummy.position.set(pos[i3], pos[i3 + 1], pos[i3 + 2]);
      const s = particles.sizes[i] * (1 + Math.sin(time * 2 + i) * 0.3);
      dummy.scale.setScalar(s * 15);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    // Draw connection lines between nearby particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const i3 = i * 3;
        const j3 = j * 3;
        const dx = pos[i3] - pos[j3];
        const dy = pos[i3 + 1] - pos[j3 + 1];
        const dz = pos[i3 + 2] - pos[j3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < CONNECTION_DISTANCE) {
          linePositions[lineIndex++] = pos[i3];
          linePositions[lineIndex++] = pos[i3 + 1];
          linePositions[lineIndex++] = pos[i3 + 2];
          linePositions[lineIndex++] = pos[j3];
          linePositions[lineIndex++] = pos[j3 + 1];
          linePositions[lineIndex++] = pos[j3 + 2];
        }
      }
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (linesRef.current) {
      const geom = linesRef.current.geometry;
      geom.setAttribute(
        'position',
        new THREE.BufferAttribute(linePositions.slice(0, lineIndex), 3)
      );
      geom.setDrawRange(0, lineIndex / 3);
      geom.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.6} />
      </instancedMesh>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#38bdf8" transparent opacity={0.08} />
      </lineSegments>
    </>
  );
}

/* ─── Subtle Grid Plane ─── */
function GridPlane() {
  return (
    <gridHelper
      args={[40, 40, '#1a2744', '#0d1b2a']}
      position={[0, -5.5, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

/* ─── Abstract Floating Shapes ─── */
function FloatingShapes() {
  const torusRef = useRef<THREE.Mesh>(null!);
  const icoRef = useRef<THREE.Mesh>(null!);
  const octaRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.15;
      torusRef.current.rotation.y = t * 0.1;
      torusRef.current.position.y = Math.sin(t * 0.4) * 0.5 + 2;
    }
    if (icoRef.current) {
      icoRef.current.rotation.x = t * 0.12;
      icoRef.current.rotation.z = t * 0.08;
      icoRef.current.position.y = Math.cos(t * 0.35) * 0.4 - 1;
    }
    if (octaRef.current) {
      octaRef.current.rotation.y = t * 0.18;
      octaRef.current.rotation.z = t * 0.1;
      octaRef.current.position.y = Math.sin(t * 0.3 + 1) * 0.6;
    }
  });

  return (
    <>
      <mesh ref={torusRef} position={[-6, 2, -4]}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.15} />
      </mesh>
      <mesh ref={icoRef} position={[7, -1, -5]}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshBasicMaterial color="#06b6d4" wireframe transparent opacity={0.12} />
      </mesh>
      <mesh ref={octaRef} position={[5, 3, -6]}>
        <octahedronGeometry args={[0.8, 0]} />
        <meshBasicMaterial color="#ec4899" wireframe transparent opacity={0.1} />
      </mesh>
    </>
  );
}

/* ─── Main Scene ─── */
function Scene() {
  return (
    <>
      <fog attach="fog" args={['#060a14', 5, 25]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.4} color="#38bdf8" />
      <pointLight position={[-5, -3, 3]} intensity={0.3} color="#a855f7" />
      <Particles />
      <GridPlane />
      <FloatingShapes />
    </>
  );
}

/* ─── Exported Component ─── */
export const ParticleBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10" style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};
