import React from 'react'
import Espagetis from '../../images/imagen_Recetas/Espagetis.jpg'
import '../../styles/estilos_recetas/Imagen.css'

class Imagen extends React.Component{
    render(){
        return(
            <div className='imgR'>
                <div className='row justify-content-center h-100'>
                <img className='imagenR img-fluid' src={Espagetis} alt='Espagetis' height='300' width='300'/>
                </div>
            </div>
        )
    }
}

export default Imagen;