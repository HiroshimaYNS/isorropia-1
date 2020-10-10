import React from 'react'
import '../../styles/Menu.css'



class Menu  extends React.Component{
    render(){
        return(
            <div>
                <div className='contenido'>
                    <span className='Bienvenido'>Bienvenido a </span>
                    <span className='text2'>Isorropia</span>
                    </div>
            <div className ='maso row justify-content-center h-100'>
                <div className='contianer'>
                    <div className='cardM'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className='content'>
                            <h2>Usuario</h2>
                            <p>En esta seccion podras tener tu propio espacio
                                en los cuales tienes tu informacion personal
                            </p>
                            <a href="/perfil">Ver mas</a>
                        </div>
                    </div>
                </div>
                <div className='contianer'>
                    <div className='cardM'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className='content'>
                            <h2>Recetas</h2>
                            <p>Entra aqui y podras mirar varias recetas las cuales
                                son faciles y rapidas de hacer, pero tambien son sanas para ti
                            </p>
                            <a href="/menuR">Ver mas</a>
                        </div>
                    </div>
                </div>
                <div className='contianer'>
                    <div className='cardM'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className=' content'>
                            <h2>Rutina</h2>
                            <p>Veras una rutina que te brindamos gracias a tus datos ingresados
                                al registro de la aplicacion
                            </p>
                            <a href="/rutina">Ver mas</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Menu;