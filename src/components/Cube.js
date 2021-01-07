import React from 'react';
import { useBox } from 'use-cannon';
import { useState } from 'react';
import { useStore } from '../hooks/useStore';
import * as textures from '../textures';

export const Cube = ({ position, type, ...props }) => {
  const [hover, set] = useState(null);
  const [addCube, removeCube, texture] = useStore((state) => [
    state.addCube,
    state.removeCube,
    state.texture,
  ]);

  const [ref] = useBox(() => ({
    type: 'Static',
    position,
    ...props,
  }));

  const color = type === 'glass' ? 'skyblue' : 'white';

  return (
    <mesh
      castShadow
      ref={ref}
      onPointerMove={(e) => {
        e.stopPropagation();
        set(Math.floor(e.faceIndex / 2));
      }}
      onPointerOut={() => {
        set(null);
      }}
      onClick={(e) => {
        e.stopPropagation();
        const clickedFace = Math.floor(e.faceIndex / 2);
        const { x, y, z } = ref.current.position;
        if (clickedFace === 0) {
          e.altKey ? removeCube(x, y, z) : addCube(x + 1, y, z, texture);
          return;
        }
        if (clickedFace === 1) {
          e.altKey ? removeCube(x, y, z) : addCube(x - 1, y, z, texture);
          return;
        }
        if (clickedFace === 2) {
          e.altKey ? removeCube(x, y, z) : addCube(x, y + 1, z, texture);
          return;
        }
        if (clickedFace === 3) {
          e.altKey ? removeCube(x, y, z) : addCube(x, y - 1, z, texture);
          return;
        }
        if (clickedFace === 4) {
          e.altKey ? removeCube(x, y, z) : addCube(x, y, z + 1, texture);
          return;
        }
        if (clickedFace === 5) {
          e.altKey ? removeCube(x, y, z) : addCube(x, y, z - 1, texture);
          return;
        }
      }}
    >
      {[...Array(6)].map((_, index) => (
        <meshStandardMaterial
          attachArray="material"
          map={textures[type]}
          key={index}
          color={hover === index ? 'gray' : color}
          opacity={type === 'glass' ? 0.7 : 1}
          transparent={true}
        />
      ))}
      <boxBufferGeometry attach="geometry" />
    </mesh>
  );
};
