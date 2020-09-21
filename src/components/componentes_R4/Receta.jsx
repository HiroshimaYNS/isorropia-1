import React from 'react'
import '../../styles/estilos_recetas/Receta.css'


class Receta4 extends React.Component{
    render(){
        return(
            <div className=''>
                <div>
                <h1>Ensalada mediterranea</h1>
                </div>
                <div>
                    <h2>Ingredientes</h2>
                    <lo>
                    <li>Rabanos al gusto</li>
                    <li>1 pepino</li>
                    <li>1/2 Jitomates cherry rojo y amarillo</li>
                    <li>Mix de hojas verdes</li>
                    <li>Jugo de 1 limón</li>
                    </lo>
                </div>
                <br/>
                <div className='pasos'>
                    <h3>¿Cómo hacer Ensalada mediterranea?</h3>
                    <lo>
                    <li>Picamos todo al gusto, ya sea grueso o delgado,
                        se recomienda que no sea muy grueso para disfrutar mas
                        el alimento y que se presentable 
                    </li>
                    <li>Mezcla los alimentos comenzando con las hojas verdes y los rábanos. 
                        Agrega, posteriormente, los rábanos y al final los jitomates
                    </li> 
                    <li>Para finalizar, baña con jugo de limón.
                    </li>                    
                    </lo>                    
                </div>
            </div>
        )
    }
}

export default Receta4;