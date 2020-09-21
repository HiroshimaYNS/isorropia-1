import React from 'react'
import Smoothie from '../../images/imagen_Recetas/Smoothie.jpg'
import '../../styles/estilos_recetas/Imagen.css'

class Imagen extends React.Component{
    render(){
        return(
            <div className='imgR'>
                <div>
                <img className='imagen' src={Smoothie} alt='Smoothie' height='300' width='300'/>
                </div>
            </div>
        )
    }
}

export default Imagen;