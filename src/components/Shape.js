import React from 'react'
import {useSphere} from 'use-cannon'




export  const Shape = () => {

    const [ref, api] = useSphere(() => ({ mass: 1 }))
    return (
      <mesh ref={ref}  rotation={[0, 0, 0]}>
          <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
        <meshStandardMaterial
          attach="material"
          color="yellow"
        />
      </mesh>
    );
  }

