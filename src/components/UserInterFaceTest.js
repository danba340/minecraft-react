import React from 'react'
import {useBox} from 'use-cannon'
import {  Html } from 'drei';
import "../index.css"


export  const UserInterFaceTest = () => {
 
    const [ref] = useBox(() => ({ mass: 1.2 }))
    return (
      <mesh ref={ref}  rotation={[0, 0, 0]}>
          <boxBufferGeometry args={[1, 2.5, 2.5]} attach="geometry" />
          <meshStandardMaterial
          attach="material"
          color="red"
          />
          <Html position={[0, 0, 0]} distanceFactor={10}        center 
          
          >
          <button onClick= {console.log("this is a button")} className = "button-test"> this is a button
          </button>
          </Html>
      </mesh>
    );
  }

