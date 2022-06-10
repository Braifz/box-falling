import { Physics } from '@react-three/cannon';
import { OrbitControls, Stars, ContactShadows } from '@react-three/drei';
import ThreeScene from './components/ThreeScene';
import Plane from './components/Plane';
import Sphere from './components/Sphere';
import Camera from './components/Camera';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>hello :D</h1>
      <ThreeScene>
        <ambientLight />
        <directionalLight />
        <Stars />
        <ContactShadows
          position={[0, 0, 0]}
          opacity={1}
          scale={550}
          blur={1}
          far={170}
          color="white"
        />
        <Physics>
          <Plane rotation={[-Math.PI / 2, 0, 0]} />
          <Sphere position={[0, 20, 10]} />
          <Sphere position={[0, 40, 10]} />
          <Sphere position={[0, 60, 10]} />
          <Sphere position={[0, 80, 10]} />
          <Sphere position={[0, 100, 10]} />
          <Sphere position={[0, 120, 10]} />
          <Sphere position={[0, 140, 10]} />
          <Sphere position={[0, 160, 10]} />
        </Physics>
        <Camera />
        <OrbitControls autoRotate />
      </ThreeScene>
    </div>
  );
};

export default App;
