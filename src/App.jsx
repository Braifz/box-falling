import { Physics } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei';
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
        <Physics>
          <Plane />
          <Sphere />
          <Sphere />
          <Sphere />
          <Sphere />
        </Physics>
        <Camera />
        <OrbitControls />
      </ThreeScene>
    </div>
  );
};

export default App;
