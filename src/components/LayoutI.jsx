import React from 'react'
import Navbar from './componentes_InicioSesion/Navbar.jsx'

function LayoutI(props){
    return(
        <React.Fragment>
          
        <Navbar/>
        {props.children}
        
        </React.Fragment>
    )
}
export default LayoutI;