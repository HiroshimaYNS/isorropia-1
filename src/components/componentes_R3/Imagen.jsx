import React from 'react'
import Espagetis from '../../images/imagen_Recetas/Espagetis.jpg'
import '../../styles/estilos_recetas/Imagen.css'

class Imagen extends React.Component{
    render(){
        return(
            <div className='imgR'>
                <div>
                <img className='imagen' src={Espagetis} alt='Espagetis' height='300' width='300'/>
                </div>
            </div>
        )
    }
}

export default Imagen;