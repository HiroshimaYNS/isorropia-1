import React from 'react';
import '../../styles/estilos_Inicion_Sesion/Navbar.css'

class Navbar extends React.Component{
    render(){
        return(
            <div className='Navbar'>
                
                <div className='container-fluid'>
                    <h1 className='iniciosesion font-italic display-4'>INICIO DE SESION</h1>
                </div>
            </div>
        )
    }
}

export default Navbar;

