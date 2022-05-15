import React from 'react'
import {useBox} from 'use-cannon'
import {  Html } from 'drei';

import "../index.css"


export  const UserInterFaceTest = () => {
 
    const [ref] = useBox(() => ({ mass: 1, type: 'Dynamic', position: [0, 0, 0], }));
    return (
      <mesh ref={ref}  rotation={[0, 0, 0]}>
          <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
          <meshStandardMaterial
          attach="material"
          color="red"
          />
          <Html position={[0, 0, 0]}  
          >
  
          </Html> 
      </mesh>
    );
  }

