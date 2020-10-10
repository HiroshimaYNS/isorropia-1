import React from 'react'
import '../../styles/Rutina.css'


class Ejercicio extends React.Component {
    render() {
        return (
            <div className='justify-content-center h-100'>
                <div>
                    <h1 className='rutinita mt-5'>Rutina</h1>
                </div>
                <br/>
                <div className='rutinita'>
                    <h2 className=''>Esto es lo que necesita en tu rutina de hoy</h2>
                    <ul className=''>
                        <li>Un termo con agua</li>
                        <li>Motivacion</li>
                    </ul>
                </div>
                <div>
                    <p className='rutinita'>
                        Esta es una rutina de cardio con una duracion de 20 minutos en los
                        cuales haras un ejercicios suaves para bajar peso y sin saltos para
                        para que no te canses mucho y aqui podras ver el video que te explica como
                        hacer la rutina
                    </p>
                </div>
                <div>
                    <h2 className='rutinita'>Mira el video</h2>
                </div>
            </div>
        )
    }

}
export default Ejercicio;