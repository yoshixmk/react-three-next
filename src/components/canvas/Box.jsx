import useStore from '@/helpers/store'
import { A11y } from '@react-three/a11y'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

const BoxComponent = ({ route }) => {
  const router = useStore((s) => s.router)
  const mesh = useRef()
  const [hovered, setHover] = useState(false)
  useFrame((state, delta) =>
    mesh.current
      ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
      : null
  )
  return (
    <>
    <A11y
      role='link'
      href={route}
      actionCall={() => {
        router.push(route)
      }}
    >
      <mesh
        ref={mesh}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial
          color={hovered ? 'hotpink' : route === '/' ? 'darkgrey' : 'orange'}
        />
      </mesh>
    </A11y>
    <A11y
      role='link'
      href={route}
      actionCall={() => {
        router.push(route)
      }}
    >
      <mesh
        ref={mesh}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        position={[1, 1, 0]}
      >
        <circleGeometry args={[1, 6]} />
        <meshBasicMaterial
          color={hovered ? 'hotpink' : route === '/' ? 'darkgrey' : 'orange'}
        />
      </mesh>
    </A11y>
    </>
  )
}
export default BoxComponent
