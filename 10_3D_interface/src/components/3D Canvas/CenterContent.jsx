import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// -------------------
// Airplane Component (low-poly, floating)
// -------------------
function Airplane() {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.y += 0.003; // rotate slowly
    ref.current.position.x = Math.sin(clock.elapsedTime * 0.7) * 6;
    ref.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 1;
    ref.current.position.z = Math.cos(clock.elapsedTime * 0.7) * 2;
  });

  return (
    <group ref={ref}>
      {/* Body */}
      <mesh>
        <cylinderGeometry args={[0.15, 0.15, 2, 32]} />
        <meshStandardMaterial color="#facc15" />
      </mesh>

      {/* Wings */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.05, 1, 0.5]} />
        <meshStandardMaterial color="#f87171" />
      </mesh>

      {/* Tail */}
      <mesh position={[0, 0.2, -1]}>
        <coneGeometry args={[0.15, 0.5, 32]} />
        <meshStandardMaterial color="#34d399" />
      </mesh>
    </group>
  );
}

// -------------------
// Cloud Component
// -------------------
function Cloud({ position, scale, speed }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.position.x =
      position[0] + Math.sin(clock.elapsedTime * speed) * 2;
    ref.current.position.y =
      position[1] + Math.sin(clock.elapsedTime * speed * 0.5) * 0.5;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#ffffff" transparent opacity={0.6} />
    </mesh>
  );
}

// -------------------
// Canvas Background
// -------------------
export default function FlyingAirplaneBackground() {
  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Airplane */}
      <Airplane />

      {/* Clouds */}
      <Cloud position={[-3, 1, -2]} scale={[0.8, 0.8, 0.8]} speed={0.5} />
      <Cloud position={[2, 2, -3]} scale={[1, 1, 1]} speed={0.3} />
      <Cloud position={[0, 1.5, -5]} scale={[1.2, 1.2, 1.2]} speed={0.4} />
      <Cloud position={[-2, 2.5, -4]} scale={[0.7, 0.7, 0.7]} speed={0.6} />

      {/* Sky color */}
      <color attach="background" args={["#60a5fa"]} />

      {/* Camera Controls */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.05} />
    </Canvas>
  );
}
