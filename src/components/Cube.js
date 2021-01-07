import React from 'react';
import { useBox } from 'use-cannon';
import { useState } from 'react';
import { useStore } from '../hooks/useStore';
import * as textures from '../textures';

export const Cube = ({ position, texture, ...props }) => {
  const [hover, setHover] = useState(null);
  const [addCube, removeCube, activeTexture] = useStore((state) => [
    state.addCube,
    state.removeCube,
    state.texture,
  ]);

  const [ref] = useBox(() => ({
    type: 'Static',
    position,
    ...props,
  }));

  const color = texture === 'glass' ? 'skyblue' : 'white';

  return (
    <mesh
      castShadow
      ref={ref}
      onPointerMove={(e) => {
        e.stopPropagation();
        setHover(Math.floor(e.faceIndex / 2));
      }}
      onPointerOut={() => {
        setHover(null);
      }}
      onClick={(e) => {
        e.stopPropagation();
        const clickedFace = Math.floor(e.faceIndex / 2);
        const { x, y, z } = ref.current.position;
        if (clickedFace === 0) {
          e.altKey ? removeCube(x, y, z) : addCube(x + 1, y, z, activeTexture);
          return;
        }
        if (clickedFace === 1) {
          e.altKey ? removeCube(x, y, z) : addCube(x - 1, y, z, activeTexture);
          return;
        }
        if (clickedFace === 2) {
          e.altKey ? removeCube(x, y, z) : addCube(x, y + 1, z, activeTexture);
          return;
        }
        if (clickedFace === 3) {
          e.altKey ? removeCube(x, y, z) : addCube(x, y - 1, z, activeTexture);
          return;
        }
        if (clickedFace === 4) {
          e.altKey ? removeCube(x, y, z) : addCube(x, y, z + 1, activeTexture);
          return;
        }
        if (clickedFace === 5) {
          e.altKey ? removeCube(x, y, z) : addCube(x, y, z - 1, activeTexture);
          return;
        }
      }}
    >
      {[...Array(6)].map((_, index) => (
        <meshStandardMaterial
          attachArray="material"
          map={textures[texture]}
          key={index}
          color={hover === index ? 'gray' : color}
          opacity={texture === 'glass' ? 0.7 : 1}
          transparent={true}
        />
      ))}
      <boxBufferGeometry attach="geometry" />
    </mesh>
  );
};
