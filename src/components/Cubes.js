import React from 'react';
import { useStore } from '../hooks/useStore';
import { useInterval } from '../hooks/useInterval';

import Cube from './Cube';

export default function Cubes() {
  const [cubes, addCube, removeCube, saveWorld] = useStore((state) => [
    state.cubes,
    state.addCube,
    state.removeCube,
    state.saveWorld,
  ]);

  useInterval(
    () => saveWorld(cubes),
    10000, // 10s
  );

  return cubes.map((cube) => {
    return (
      <Cube
        key={cube.key}
        texture={cube.texture}
        position={cube.pos}
        addCube={addCube}
        removeCube={removeCube}
      />
    );
  });
}
