import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function ProductModel() {
  const { scene } = useGLTF("/low_poly_object.glb");
  return <primitive object={scene} scale={1.5} />;
}

export default function ProductScene() {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.5} />
      <Environment preset="studio" />
      <ProductModel />
      <OrbitControls />
    </Canvas>
  );
}
