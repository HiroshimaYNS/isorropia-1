import React from 'react';
import '../../styles/Inicio_Sesion.css'
import Receta1 from '../../pages/Receta1.jsx'
import { Link } from 'react-router-dom'


class Formulario extends React.Component{
    // handleChange = (e) => {
    //     console.log({value: e.target.value});
    //}
    render(){
        return(
            <div>
                <br/>
                <br/>
                <br/>
                <div className='centrado'>
                <h1 className='formuregistro'>Crea tu cuenta</h1>              
                    <div className='form-group'>
                        <br/>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Correo electronico" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                </div>
                <div class="input-group mb-3">
                    <input type="password" class="form-control" placeholder="Contraseña" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                </div>
                <br/>
                    </div>
                    <div className='row justify-content-center h-100 juas'>
                    <button type='button' className='btn btn-light mr-2' >
                        <a href= {Receta1}> Ingresar</a>
                    </button>
                        <Link to="/inicio/registro"><button className='btn btn-primary'> Registrarse </button></Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default Formulario;

{/* <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">@ejemplo</span>
                </div> */}