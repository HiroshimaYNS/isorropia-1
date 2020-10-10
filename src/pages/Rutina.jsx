import React from 'react'
import Ejercicio from '../components/componentes_Rutina/Ejercicio.jsx'
import Video from '../components/componentes_Rutina/Video'
import Navbar from '../components/NavbarT.jsx'


function Rutina(){
    return(            
        <div className=''>
            <Navbar/>
            <div className ='container '>
            <Ejercicio/>
            <Video/>
            </div>
            <div className='video'>
                
            </div>
        </div>
    )
}


export default Rutina;