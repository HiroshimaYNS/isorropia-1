import React from 'react'
import Navbar from './componentes_InicioSesion/Navbarjsx'

function LayoutR(props){
    return(
        <React.Fragment>
        <Navbar/>
        {props.children}
        </React.Fragment>
    )
}
export default LayoutR;