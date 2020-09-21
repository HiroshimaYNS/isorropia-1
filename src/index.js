//Dependencias
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import '../src/images/Fondo isorropia.jpg'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import 'bootstrap/dist/js/bootstrap.min.js';
//paginas
import InicioSesion from '../src/pages/InicioSesion.jsx'
import Receta1 from '../src/pages/Receta1.jsx'
import Receta2 from '../src/pages/Receta2.jsx'
import Receta3 from '../src/pages/Receta3.jsx';
import Receta4 from '../src/pages/Receta4.jsx';
import Receta5 from '../src/pages/Receta5.jsx';


ReactDOM.render(
    <>
    <InicioSesion/>
    </>,
    document.getElementById('root')
);
ReactDOM.render(
    <>
    <Receta1/>
    </>,
    document.getElementById('root')
);
ReactDOM.render(
    <>
    <Receta2/>
    </>,
    document.getElementById('root')
);
ReactDOM.render(
    <>
    <Receta3/>
    </>,
    document.getElementById('root')
);
ReactDOM.render(
    <>
    <Receta4/>
    </>,
    document.getElementById('root')
);
ReactDOM.render(
    <>
    <Receta5/>
    </>,
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


