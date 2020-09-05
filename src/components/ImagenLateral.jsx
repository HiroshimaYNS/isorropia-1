import React from 'react';
import '../styles/ImagenLateral.css'
import Logo from '../images/lateral.png'
class ImagenLateral extends React.Component{
    render(){
        return(
            <div className="ImagenLateral">
                <div className='ImagenLateral_header'>
                    <img className='imagen' src={Logo} alt='Logo' height='550' width='660'/>
                </div>
                
            </div>
        )
    }
}

export default ImagenLateral;

/*<div className='ImagenLatera__footer'>
Politécnico Colombiano Jaime Isaza Cadavid © 2020
</div>*/