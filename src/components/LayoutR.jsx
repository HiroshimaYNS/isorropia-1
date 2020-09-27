import React from 'react'
import Navbar from './Navbar'

function LayoutR(props){
    return(
        <React.Fragment>
        <Navbar/>
        {props.children}
        </React.Fragment>
    )
}
export default LayoutR;