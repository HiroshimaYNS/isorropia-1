import React from 'react'
import Fajitas from '../../images/imagen_Recetas/FajitasVerduras.jpg'
import '../../styles/estilos_recetas/Imagen.css'

class Imagen extends React.Component{
    render(){
        return(
            <div className='tomate'>
                <div>
                <img className='imagen' src={Fajitas} alt='Fajitas' height='300' width='300'/>
                </div>
            </div>
        )
    }
}

export default Imagen;