import React from 'react'
import NavbarT from '../components/NavbarT.jsx'
import Receta from '../components/componentes_R1/Receta.jsx'
import Imagen from '../components/componentes_R1/Imagen.jsx'
import BotonV from '../components/componentes_R1/Boton'
import '../styles/estilos_recetas/Receta.css'
import '../styles/estilos_recetas/Receta.css'

function Receta1(){
    return(            
        <div className='fondi componentes'>
            <div className=''>
            <NavbarT className='polo' menu='Receta 1' />
            </div>
            <br/>
            <br/>
            <div className='container'>
                <Receta/>
                <BotonV/>
                <Imagen/>
            </div>
            <br/>
            <br/>
        </div>
    )
}

export default Receta1;