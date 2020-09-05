import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import 'bootstrap/dist/js/bootstrap.min.js';
import Registro from '../src/page/Registro.jsx'



ReactDOM.render(<Registro/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
