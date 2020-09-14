import React from 'react'
import '../../styles/estilos_recetas/Receta.css'


class Receta extends React.Component{
    render(){
        return(
            <div className=''>
                <h1>Tomate Rellano</h1>
                <div>
                    <h2>Ingredientes</h2>
                    <lo>
                    <li>Tomate</li>
                    <li>Atun</li>
                    <li>Champiñones</li>
                    <li>Calabacion (u otra verdura disponible)</li>
                    <li> Oregano</li>
                    <li>Queso light (o Normal)</li>
                    </lo>
                </div>
                <div className='peo'>
                    <h3>¿Que hacer tomate relleno paso a paso</h3>
                    <p className='texto'>
                    Para hacer nuestro tomate relleno lo primero que tenemos que
                    hacer es cortar la cabeza del tomate y dejarlo hueco con la ayuda de un cuchillo. 
                    El jugo del tomate lo guardaremos para mezclarlo más tarde con el relleno.

                    Para hacer el relleno tenemos que mezclar el atún con los champiñones, el jugo de
                    tomate y sazonar con el orégano u otra especie que prefieras. Una vez tengamos todo 
                    mezclado colocamos todo el relleno con la ayuda de una cuchara dentro del tomate y 
                    cubrimos con una loncha de queso light. Metemos el tomate en el horno y dejamos hornear 
                    durante unos 15 minutos a baja temperatura. Ya tendrás tu receta perfecta para el almuerzo 
                    o la cena deliciosa y baja en calorías.
                    </p>
                </div>
            </div>

        )
    }
}

export default Receta;