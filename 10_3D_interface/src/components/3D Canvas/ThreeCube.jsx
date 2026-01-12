import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function Cube() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.05;
    ref.current.rotation.y += 0.05;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function CubeScene() {
  return (
    <Canvas camera={{ position: [4, 4, 4] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <Cube />
      <OrbitControls />
    </Canvas>
  );
}
