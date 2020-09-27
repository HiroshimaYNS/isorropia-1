import React from 'react';
import '../../styles/Inicio_Sesion.css'
import Logo from '../../images/imagenes_InicioSesion/Bienvenida.png';

class Navbar extends React.Component {
    render() {
        return (
            <div className=''>
                <nav class="Navbar navbar navbar-light ">
                    <a class="navbar-brand" href="#">
                        <img className='imagen' src={Logo} alt='Logo' width="30" height="30" loading="lazy" />
                            Inicio Sesion 
                    </a>
                </nav>
            </div>
        )
    }
}

export default Navbar;

