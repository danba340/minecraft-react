import React from 'react';
import { usePlane } from 'use-cannon';
import { TextureLoader, RepeatWrapping } from 'three';
import grass from '../images/grass.jpg';
import { useStore } from '../store';

export const Ground = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  const texture = new TextureLoader().load(grass);
  const [addCube, cubeTexture] = useStore((state) => [
    state.addCube,
    state.texture,
  ]);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(100, 100);

  return (
    <mesh
      ref={ref}
      receiveShadow
      onClick={(e) => {
        e.stopPropagation();
        const [x, y, z] = Object.values(e.point).map((coord) =>
          Math.ceil(coord),
        );
        addCube(x, y, z, cubeTexture);
      }}
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial map={texture} attach="material" />
    </mesh>
  );
};
