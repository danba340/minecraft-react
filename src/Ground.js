import * as THREE from "three"
import { useLoader } from "@react-three/fiber"
import { usePlane } from "@react-three/cannon"
import glass from "./assets/glass.png"

export const Ground = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  const texture = useLoader(THREE.TextureLoader, glass)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial map={texture} map-repeat={[100000, 100000]} color="white" />
    </mesh>
  )
}
