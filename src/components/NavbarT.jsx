import React from 'react';
import '../styles/estilos_recetas/Receta.css'
import Busqueda from '../images/User.png'
class NavbarT extends React.Component {
    render() {
        return (
            <div className='Navbar'>
                <div className="fixed-top">
                    <div className="collapse" id="navbarToggleExternalContent">
                        <div className="NavbarR p-4">
                            <ul className="navbar-nav">{this.props.opcioones}
                                <li className="nav-item">
                                    <a className="nav-link white" href="/menu">Inicio</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link white " href="/menuR" >Recetas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link white" href="/rutina">Ejercicios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link white" href="#">Guardados</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link white" href="/perfil">Perfil</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <nav className="NavbarR navbar-dark navbar-style">
                        
                        <button className="boton menu navbar-toggler hamburguesa" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/*<a className="boton-atras">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                </a>*/}
                {/*Buscador*/}
                    
                        <h4 className='TReceta'>{this.props.menu}</h4>
                    </nav>
                </div>
            </div>
        )
    }
}

export default NavbarT;