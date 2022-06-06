import { useBox } from '@react-three/cannon';

const Sphere = (props) => {
  const [ref] = useBox(() => ({ mass: 0.1, position: [0, 25, 0], ...props }));
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[5, 5, 5]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export default Sphere;
