"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { MutableRefObject, useRef } from "react";
import * as THREE from "three";

type CameraRigProps = {
  progress: MutableRefObject<number>;
};

export default function CameraRig({ progress }: CameraRigProps) {
  const { camera, pointer } = useThree();

  const targetPosition = useRef(new THREE.Vector3());
  const lookTarget = useRef(new THREE.Vector3());

  useFrame(() => {
    const p = progress.current;

    // Camera journey:
    // far above island -> closer -> slightly toward highlands
    const start = new THREE.Vector3(0, 1.8, 9.5);
    const middle = new THREE.Vector3(0, 1.2, 7);
    const end = new THREE.Vector3(0.25, 0.7, 5.1);

    if (p < 0.55) {
      targetPosition.current.lerpVectors(
        start,
        middle,
        p / 0.55
      );
    } else {
      targetPosition.current.lerpVectors(
        middle,
        end,
        (p - 0.55) / 0.45
      );
    }

    // Mouse / pointer parallax
    targetPosition.current.x += pointer.x * 0.35;
    targetPosition.current.y += pointer.y * 0.18;

    camera.position.lerp(targetPosition.current, 0.045);

    lookTarget.current.set(
      0.1 + pointer.x * 0.12,
      0.15 + pointer.y * 0.06,
      0
    );

    camera.lookAt(lookTarget.current);
  });

  return null;
}