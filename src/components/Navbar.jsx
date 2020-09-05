import React from 'react';
import '../styles/navbar.css'

class Navbar extends React.Component{
    render(){
        return(
            <div className='Navbar'>
                <img className=''LOGO/>
                <div className='container-fluid'>
                    <a className='Navbar__brand' href='/'>
                        <span className='font-weight-light'>INICIO DE SESION</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar;

