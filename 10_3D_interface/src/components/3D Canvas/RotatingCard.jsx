import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function InteractiveSphere() {
  const meshRef = useRef();
  const materialRef = useRef();
  const { camera, gl } = useThree();

  // Track mouse position
  const mouse = useRef({ x: 0, y: 0 });

  // Mouse move listener
  const handleMouseMove = (event) => {
    // Normalize mouse position to [-1, 1]
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
  };

  // Mouse wheel listener for zoom
  const handleWheel = (event) => {
    camera.position.z += event.deltaY * 0.003; // zoom sensitivity
    if (camera.position.z < 2) camera.position.z = 2;
    if (camera.position.z > 10) camera.position.z = 10;
  };

  // Attach listeners once
  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("wheel", handleWheel);
  }

  useFrame(() => {
    // Rotate sphere along X-axis only based on mouse Y
    meshRef.current.rotation.x = mouse.current.y * Math.PI * 0.5;

    // Slight floating along Y for dynamic feel
    const time = performance.now() * 0.001;
    meshRef.current.position.y = Math.sin(time) * 0.5;

    // Dynamic color change
    const hue = (performance.now() * 0.00005) % 1;
    materialRef.current.color.setHSL(hue, 0.7, 0.5);
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial ref={materialRef} wireframe />
    </mesh>
  );
}

export default function MouseInteractiveBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 60 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background: "radial-gradient(circle, #0f172a, #1e293b)",
      }}
    >
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, 5]} intensity={0.5} />

      {/* Sphere */}
      <InteractiveSphere />
    </Canvas>
  );
}
