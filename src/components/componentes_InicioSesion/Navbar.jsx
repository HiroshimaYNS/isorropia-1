import React from 'react';
import '../../styles/Inicio_Sesion.css'
import Logo from '../../images/imagenes_InicioSesion/Bienvenida.png';

class Navbar extends React.Component {
    render() {
        return (
            <div className=''>
                <nav className="Navbar navbar navbar-light ">
                    <a className="navbar-brand" href="#">
                    <p className ='isorropia ml-4'>
                    ISORROPIA
                    </p>
                        <img className='imagen' src={Logo} alt='Logo' width="30" height="30" loading="lazy" />
                    </a>
                </nav>
            </div>
        )
    }
}

export default Navbar;

