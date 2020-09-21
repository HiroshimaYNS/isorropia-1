import React from 'react'
import EnsaladaMediterranea from '../../images/imagen_Recetas/Ensalada_mediterranea.jpg'
import '../../styles/estilos_recetas/Imagen.css'

class Imagen extends React.Component{
    render(){
        return(
            <div className='imgR'>
                <div>
                <img className='imagen' src={EnsaladaMediterranea} alt='EnsaladaMediterranea' height='300' width='300'/>
                </div>
            </div>
        )
    }
}

export default Imagen;