import React from 'react';
import '../../styles/Inicio_Sesion.css'

class Boton extends React.Component{
    render(){
        return(
            <div className='btncentrado'>               
                <button type="button" className='google btn btn-primary mr-2'>
                    Ingresar con Google
                </button>
                <button className='facebook btn btn-primary'>
                <a href="URL" target="_blank"><img  height="30" width="30" src="https://2.bp.blogspot.com/-28mh2hZK3HE/XCrIxxSCW0I/AAAAAAAAH_M/XniFGT5c2lsaVNgf7UTbPufVmIkBPnWQQCLcBGAs/s1600/facebook.png" /></a>
                    Ingresar con facebook
                </button>
            </div>
        )
    }
}
export default Boton;