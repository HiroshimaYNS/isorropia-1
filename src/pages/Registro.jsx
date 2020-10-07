import React from 'react';
import FormularioR from '../components/componentes_Registro/FormularioR.jsx'
import '../styles/Registro.css'
import Navbar from '../components/componentes_InicioSesion/Navbar'





function Registro(){
    return(            
        <div className='fondo'>
            <Navbar/>
            <div className=''>
            <FormularioR/>
            </div>
        </div>
    )
}

export default Registro;