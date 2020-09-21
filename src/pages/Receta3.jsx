import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Receta from '../components/componentes_R3/Receta.jsx'
import Imagen from '../components/componentes_R3/Imagen.jsx'
import Fondo from '../images/Fondo isorropia.jpg'
import '../styles/Registro.css'

function Receta3(){
    return(            
        <div className='componentes'>
            <div>
            <Navbar />
            </div>
            <br/>
            <br/>
            <div className='container'>
                <div className='row'>
                <div className='col-6'>
                <Receta/>
                </div>
                </div>
            </div>
            <br/>
            <br/>
            <div>
                <Imagen/>
            </div>
        </div>
    )
}

export default Receta3;