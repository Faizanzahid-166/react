import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";

/* ---------- Planet Component ---------- */
function Planet({ size, distance, speed, color }) {
  const planetRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    planetRef.current.position.x = Math.sin(t) * distance;
    planetRef.current.position.z = Math.cos(t) * distance;
    planetRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

/* ---------- Orbit Ring Component ---------- */
function OrbitRing({ distance }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[distance - 0.02, distance + 0.02, 64]} />
      <meshBasicMaterial color="white" side={2} />
    </mesh>
  );
}

/* ---------- Sun ---------- */
function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial
        emissive="yellow"
        emissiveIntensity={1.5}
        color="orange"
      />
    </mesh>
  );
}

/* ---------- Solar System ---------- */
export default function SolarSystem() {
  const planets = [
    { size: 0.5, distance: 5, speed: 1.6, color: "gray" },       // Mercury
    { size: 0.9, distance: 7, speed: 1.2, color: "orange" },     // Venus
    { size: 1, distance: 9, speed: 1, color: "blue" },           // Earth
    { size: 0.8, distance: 11, speed: 0.8, color: "red" },       // Mars
    { size: 1.8, distance: 14, speed: 0.6, color: "brown" },     // Jupiter
    { size: 1.5, distance: 18, speed: 0.5, color: "goldenrod" }, // Saturn
    { size: 1.3, distance: 22, speed: 0.4, color: "lightblue" }, // Uranus
    { size: 1.2, distance: 26, speed: 0.3, color: "darkblue" },  // Neptune
  ];

  return (
    <Canvas camera={{ position: [0, 15, 30], fov: 50 }}>
      {/* Space */}
      <Stars radius={100} depth={50} count={5000} factor={4} />

      {/* Lights */}
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={2} />

      {/* Sun */}
      <Sun />

      {/* Planets + Orbit Rings */}
      {planets.map((p, index) => (
        <group key={index}>
          <Planet {...p} />
          <OrbitRing distance={p.distance} />
        </group>
      ))}

      {/* Controls */}
      <OrbitControls enableZoom enablePan />
    </Canvas>
  );
}
