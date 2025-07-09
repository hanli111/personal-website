"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import type { Points } from 'three';

function Starfield({ count = 400 }) {
  const mesh = useRef<Points>(null);
  const particles = useMemo(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const r = 12 * Math.random();
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      positions.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    }
    return new Float32Array(positions);
  }, [count]);

  useFrame(({ clock, mouse, camera }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.getElapsedTime() * 0.03;
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
    camera.position.x = mouse.x * 2;
    camera.position.y = mouse.y * 2;
    camera.lookAt(0, 0, 0);
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#a5b4fc"
        size={0.18}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </points>
  );
}

const ThreeDBackground = () => (
  <div className="fixed inset-0 -z-10 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <ambientLight intensity={0.7} />
      <Starfield count={420} />
    </Canvas>
  </div>
);

export default ThreeDBackground; 