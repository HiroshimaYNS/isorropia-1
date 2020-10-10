import React from 'react'
import NavbarT from '../components/NavbarT.jsx'
import VNutricional from '../components/componentes_R1/ValorNutricional'
import '../styles/estilos_recetas/Receta.css'
import '../styles/estilos_recetas/Receta.css'

function Receta1(){
    return(            
        <div className='fondi componentes'>
            <div className=''>
            <NavbarT className='polo'/>
            </div>
            <br/>
            <br/>
            <div className='container'>
                <VNutricional/>
            </div>
            
            
        </div>
    )
}

export default Receta1;