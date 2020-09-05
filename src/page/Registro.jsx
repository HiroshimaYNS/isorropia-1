import React from 'react';
//Componentes
import Navbar from '../components/Navbar'
import Formulario from '../components/Formulario.jsx'
import Boton from '../components/Boton.jsx'
import ImagenLateral from '../components/ImagenLateral.jsx'




function Registro(){
        return(            
            <div className='componentes'>
                
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                    <Formulario />
                    <Boton />
                    </div>
                    <div className='col-6'>
                    <ImagenLateral/>
                    </div>
                </div>
            </div>
            
            </div>
        )
}

export default Registro;
//<Formulario />
//<Boton />
