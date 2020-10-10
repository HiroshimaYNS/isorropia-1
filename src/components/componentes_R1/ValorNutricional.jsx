import React from 'react'





class VNutricional extends React.Component{
    render(){
        return(
            <div className=''>
                <h1 className='titulo'>Valor Nutricional</h1>
                <div className='ingredientes pasos'>
                    <h2 >Ingredientes</h2>
                </div>
                <lo className='ingredientes'>
                    <li className='mt-5 '>El tomate es rico en vitaminas y minerales, 
                    aporta vitamina C, es un antioxidante natural. Este protege a la vista, 
                    ya que contiene vitnami A la cual ayuda a proteger nuestros ojos de 
                    enfermedades degenerativas o ceguera nocturna.</li>

                    <li className='mt-3 '>El atun es una proteina magra, el cual protege la piel,
                        ayuda a tu memoria, se usa mucho en la dietas para 
                        balancear calorias y se dice que puede llegar a subir el animo
                    </li>

                    <li className='mt-3 '>Los champiñones son una gran fuente de antioxidantes, esto ayuda a la
                        reparacion del ADN y evita mutaciones en este, tambien evita la generacion
                        de celulas malignas que pueden derivar a cancer o tumores 
                    </li>

                    <li className='mt-3 '>El calabacin es bajo en en calorias ya que solo contiene 15cal, es rica en
                        fibra y tiene pectina y celulosa
                    </li>

                    <li className='mt-3 '>El oregano ayuda en la digestion ya que se conisdera como un tonico, es muy buen
                        antiinflamatorio ayuda para el catarro y dolores de garganta, ayuda en la lucha contra 
                        las bacterias y es gran fuente de antioxidantes
                    </li>

                    <li className='mt-3 '> El Queso light, contiene aminoacidos que ayudan que el organismo funcione correctamente, 
                        es una buena funete de calcio, aporta vitamina B y proteinas.
                        Lo que diferencia el Queso light al normal es que contiene menos grasas que el queso normal
                        pues asi se consumirian menos calorias, con mismos beneficios

                    </li>
                    </lo>
                <br/>
            </div>

        )
    }
}

export default VNutricional;