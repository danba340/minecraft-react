import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Sky, Stats, Stars } from 'drei';
import { Physics } from 'use-cannon';
import { Ground } from './components/Ground';
import Cubes from './components/Cubes';
import { Player } from './components/Player';


function App() {
  return (
    <Canvas shadowMap sRGB>
      <Sky sunPosition={[100, 20, 100]}
      mieDirectionalG={0.275}
  inclination={0} // Sun elevation angle from 0 to 1 (default=0)
  azimuth={0.25}
  rayleigh = {0.116}
      
       />

<Stars
  radius={100} // Radius of the inner sphere (default=100)
  depth={50} // Depth of area where stars should fit (default=50)
  count={5000} // Amount of stars (default=5000)
  factor={4} // Size factor (default=4)
  saturation={0} // Saturation 0-1 (default=0)
  fade // Faded dots (default=false)
/>
      <ambientLight intensity={0.25} />
      <pointLight castShadow intensity={0.7} position={[100, 100, 100]} />
   
      <Physics gravity={[0, -30, 0]}>
        <Ground position={[0,0, 0]} />
        <Player position={[0, 3, 10]} />
        <Cubes />
      </Physics>
      <Stats /> 
    </Canvas>
  );
}

export default App;
