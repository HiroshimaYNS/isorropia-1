//Dependencias
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import '../src/images/Fondo isorropia.jpg'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import 'bootstrap/dist/js/bootstrap.min.js';
//paginas 

import Aplicacion from '../src/components/Aplicacion.jsx'


ReactDOM.render(
    <>
    <Aplicacion/>
    </>,
    document.getElementById('root')
);