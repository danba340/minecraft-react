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
    () => {
      saveWorld(cubes);
    },
    // every 10 seconds
    10000,
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
