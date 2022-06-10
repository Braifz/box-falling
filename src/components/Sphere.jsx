import { useSphere } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Sphere = ({ position }) => {
  const [ref] = useSphere(
    () => ({
      mass: 999950,
      position: position,
    }),
    useRef(null)
  );
  return (
    <mesh receiveShadow castShadow ref={ref}>
      <sphereBufferGeometry args={[10, 30, 10]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export default Sphere;
