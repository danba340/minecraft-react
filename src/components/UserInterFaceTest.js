import React from 'react'
import {useBox} from 'use-cannon'




export  const UserInterFaceTest = () => {
 
    const [ref, api] = useBox(() => ({ mass: 1 }))
    return (
      <mesh ref={ref}  rotation={[0, 0, 0]}>
          <boxBufferGeometry args={[1, 2.5, 2.5]} attach="geometry" />
        <meshStandardMaterial
          attach="material"
          color="red"
        />
      </mesh>
    );
  }

