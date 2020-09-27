import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Receta from '../components/componentes_R2/Receta.jsx'
import Imagen from '../components/componentes_R2/Imagen.jsx'
import Fondo from '../images/Fondo isorropia.jpg'
import '../styles/estilos_recetas/Receta.css'

function Receta2(){
    return(            
        <div className='fondi componentes'>
            <div className=''>
            <Navbar />
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