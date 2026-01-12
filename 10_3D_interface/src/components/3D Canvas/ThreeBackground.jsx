import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import { useRef, useState } from "react";

export default function ThreeBackground() {
  const ref = useRef();
  const [positions] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );

  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, // Behind everything
      }}
    >
      <Points
        ref={ref}
        positions={positions}
        stride={3}
        frustumCulled
        rotation={[0, 0, 0]}
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </Canvas>
  );
}
