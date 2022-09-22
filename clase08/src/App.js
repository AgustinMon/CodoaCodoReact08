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
        <Input />
        <Lista elementos={["pera","manzana","kiwi"]}/>
        <Audio />
        <Boton />
        <Video url="../media/movie.mp4" titulo="deberia salir un video de un oso"/>
      </main>
      <footer className="App-footer">
        <p>Agustin</p>
        <p>comision 22801</p>
      </footer>
    </div>
  );
}

export default App;
