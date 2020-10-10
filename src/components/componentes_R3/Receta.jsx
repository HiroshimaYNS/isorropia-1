import React from 'react'
import '../../styles/estilos_recetas/Receta.css'


class Receta3 extends React.Component{
    render(){
        return(
            <div className=''>
                <div>
                <h1 className='titulo'>Espaguetis de calabacín</h1>
                </div>
                <br/>
                <div className='ingredientes'>
                    <br/>
                    <h2>Ingredientes</h2>
                    <lo>
                    <li>Calabacin</li>
                    <li>Tomates cherry</li>
                    <li>atún o tiras de pollo</li>
                    <li>Especias italianas</li>
                    <li>Especias italianas</li>
                    <li>Queso light</li>
                    </lo>
                </div>
                <br/>
                <div className='pasos'>
                    <h3>Cómo hacer los Espaguetis de calabacín</h3>
                    <lo>
                    <li>Comenzamos nuestra receta de espaguetis de calabacín 
                        cortando la verdura el tiras finas y largas, 
                        dejando así un aspecto similar al de los espaguetis. 
                        Luego preparamos los ingredientes que vamos a añadir como condimento y los 
                        cocinamos a la plancha en una sartén. Cuando ya estén hechos, 
                        añadimos las tiras de calabacín a la sartén, sazonamos con las especias italianas 
                        que más nos gusten y removemos hasta que todo quede bien mezclado</li>
                    
                    </lo>                    
                </div>
            </div>
        )
    }
}

export default Receta3;