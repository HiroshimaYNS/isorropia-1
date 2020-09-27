import React from 'react'
import '../../styles/estilos_recetas/Receta.css'


class Receta5 extends React.Component{
    render(){
        return(
            <div className=''>
                <div className=''>
                <h1 className='titulo'>Smoothie de mango</h1>
                </div>
                <div className='ingredientes'>
                    <h2>Ingredientes</h2>
                    <lo>
                    <li>1 mango mediano</li>
                    <li>2 cucharadas de yogur natural descremada</li>
                    <li>1 chorrito de nectar de mango</li>
                    <li>Hielo</li>
                    </lo>
                </div>
                <br/>
                <div className='pasos'>
                    <h3>¿Cómo hacer Ensalada mediterrane?</h3>
                    <lo>
                    <li>Licúa el hielo con el mango, el yogur y el néctar. 
                        Sirve en un vaso y decora con fruta a tu gusto 
                    </li>                   
                    </lo>                    
                </div>
            </div>
        )
    }
}

export default Receta5;