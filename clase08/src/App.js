import './App.css';
import Boton from './componentes/boton/boton';
import Video from './componentes/video/video';
import Audio from './componentes/audio/audio';
import Input from './componentes/input/input';
import Lista from './componentes/lista/lista';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Codo a codo React Clase 08 en adelante
      </header>
      <main>
        <Boton />
        <Video />
        <Audio />
        <Input />
        <Lista />
      </main>
      <header className="App-footer">
        <p>Agustin</p>
        <p>comision 22801</p>
      </header>
    </div>
  );
}

export default App;
