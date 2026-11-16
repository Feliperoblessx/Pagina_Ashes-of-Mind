
import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  useGLTF,
  OrbitControls,
  Bounds,
  Center,
} from '@react-three/drei';

function Personaje({ modelo }) {
  const { scene } = useGLTF(modelo);

  return <primitive object={scene} />;
}

function Modelo3D({ modelo, margen = 1.5 }) {
  const controlsRef = useRef(null);

  const distanciaAnterior = useRef(null);
  const desplazamientoActual = useRef(0);

  // Desplazar cámara y objetivo juntos.
  // Esto cambia el encuadre, no la transformación del modelo.
  const ajustarEncuadre = () => {
    const controls = controlsRef.current;
    if (!controls) return;

    const camera = controls.object;

    const distancia = camera.position.distanceTo(
      controls.target
    );

    if (distanciaAnterior.current === null) {
      distanciaAnterior.current = distancia;
    }

    const acercamiento = Math.max(
      0,
      5 - distancia
    );

    const nuevoDesplazamiento = Math.min(
      acercamiento * 0.28,
      1.2
    );

    const diferencia =
      nuevoDesplazamiento - desplazamientoActual.current;

    camera.position.y += diferencia;
    controls.target.y += diferencia;

    desplazamientoActual.current = nuevoDesplazamiento;
    distanciaAnterior.current = distancia;

    controls.update();
  };

  const girar = () => {
    const controls = controlsRef.current;
    if (!controls) return;

    controls.rotateLeft(Math.PI / 4);
    controls.update();
  };

  const acercar = () => {
    const controls = controlsRef.current;
    if (!controls) return;

    controls.dollyOut(1.3);
    controls.update();

    ajustarEncuadre();
  };

  const alejar = () => {
    const controls = controlsRef.current;
    if (!controls) return;

    controls.dollyIn(1.3);
    controls.update();

    ajustarEncuadre();
  };

  return (
    <div className="modelo-3d">

      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 35,
          near: 0.1,
          far: 1000,
        }}
      >
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[3, 5, 4]}
          intensity={2}
        />

        <Suspense fallback={null}>
          <Bounds
            fit
            clip
            observe
            margin={margen}
          >
            <Center>
              <Personaje modelo={modelo} />
            </Center>
          </Bounds>
        </Suspense>

        <OrbitControls
          ref={controlsRef}
          makeDefault
          target={[0, 0, 0]}
          enableRotate={true}
          enableZoom={true}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.08}
          minDistance={2}
          maxDistance={12}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
          rotateSpeed={0.8}
        />

      </Canvas>

      <div className="model-tools">

        <button type="button" onClick={girar}>
          ↻ GIRAR
        </button>

        <button type="button" onClick={acercar}>
          + ZOOM
        </button>

        <button type="button" onClick={alejar}>
          − ZOOM
        </button>

      </div>

    </div>
  );
}

export default Modelo3D;
