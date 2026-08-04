"use client";

import {
  Html,
  Sparkles,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  MutableRefObject,
  useMemo,
  useRef,
} from "react";
import * as THREE from "three";

type IslandSceneProps = {
  progress: MutableRefObject<number>;
};

/**
 * Stylized Sri Lanka outline.
 *
 * Coordinates are normalized for our scene rather than
 * representing geographic longitude/latitude directly.
 */
const sriLankaOutline: [number, number][] = [
  [-0.18, 3.2],
  [0.08, 3.05],
  [0.35, 2.75],
  [0.52, 2.4],
  [0.7, 2.05],
  [0.9, 1.7],
  [1.05, 1.25],
  [1.18, 0.8],
  [1.27, 0.3],
  [1.23, -0.2],
  [1.15, -0.65],
  [1.05, -1.05],
  [0.92, -1.45],
  [0.72, -1.9],
  [0.5, -2.3],
  [0.25, -2.72],
  [0.02, -3.05],
  [-0.2, -3.35],
  [-0.4, -3.05],
  [-0.62, -2.7],
  [-0.82, -2.25],
  [-0.97, -1.8],
  [-1.05, -1.35],
  [-1.14, -0.9],
  [-1.2, -0.4],
  [-1.18, 0.1],
  [-1.12, 0.55],
  [-1.02, 1.0],
  [-0.92, 1.35],
  [-0.78, 1.72],
  [-0.64, 2.03],
  [-0.55, 2.35],
  [-0.48, 2.63],
  [-0.38, 2.92],
];

function createIslandShape() {
  const shape = new THREE.Shape();

  const first = sriLankaOutline[0];

  shape.moveTo(first[0], first[1]);

  for (let i = 1; i < sriLankaOutline.length; i++) {
    shape.lineTo(
      sriLankaOutline[i][0],
      sriLankaOutline[i][1]
    );
  }

  shape.closePath();

  return shape;
}

function DestinationMarker({
  position,
  label,
  sublabel,
  progress,
  appearAt,
}: {
  position: [number, number, number];
  label: string;
  sublabel: string;
  progress: MutableRefObject<number>;
  appearAt: number;
}) {
  const dotRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useFrame((state) => {
    const p = progress.current;

    const visibility = THREE.MathUtils.clamp(
      (p - appearAt) / 0.1,
      0,
      1
    );

    if (dotRef.current) {
      dotRef.current.scale.setScalar(
        0.6 + visibility * 0.4
      );
    }

    if (glowRef.current) {
      const pulse =
        1 +
        Math.sin(state.clock.elapsedTime * 2) *
          0.15;

      glowRef.current.scale.setScalar(
        pulse * visibility
      );

      const material =
        glowRef.current
          .material as THREE.MeshBasicMaterial;

      material.opacity = visibility * 0.22;
    }

    if (labelRef.current) {
      labelRef.current.style.opacity =
        visibility.toString();

      labelRef.current.style.transform =
        `translateY(${(1 - visibility) * 10}px)`;
    }
  });

  return (
    <group position={position}>
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.11, 16, 16]} />

        <meshBasicMaterial
          color="#e8d7b5"
          transparent
          opacity={0}
        />
      </mesh>

      <mesh ref={dotRef}>
        <sphereGeometry args={[0.035, 16, 16]} />

        <meshBasicMaterial color="#f0dfbd" />
      </mesh>

      <Html
        position={[0.16, 0.05, 0]}
        center={false}
        distanceFactor={6}
      >
        <div
          ref={labelRef}
          className="pointer-events-none whitespace-nowrap opacity-0"
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#e8d7b5]">
            {label}
          </p>

          <p className="mt-1 text-[7px] uppercase tracking-[0.25em] text-white/45">
            {sublabel}
          </p>
        </div>
      </Html>
    </group>
  );
}

function AnimatedRoute({
  progress,
}: {
  progress: MutableRefObject<number>;
}) {
  const lineRef =
    useRef<THREE.Line<
      THREE.BufferGeometry,
      THREE.LineBasicMaterial
    > | null>(null);

  const geometry = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.42, 0.4, 0.31),
      new THREE.Vector3(-0.18, 0.72, 0.34),
      new THREE.Vector3(0.03, 1.05, 0.37),
      new THREE.Vector3(0.22, 1.35, 0.4),
    ]);

    const points = curve.getPoints(100);

    return new THREE.BufferGeometry().setFromPoints(
      points
    );
  }, []);

  useFrame(() => {
    const p = progress.current;

    const routeProgress =
      THREE.MathUtils.clamp(
        (p - 0.68) / 0.22,
        0,
        1
      );

    geometry.setDrawRange(
      0,
      Math.floor(routeProgress * 101)
    );

    if (lineRef.current) {
      lineRef.current.material.opacity =
        routeProgress * 0.85;
    }
  });

  return (
    <primitive
      object={
        new THREE.Line(
          geometry,
          new THREE.LineBasicMaterial({
            color: "#e8d7b5",
            transparent: true,
            opacity: 0,
          })
        )
      }
      ref={lineRef}
    />
  );
}

