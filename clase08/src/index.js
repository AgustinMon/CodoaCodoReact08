import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Lista from './componentes/lista';
import Audio from './componentes/audio';
import Video from './componentes/video';
import Input from './componentes/input';
import Boton from './componentes/boton';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Boton texto="texto" css_clase="unaclase"/>
    <Audio clase="miclase" />
    <Input/>
    <Video url="" width="" height="" css_class=""/>
    <Lista elementos="" clase=""/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
