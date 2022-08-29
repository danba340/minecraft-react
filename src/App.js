import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import { Ground } from './components/Ground';
import Cubes from './components/Cubes';
import { Player } from './components/Player';
import { Hud } from './components/Hud';
import { BlockSelector } from './components/BlockSelector';
import { Cursor } from './components/Cursor';

function App() {
  return (
    <>
      <Canvas shadowMap sRGB>
        <Sky sunPosition={[100, 20, 100]} />
        <ambientLight intensity={0.25} />
        <pointLight castShadow intensity={0.7} position={[100, 100, 100]} />
        <Hud position={[0, 0, -2]} />
        <Physics gravity={[0, -30, 0]}>
          <Ground position={[0, 0.5, 0]} />
          <Player position={[0, 3, 10]} />
          <Cubes />
        </Physics>
      </Canvas>
      <Cursor />
      <BlockSelector />
    </>
  );
}

export default App;
