import React from 'react'
import Navbar from '../components/NavbarT.jsx'
import Receta from '../components/componentes_R2/Receta.jsx'
import Imagen from '../components/componentes_R2/Imagen.jsx'
import '../styles/estilos_recetas/Receta.css'

function Receta2(){
    return(            
        <div className='fondi componentes'>
            <div className=''>
            <Navbar menu='Receta 2'/>
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

export default Receta2;