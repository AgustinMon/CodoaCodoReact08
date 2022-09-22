import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Boton from './componentes/boton';
import Video from './componentes/video';
import Audio from './componentes/audio';
import Input from './componentes/input';
import Lista from './componentes/lista';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Boton/>
    <Video/>
    <Audio/>
    <Input/>
    <Lista/>
  </React.StrictMode>
);