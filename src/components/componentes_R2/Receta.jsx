import React from 'react'
import '../../styles/estilos_recetas/Receta.css'


class Receta2 extends React.Component{
    render(){
        return(
            <div className=''>
                <div>
                <h1 className='titulo'>Rollitos de verduras integrales</h1>
                </div>
                <div className='ingredientes'> 
                    <lo>
                    <li>1 pimiento verde</li>
                    <li>1 pimiento rojo</li>
                    <li>1/4 de cebolla</li>
                    <li>1 calabacin</li>
                    <li>Queso light</li>
                    <li>Tortitas integrales</li>
                    </lo>
                </div>
                <br/>
                <div className='pasos'>
                    <h3>¿Cómo hacer los rollitos de verdura integrales paso a paso?</h3>
                    <lo>
                    <li>Lo primero será cortar 1 pimiento verde y 1 pimiento rojo 
                        en tiras y ponerlos en la sartén con poco aceite (a modo wok).</li>
                    <li>Añadiremos, mientras estas verduras se hacen, 1/4 de cebolla 
                        picada y 1 calabacín cortado a tiras.</li>
                    <li>Añadiremos, mientras estas verduras se hacen, 1/4 de cebolla 
                        picada y 1 calabacín cortado a tiras.</li>
                    <li>Mientras tanto metemos un par de tortitas integrales para fajitas 
                        (en Mercadona las podemos encontrar de la marca Hacendado) en el 
                        microondas durante 10 sg.</li>
                    <li>Añadimos todo el wok de verduras dentro de la fajita y 
                        enrollamos bien para servir.</li>
                    </lo>                    
                </div>
            </div>
        )
    }
}

export default Receta2;