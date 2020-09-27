import React from 'react';
import '../styles/estilos_recetas/Receta.css'


class Navbar extends React.Component {
    render() {
        return (
            <div className='Navbar'>
                <div class="fixed-top">
                    <div class="collapse" id="navbarToggleExternalContent">
                        <div class="NavbarR p-4">
                            <h5 class="text-white h4">Collapsed content</h5>
                        </div>
                    </div>
                    <nav class="NavbarR navbar-dark ">
                        <button class="boton menu navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <h1 className='TReceta'>Receta</h1>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar;