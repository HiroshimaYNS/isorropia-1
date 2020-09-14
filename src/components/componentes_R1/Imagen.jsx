import React from 'react'
import TomateRellano from '../../images/imagen_Recetas/TomateRelleno.jpg'
import '../../styles/estilos_recetas/Imagen.css'

class Imagen extends React.Component{
    render(){
        return(
            <div className='tomate'>
                <div>
                <img className='imagen' src={TomateRellano} alt='TomateRelleno' height='300' width='300'/>
                </div>
            </div>
        )
    }
}

export default Imagen;