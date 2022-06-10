import { useRef } from 'react';
import { usePlane } from '@react-three/cannon';

const Plane = (props) => {
  const [ref] = usePlane(
    () => ({
      ...props,
    }),
    useRef(null)
  );
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry args={[150, 150]} />
      <meshBasicMaterial color="#171717" />
    </mesh>
  );
};

export default Plane;
