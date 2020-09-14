import React from 'react';
import '../../styles/estilos_Inicion_Sesion/Formulario.css'
import Receta1 from '../../pages/Receta1.jsx'


class Formulario extends React.Component{
    handleChange = (e) => {
        console.log({value: e.target.value});
    }
        
    render(){
        return(
            <div>
                <div className='centrado'>
                <h1 className='formuregistro'>Crea tu cuenta</h1>              
                <form className='form-group'>
                    <div className='form-group'>
                    
                    <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">@example.com</span>
                </div>
                </div>
                <div class="input-group mb-3">
                    <input type="password" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                
                </div>
                        
                        

                        
                        
                    </div>
                    <div className='juas'>
                    <button type='button' className='btn btn-light mr-2' >
                        <a href= {Receta1}> Ingresar</a>
                    </button>
                        
                    <button className='btn btn-primary'>
                        Registrarse
                    </button>
                    </div>
                </form>
                </div>
            </div>
        
        )
    }
}
export default Formulario;