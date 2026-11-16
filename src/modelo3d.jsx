
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
  const controlsRef = useRef();

  // Guardar el encuadre inicial de la cámara
  const distanciaInicial = useRef(null);
  const alturaInicial = useRef(null);

  // Ajustar el encuadre solamente al utilizar el zoom
  const ajustarZoom = (acercar) => {
    const controls = controlsRef.current;

    if (!controls) return;

    if (distanciaInicial.current === null) {
      distanciaInicial.current =
        controls.object.position.distanceTo(controls.target);

      alturaInicial.current = controls.target.y;
    }

    // Aplicar zoom
    if (acercar) {
      controls.dollyOut(1.3);
    } else {
      controls.dollyIn(1.3);
    }

    // Calcular cuánto se ha acercado la cámara
    const distanciaActual =
      controls.object.position.distanceTo(controls.target);

    const diferencia = Math.max(
      0,
      distanciaInicial.current - distanciaActual
    );

    // Elevar el punto de enfoque para bajar visualmente al personaje
    controls.target.y =
      alturaInicial.current + diferencia * 0.18;

    controls.update();
  };

  // Girar la cámara 45 grados
  const girar = () => {
    const controls = controlsRef.current;

    if (!controls) return;

    controls.rotateLeft(Math.PI / 4);
    controls.update();
  };

  // Acercar
  const acercar = () => {
    ajustarZoom(true);
  };

  // Alejar
  const alejar = () => {
    ajustarZoom(false);
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
          <Bounds fit clip observe margin={margen}>
            <Center>
              <Personaje modelo={modelo} />
            </Center>
          </Bounds>
        </Suspense>

        <OrbitControls
          ref={controlsRef}
          makeDefault
          enableRotate={true}
          enableZoom={false}
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
