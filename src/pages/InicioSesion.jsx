import React from 'react';
//Componentes
import Navbar from '../components/componentes_InicioSesion/Navbar.jsx'
import Formulario from '../components/componentes_InicioSesion/Formulario.jsx'
/*import Boton from '../components/componentes_InicioSesion/Boton.jsx'*/
import ImagenLateral from '../components/componentes_InicioSesion/ImagenLateral.jsx'
import '../styles/Inicio_Sesion.css'
import Fondo from '../images/Fondo isorropia.jpg'
import { render } from '@testing-library/react';
import { Link } from 'react-router-dom'


function InicioSesion(){
        return(            
            <div className='componentes'>
            <div className='fondi'>
                <Navbar />
                <div className='container'>
                    <div className=''>
                    <div className='col-6'>
                    <Formulario />
                    {/*<Boton /> */}
                    
                    </div>
                    <ImagenLateral/>
                    </div>
            </div>
            </div> 
            
            </div>
        )
}


export default InicioSesion;
//<Formulario />
//<Boton />
