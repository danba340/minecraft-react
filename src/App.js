import { Canvas } from "@react-three/fiber"
import { Sky, PointerLockControls } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import { Ground } from "./Ground"
import { Player } from "./Player"
import { Cube, Cubes } from "./Cube"

// The original was made by Maksim Ivanow: https://www.youtube.com/watch?v=Lc2JvBXMesY&t=124s
// This demo needs pointer-lock, that works only if you open it in a new window
// Controls: WASD + left click

export default function App() {
  return (
    <Canvas shadows gl={{ alpha: false }} camera={{ fov: 45 }}>
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <Physics gravity={[0, -30, 0]}>
        <Ground />
        <Player />
        <Cube position={[0, 0.5, -10]} />
        <Cubes />
      </Physics>
      <PointerLockControls />
    </Canvas>
  )
}
