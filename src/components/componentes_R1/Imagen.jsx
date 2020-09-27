import React from 'react'
import TomateRellano from '../../images/imagen_Recetas/TomateRelleno.jpg'
import '../../styles/estilos_recetas/Imagen.css'

class Imagen extends React.Component{
    render(){
        return(
            <div className='imgR'>
                <div className='row justify-content-center h-100'>
                <img className='imagenR img-fluid ' src={TomateRellano} alt='TomateRelleno' height='400' width='300'/>
                </div>
            </div>
        )
    }
}

export default Imagen;