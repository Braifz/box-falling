import { PerspectiveCamera } from '@react-three/drei';

const Camera = (props) => {
  return (
    <PerspectiveCamera
      makeDefault
      position={[0, 30, 150]}
      fov={25}
      {...props}
    />
  );
};

export default Camera;
