import React from 'react';
import '../../styles/Registro.css'
import { Link } from 'react-router-dom'


class FormularioR extends React.Component {

    render() {
        return (
            <div className='cuadroR row justify-content-center h-100'>
                <div className=''>
                    <h1 className='formuregistro'>REGISTRATE</h1>
                    <div class="nombre input-group mb-3">
                        <input type="text1" class="form-control" placeholder="Nombre" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                    <div class="input-group mb-3">
                        <input type="text1" class="form-control" placeholder="Apellido*" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                    <div class="input-group mb-3">
                        <input type="text1" class="form-control mr-2" placeholder="Edad*" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <input type="text1" class="form-control" placeholder="Peso*" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Contraseña*" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Confirmar Contraseña*" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                    <a className='BotonR' href="/menu">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Registrarse
                    </a>
                    <br/>
                </div>
            </div>
        );
    }
}
export default FormularioR;
{/* <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">@ejemplo</span>
                </div> */}