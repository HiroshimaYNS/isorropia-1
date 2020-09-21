import React from 'react';
import '../../styles/Inicio_Sesion.css'
import Logo from '../../images/imagenes_InicioSesion/Bienvenida.png'
class ImagenLateral extends React.Component{
    render(){
        return(
            <div className="ImagenLateral">
                <div className='ImagenLateral_header'>
                    <img className='imagen' src={Logo} alt='Logo' height='500' width='550'/>
                </div>
            </div>
        )
    }
}

export default ImagenLateral;

