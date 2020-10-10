import React from 'react'
import Navbar from '../components/NavbarT.jsx'
import Receta from '../components/componentes_R3/Receta.jsx'
import Imagen from '../components/componentes_R3/Imagen.jsx'
import '../styles/estilos_recetas/Receta.css'

function Receta3(){
    return(            
        <div className='fondi componentes'>
            <div>
            <Navbar menu='Receta 3'/>
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

export default Receta3;