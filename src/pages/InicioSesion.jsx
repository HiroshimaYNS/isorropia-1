import React from 'react';
//Componentes
import Navbar from '../components/componentes_InicioSesion/Navbar.jsx'
import Formulario from '../components/componentes_InicioSesion/Formulario.jsx'
/*import Boton from '../components/componentes_InicioSesion/Boton.jsx'*/
import ImagenLateral from '../components/componentes_InicioSesion/ImagenLateral.jsx'
import '../styles/Inicio_Sesion.css'

import { render } from '@testing-library/react';



function InicioSesion(){
        return(            
            <div className=''>
                <Navbar/>
                <div className='container'>
                    <div className=''>
                    <div className='col-md-6 col-sm-12'>
                    <Formulario />
                    {/*<Boton /> */}
                    
                    </div>
                    <ImagenLateral/>
                    </div>
            </div> 
            
            </div>
        )
}


export default InicioSesion;
//<Formulario />
//<Boton />
