import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Receta from '../components/componentes_R1/Receta.jsx'
import Imagen from '../components/componentes_R1/Imagen.jsx'

function Receta1(){
    return(            
        <div className=''>
            <Navbar />
            <div className='container'>
                <div className='row'>
                <div className='col-6'>
                <Receta/>
                </div>
                </div>
            </div>
            <div>
                <Imagen/>
            </div>
        </div>
    )
}

export default Receta1;