import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Receta from '../components/componentes_R1/Receta.jsx'
import Imagen from '../components/componentes_R1/Imagen.jsx'
import '../styles/estilos_recetas/Receta.css'
import '../styles/estilos_recetas/Receta.css'

function Receta1(){
    return(            
        <div className='fondi componentes'>
            <div className=''>
            <Navbar menu='Receta 1' />
            </div>
            <br/>
            <br/>
            <div className='container'>
                <Receta/>
            </div>
            <br/>
            <br/>
            <div>
                <Imagen/>
                <br/>
            </div>
        </div>
    )
}

export default Receta1;