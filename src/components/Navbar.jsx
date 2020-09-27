import React from 'react';
import '../styles/Inicio_Sesion.css'

class Navbar extends React.Component {
    render() {
        return (
            <div className='Navbar'>

                <div class="fixed-top">
                    <div class="collapse" id="navbarToggleExternalContent">
                        <div class="NavbarR p-4">
                            <button>

                            </button>
                            <h5 class="text-white h4">Collapsed content</h5>
                            <h5 class="text-white h4">Usuario</h5>
                            
                        </div>
                    </div>
                    <nav class="NavbarR navbar-dark ">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar;