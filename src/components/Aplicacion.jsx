import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//Paginas
import InicioSesion from '../pages/InicioSesion.jsx';
import Registro from '../pages/Registro.jsx'
import Menu from '../pages/Menu'
import MenuR from '../pages/MenuR'
import Rutina from '../pages/Rutina'
//Layout
import LayoutR from './LayoutR'
import '../styles/Inicio_Sesion.css'
// Recetas
import Receta1 from '../pages/Receta1.jsx'
import Receta2 from '../pages/Receta2.jsx'
import Receta3 from '../pages/Receta3.jsx'
import Receta4 from '../pages/Receta4.jsx'
import Receta5 from '../pages/Receta5.jsx'
import Usuario from '../pages/Usuario.jsx';
//Valor Nutricional
import ValorNutricional from '../pages/ValorNutricional'


function Aplicacion(){
    return(
        <BrowserRouter>
            <Switch>
            <Route exact path = '/inicio' component = {InicioSesion} />
            <Route exact path = '/inicio/registro' component = {Registro} />
            <Route exact path = '/menu' component = {Menu} />
            <Route exact path = '/menuR' component = {MenuR} />
            <Route exact path = '/rutina' component = {Rutina} />
            
            {/*Ruta recetas*/}
            <Route exact path = '/receta/1' component = {Receta1} />
            <Route exact path = '/receta/2' component = {Receta2} />
            <Route exact path = '/receta/3' component = {Receta3} />
            <Route exact path = '/receta/4' component = {Receta4} />
            <Route exact path = '/receta/5' component = {Receta5} />
            <Route exact path = '/perfil' component = {Usuario} />

            {/*Valor nutricional*/}
            <Route exact path = '/valor/1' component = {ValorNutricional} />
            
        </Switch>
        </BrowserRouter>
    )
}

export default Aplicacion;