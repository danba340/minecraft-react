import { Canvas } from "@react-three/fiber"
import { Sky, Stars,  PointerLockControls, Stats } from "@react-three/drei"
import { Physics } from "@react-three/cannon"
import { Ground } from "./Ground"
import { Player } from "./Player"
import { Cubes } from "./Cube"
import { UserInterFaceTest } from "./userInterfaceTest"
// refactored and updated to remove use-cannon and drei. Much more utilities available now. still need to fix some small lighting issues but almost there. 


export default function App() {
  return (
    <Canvas shadows gl={{ alpha: false }} camera={{ fov: 45 }}>
      <Stats />
      <Sky sunPosition={[100, 20, 100]} />
  <Stars />
      <ambientLight intensity={0.5} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <Physics gravity={[0, -30, 0]}>
        <Ground />
        <Player />
      <UserInterFaceTest />
        <Cubes />
      </Physics>
      <PointerLockControls />
    </Canvas>
  )
}
