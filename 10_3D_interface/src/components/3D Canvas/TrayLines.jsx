import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function WavePlane() {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.z =
      Math.sin(clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10, 64, 64]} />
      <meshStandardMaterial
        color="lightgreen"
        wireframe
      />
    </mesh>
  );
}

export default function Background3() {
  return (
    <Canvas camera={{ position: [0, 3, 5] }} className="bg-black">
      <ambientLight intensity={0.5} />
      <WavePlane />
    </Canvas>
  );
}
