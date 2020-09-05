import React from 'react';


class Formulario extends React.Component{
    handleChange = (e) => {
        console.log({value: e.target.value});
    }
        
    render(){
        return(
            <div>
                <h1>Formulario de Registro</h1>
                <form className='form-group'>
                    <div className='form-group'>
                    <div>
                        <label className='correo'></label>
                        <input onChange ={this.handleChange} className='form_control' name='firstName' type='text' placeholder='Correo electronico' />
                        </div>
                        <div>
                        <label htmlFor='contraseña'> </label>
                        <input onChange ={this.handleChange} className='form_control' name='firstName' type='text' placeholder='Contraseña'/>
                        </div>
                    </div>
                    <button className='btn btn-light mr-2'>
                        Ingresar
                    </button>
                    <button className='btn btn-primary'>
                        Registrarse
                    </button>
                </form>
            </div>
        )
    }
}
export default Formulario;