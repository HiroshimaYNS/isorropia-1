import React from 'react'
import '../../styles/MenuR.css'
//Imagenes de Recetas
import TomateRellano from '../../images/imagen_Recetas/TomateRelleno.jpg'
import Fajitas from '../../images/imagen_Recetas/FajitasVerduras.jpg'
import Ensalada from '../../images/imagen_Recetas/Ensalada_mediterranea.jpg'
import Smoothie from '../../images/imagen_Recetas/Smoothie.jpg'
import Espagetis from '../../images/imagen_Recetas/Espagetis.jpg'

class Tarjeta  extends React.Component{
    render(){
        return(
            <div className ='huevo row justify-content-center'>
                    <div className = 'card mr-3 mb-3'>
                        <div className = 'imgbox'>
                        <img className='imagenR' src={TomateRellano}   />
                        </div>
                        <div className ='contentbox'>
                            <h3>Tomate relleno</h3>
                            <a href="/receta/1" className='buy'>Ver</a>
                        </div>
                    </div>
                    <div className = 'card mr-3 mb-3'>
                        <div className = 'imgbox'>
                        <img className='imagenR' src={Fajitas}   />
                        </div>
                        <div className ='contentbox'>
                            <h3>Rollitos de verduras integrales</h3>
                            <a href="/receta/2" className='buy'>Ver</a>
                        </div>
                    </div>

                    <div className = 'card mr-3 mb-3'>
                        <div className = 'imgbox'>
                        <img className='imagenR' src={Espagetis}   />
                        </div>
                        <div className ='contentbox'>
                            <h3>Espaguetis de calabacín</h3>
                            <a href="/receta/3" className='buy'>Ver</a>
                        </div>
                    </div>
                    <div className = 'card mb-3'>
                        <div className = 'imgbox'>
                        <img className='imagenR' src={Ensalada}   />
                        </div>
                        <div className ='contentbox'>
                            <h3>Ensalada mediterranea</h3>
                            <a href="/receta/4" className='buy'>Ver</a>
                        </div>
                    </div>
                    <div className = 'card mb-3 mr-3'>
                        <div className = 'imgbox'>
                        <img className='imagenR' src={Smoothie}   />
                        </div>
                        <div className ='contentbox'>
                            <h3>Smoothie de mango</h3>
                            <a href="/receta/5" className='buy'>Ver</a>
                        </div>
                    </div>
                    {/*
                    <div className = 'card mb-3'>
                        <div className = 'imgbox'>
                        <img className='imagenR' src={TomateRellano}   />
                        </div>
                        <div className ='contentbox'>
                            <h3>R4</h3>
                            <a href="#" className='buy'>Ver</a>
                        </div>
                    </div>
                    */}
                
            </div>
        )
    }
}
export default Tarjeta;