import React from 'react'
import '../../styles/MenuR.css'
//Imagenes de Recetas
import TomateRellano from '../../images/imagen_Recetas/TomateRelleno.jpg'
import Fajitas from '../../images/imagen_Recetas/FajitasVerduras.jpg'
import Ensalada from '../../images/imagen_Recetas/Ensalada_mediterranea.jpg'
import Smoothie from '../../images/imagen_Recetas/Smoothie.jpg'
import Espagetis from '../../images/imagen_Recetas/Espagetis.jpg'

class Tarjeta extends React.Component {
    render() {
        console.log(this.props.Recetas)
        const listItems = this.props.Recetas.map((receta, index) =>
        <div key={index} className='card mr-3 mb-3'>
            <div className='imgbox'>
                <img className='imagenR' src={receta.Imagen} />
            </div>
            <div className='contentbox'>
                <h3>{receta.Nombre_Receta}</h3>
                <a href={'/receta/'+receta.id_Receta} className='buy'>Ver</a>
                <a href={'/receta/'+receta.id_Receta} className='buy'>Guardar</a>
            </div>
        </div>
        );
        return (
            <div className='huevo row justify-content-center'>
                {listItems}
            </div>
        )
    }
}
export default Tarjeta;