import React from 'react';
import '../../styles/Registro.css'

import { Link } from 'react-router-dom'



class FormularioR extends React.Component {
    // handleChange = (e) => {
    //     console.log({value: e.target.value});
    //}

    render() {
        return (
            <div className='cuadroR row justify-content-center h-100'>
                <div className=''>
                    <div class="nombre input-group mb-3">
                        <input type="text" class="form-control" placeholder="Nombre" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Apellido" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control mr-2" placeholder="Edad" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <input type="text" class="form-control" placeholder="Peso" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Contraseña" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Confirmar Contraseña" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    </div>
                    <br/>
                    <button type="button" class="btn btn-secondary btn-lg btn-block">Registrarse</button>
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