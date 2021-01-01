import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Sky } from 'drei';
import { Vector3 } from 'three';
import { Physics } from 'use-cannon';
import { Ground } from './components/Ground';
import { Cube } from './components/Cube';
import { Camera } from './components/Camera';
import { Player } from './components/Player';
import { Hud } from './components/Hud';
import { useStore } from './store';
import { coordToKey } from './utils';
import { useInterval } from './hooks/useInterval';

function App() {
  const [cubes, saveWorld] = useStore((state) => [
    state.cubes,
    state.saveWorld,
  ]);

  useInterval(
    () => {
      saveWorld(cubes);
      console.log('saved');
    },
    // every 10 seconds
    10000,
  );

  return (
    <Canvas shadowMap sRGB gl={{ alpha: false }}>
      <Camera />
      <Sky sunPosition={new Vector3(100, 10, 100)} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <Hud position={[0, 0, -2]} />
      <Physics gravity={[0, -30, 0]}>
        <Ground position={[0, 0.5, 0]} />
        <Player position={[0, 3, 10]} />
        {cubes.map((cube) => (
          <Cube
            key={coordToKey(...cube.pos)}
            type={cube.type}
            position={cube.pos}
          />
        ))}
      </Physics>
    </Canvas>
  );
}

export default App;
