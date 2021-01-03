import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Sky } from 'drei';
import { Physics } from 'use-cannon';
import { Ground } from './components/Ground';
import { Cube } from './components/Cube';
import { Player } from './components/Player';
import { Hud } from './components/Hud';
import { useStore } from './store';
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
    <Canvas shadowMap sRGB>
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={0.25} />
      <pointLight castShadow intensity={0.7} position={[100, 100, 100]} />
      <Hud position={[0, 0, -2]} />
      <Physics gravity={[0, -30, 0]}>
        <Ground position={[0, 0.5, 0]} />
        <Player position={[0, 3, 10]} />
        {cubes.map((cube) => (
          <Cube
            key={cube.pos
              .map((coord) => coord.toString().padStart(3, '0'))
              .join('')}
            type={cube.type}
            position={cube.pos}
          />
        ))}
      </Physics>
    </Canvas>
  );
}

export default App;
