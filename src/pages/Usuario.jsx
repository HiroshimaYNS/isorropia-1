import React from 'react'
import InfoUsuario from '../components/componentes_Usuario/InfoUsuario.jsx'
import TablaRutina from '../components/componentes_Usuario/TablaRutina.jsx'
import Navbar from '../components/Navbar.jsx'

import '../styles/Usuario.css'

function Usuario(){
    const elements = [1, 2, 3, 4, 5];
    const listItems = elements.map((element) =>
        <tr key={element}>
            <th scope="row"></th>
            <td></td>
        </tr>
    );
    return(            
        <div className='componentes'>
            <div>
            <Navbar menu='Perfil'/>
            </div>
            <div className='container'>
                <div>
                    <InfoUsuario username='Juan Diego Buitrago Castro'/>
                </div>
                <div>
                    <TablaRutina listItems={listItems}/>
                </div>
            </div>
        </div>
    )
}

export default Usuario;