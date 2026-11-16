
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Personaje({ modelo }) {
  const { scene } = useGLTF(modelo);

  return (
    <primitive
      object={scene}
      scale={1}
      position={[0, -1, 0]}
    />
  );
}

function Modelo3D({ modelo }) {
  return (
    <div className="modelo-3d">
      <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[3, 5, 4]}
          intensity={2}
        />

        <Suspense fallback={null}>
          <Personaje modelo={modelo} />
        </Suspense>

        <OrbitControls
          enablePan={false}
          minDistance={2}
          maxDistance={8}
        />
      </Canvas>
    </div>
  );
}

export default Modelo3D;
