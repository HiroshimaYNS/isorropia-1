import React from 'react';
import '../styles/Boton.css'

class Boton extends React.Component{
    render(){
        return(
            <div>
                
                <button type="button" className='btn btn-primary mr-2'>
                    Ingresar con Google
                </button>
                <button className='btn btn-primary'>
                    Ingresar con facebook
                </button>
            </div>
        )
    }
}
export default Boton;