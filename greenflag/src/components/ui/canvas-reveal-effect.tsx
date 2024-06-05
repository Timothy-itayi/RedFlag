"use client";
import { cn } from "../../../utils/cn";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useMemo } from "react";
import * as THREE from "three";

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  containerClassName,
  image1,
  image2,
}: {
  animationSpeed?: number;
  containerClassName?: string;
  image1: string;
  image2: string;
}) => {
  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <div className="h-full w-full">
        <Canvas>
          <ImageBlend animationSpeed={animationSpeed} image1={image1} image2={image2} />
        </Canvas>
      </div>
    </div>
  );
};

const ImageBlend = ({
  animationSpeed,
  image1,
  image2,
}: {
  animationSpeed: number;
  image1: string;
  image2: string;
}) => {
  const { size } = useThree();
  const ref = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(() => ({
    u_image1: { value: new THREE.TextureLoader().load(image1) },
    u_image2: { value: new THREE.TextureLoader().load(image2) },
    u_time: { value: 0 },
    u_resolution: { value: new THREE.Vector2(size.width, size.height) },
  }), [image1, image2, size]);

  useFrame(({ clock }) => {
    if (ref.current) {
      const material = ref.current.material as THREE.ShaderMaterial;
      material.uniforms.u_time.value = (clock.getElapsedTime() * animationSpeed) % 1;
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          precision mediump float;
          uniform float u_time;
          uniform sampler2D u_image1;
          uniform sampler2D u_image2;
          uniform vec2 u_resolution;
          varying vec2 vUv;

          void main() {
            vec2 uv = vUv;
            vec4 color1 = texture2D(u_image1, uv);
            vec4 color2 = texture2D(u_image2, uv);
            gl_FragColor = mix(color1, color2, u_time);
          }
        `}
      />
    </mesh>
  );
};