export default function IslandScene({
  progress,
}: IslandSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const islandMaterialRef =
    useRef<THREE.MeshStandardMaterial>(null);

  const highlandsRef =
    useRef<THREE.Group>(null);

  const shape = useMemo(
    () => createIslandShape(),
    []
  );

  const islandGeometry = useMemo(() => {
    const geometry = new THREE.ExtrudeGeometry(
      shape,
      {
        depth: 0.22,
        bevelEnabled: true,
        bevelSegments: 4,
        bevelSize: 0.05,
        bevelThickness: 0.06,
        curveSegments: 3,
      }
    );

    geometry.center();

    return geometry;
  }, [shape]);

  useFrame((state) => {
    const p = progress.current;

    if (groupRef.current) {
      /**
       * Island emergence.
       */
      const entrance =
        THREE.MathUtils.clamp(
          p / 0.22,
          0,
          1
        );

      groupRef.current.scale.setScalar(
        0.65 + entrance * 0.35
      );

      groupRef.current.position.z =
        -0.8 + entrance * 0.8;

      /**
       * Slow cinematic rotation.
       */
      groupRef.current.rotation.z =
        -0.05 +
        p * 0.08 +
        Math.sin(
          state.clock.elapsedTime * 0.12
        ) *
          0.01;

      groupRef.current.rotation.x =
        -0.2 + p * 0.08;
    }

    if (islandMaterialRef.current) {
      const visibility =
        THREE.MathUtils.clamp(
          p / 0.18,
          0,
          1
        );

      islandMaterialRef.current.opacity =
        visibility;
    }

    /**
     * Highlands rise as user approaches.
     */
    if (highlandsRef.current) {
      const mountainProgress =
        THREE.MathUtils.clamp(
          (p - 0.43) / 0.25,
          0,
          1
        );

      highlandsRef.current.scale.z =
        0.1 + mountainProgress * 0.9;

      highlandsRef.current.position.z =
        0.18 +
        mountainProgress * 0.08;
    }
  });

  return (
    <>
      {/* Atmosphere */}
      <ambientLight intensity={0.9} />

      <directionalLight
        position={[4, 5, 8]}
        intensity={3.5}
        color="#f3dfb6"
      />

      <directionalLight
        position={[-5, -2, 4]}
        intensity={1.8}
        color="#1f6554"
      />

      <pointLight
        position={[0, 2, 4]}
        intensity={10}
        distance={10}
        color="#d1b57c"
      />

      <Sparkles
        count={90}
        scale={[12, 9, 5]}
        size={1}
        speed={0.12}
        opacity={0.22}
        color="#d8c59f"
      />

      <group ref={groupRef}>
        {/* Island Base */}
        <mesh geometry={islandGeometry}>
          <meshStandardMaterial
            ref={islandMaterialRef}
            color="#163b31"
            roughness={0.72}
            metalness={0.08}
            transparent
            opacity={0}
          />
        </mesh>

        {/* Inner contour */}
        <mesh
          geometry={islandGeometry}
          position={[0, 0, 0.07]}
          scale={[0.94, 0.94, 1]}
        >
          <meshBasicMaterial
            color="#254f42"
            transparent
            opacity={0.28}
            wireframe
          />
        </mesh>

        {/* Highlands */}
        <group ref={highlandsRef}>
          <mesh position={[0.02, 0.72, 0.32]}>
            <icosahedronGeometry
              args={[0.42, 1]}
            />

            <meshStandardMaterial
              color="#315b45"
              roughness={1}
            />
          </mesh>

          <mesh
            position={[-0.28, 0.58, 0.27]}
            scale={[0.8, 0.9, 0.65]}
          >
            <icosahedronGeometry
              args={[0.36, 1]}
            />

            <meshStandardMaterial
              color="#294d3c"
              roughness={1}
            />
          </mesh>

          <mesh
            position={[0.32, 0.38, 0.25]}
            scale={[0.7, 0.75, 0.55]}
          >
            <icosahedronGeometry
              args={[0.33, 1]}
            />

            <meshStandardMaterial
              color="#365f48"
              roughness={1}
            />
          </mesh>
        </group>

        {/* Colombo */}
        <DestinationMarker
          position={[-0.42, 0.4, 0.34]}
          label="Colombo"
          sublabel="Western Coast"
          progress={progress}
          appearAt={0.57}
        />

        {/* Kandy */}
        <DestinationMarker
          position={[0.03, 1.05, 0.42]}
          label="Kandy"
          sublabel="Central Highlands"
          progress={progress}
          appearAt={0.63}
        />

        {/* Ella */}
        <DestinationMarker
          position={[0.22, 1.35, 0.45]}
          label="Ella"
          sublabel="The Highlands"
          progress={progress}
          appearAt={0.68}
        />

        <AnimatedRoute progress={progress} />
      </group>
    </>
  );
}