import { usePlane } from '@react-three/cannon';

const Plane = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
      <meshBasicMaterial color={'black'} />
    </mesh>
  );
};

export default Plane;
