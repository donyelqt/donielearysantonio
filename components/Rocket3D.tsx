import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Float, PerspectiveCamera, Environment, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const RocketMesh = () => {
  const meshRef = useRef<THREE.Group>(null);
  const fireRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
    if (fireRef.current) {
      // Flicker effect
      fireRef.current.scale.y = 0.8 + Math.random() * 0.4;
      if (fireRef.current.material instanceof THREE.Material) {
        fireRef.current.material.opacity = 0.6 + Math.random() * 0.4;
      }
    }
  });

  // Create a proper fin shape
  const finShape = useMemo(() => {
    const shape = new THREE.Shape();
    // Draw a swept fin shape
    shape.moveTo(0, 0); // Top of attachment
    shape.lineTo(0.8, -0.8); // Tip
    shape.lineTo(0.2, -1.2); // Bottom outer
    shape.lineTo(0, -1.0); // Bottom attachment
    shape.closePath();
    return shape;
  }, []);

  // Create rivet positions
  const rivets = useMemo(() => {
    return new Array(8).fill(0).map((_, i) => {
      const angle = (i / 8) * Math.PI * 2;
      return [Math.cos(angle) * 0.24, 0.03, Math.sin(angle) * 0.24] as [number, number, number];
    });
  }, []);

  const extrudeSettings = {
    steps: 1,
    depth: 0.1,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 3,
  };

  return (
    <group ref={meshRef} rotation={[0, 0, Math.PI / 6]}>
      {/* Body - Satin White */}
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 2.2, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.1}
          roughness={0.2}
          emissive="#ffffff"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Detail Rings - Added to break up the body for a more 'engineered' look */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.71, 0.71, 0.05, 32]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.71, 0.71, 0.05, 32]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Nose Cone - Red, Rounded Cone */}
      <mesh position={[0, 1.4, 0]}>
        <cylinderGeometry args={[0, 0.7, 1.0, 32]} />
        <meshStandardMaterial
          color="#EA3323" // Apple Red
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>

      {/* Bottom Cap - Darker Grey Engine Mount */}
      <mesh position={[0, -1.35, 0]}>
        <cylinderGeometry args={[0.6, 0.4, 0.3, 32]} />
        <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* High-Precision Porthole Window */}
      <group position={[0, 0.4, 0.69]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.29, 0.29, 0.06, 32]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.1} />
        </mesh>

        <mesh position={[0, 0.01, 0]}>
          <cylinderGeometry args={[0.22, 0.22, 0.07, 32]} />
          <meshStandardMaterial
            color="#38bdf8"
            metalness={0.9}
            roughness={0.1}
            emissive="#0ea5e9"
            emissiveIntensity={0.3}
          />
        </mesh>

        {rivets.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.015, 8, 8]} />
            <meshStandardMaterial color="#475569" metalness={0.8} roughness={0.2} />
          </mesh>
        ))}
      </group>

      {/* Fins (3 way symmetry, Red) - Swept Shape */}
      {[0, 1, 2].map((i) => (
        <group key={i} rotation={[0, (Math.PI * 2 / 3) * i, 0]}>
          <group position={[0.6, -0.2, 0]}>
            <mesh position={[0, 0, -0.05]}>
              <extrudeGeometry args={[finShape, extrudeSettings]} />
              <meshStandardMaterial color="#EA3323" metalness={0.3} roughness={0.4} />
            </mesh>
          </group>
        </group>
      ))}

      {/* Fire */}
      <mesh ref={fireRef} position={[0, -2.2, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.3, 1.6, 16]} />
        <meshBasicMaterial color="#fbbf24" transparent opacity={0.8} />
        <mesh position={[0, -0.2, 0]}>
          <coneGeometry args={[0.15, 1.2, 16]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
        </mesh>
      </mesh>

      {/* Point Light for Engine */}
      <pointLight position={[0, -3, 0]} color="#f59e0b" intensity={3} distance={6} />
    </group>
  );
};

const Rocket3D = () => {
  return (
    <div className="w-full h-[300px] lgl:h-[500px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, 5, -5]} color="#38bdf8" intensity={0.8} />
        <Environment preset="studio" />
        <Sparkles count={100} scale={12} size={6} speed={0.4} opacity={0.6} color="#fbbf24" />

        <Float
          speed={2}
          rotationIntensity={0.6}
          floatIntensity={1.2}
        >
          <RocketMesh />
        </Float>
      </Canvas>
    </div>
  );
};

export default Rocket3D;
