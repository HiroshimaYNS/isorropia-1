import React from 'react'
import '../../styles/estilos_recetas/Receta.css'
import { Link } from 'react-router-dom'

class BotonV extends React.Component {
    render() {
        return (
            <div className=''>
                <a className='gira' href="/valor/1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Valor Nutricional
                </a>
            </div>
        )
    }
}
export default BotonV;