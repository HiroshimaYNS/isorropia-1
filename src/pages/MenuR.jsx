import React from 'react'
import Cards from '../components/componentes_MenuR/Cards.jsx'
import '../styles/MenuR.css'
import NavbarMR from '../components/componentes_MenuR/NavbarMR'





function MenuR(){
    return(            
        <div className='fondito'>
            <div className =' '>
            <NavbarMR/>
            <Cards/>
            </div>
        </div>
    )
}


export default MenuR;