import React from 'react'
import Cards from '../components/componentes_MenuR/Cards.jsx'
import '../styles/MenuR.css'
import NavbarT from '../components/NavbarT.jsx'





function MenuR(){
    return(            
        <div className='fondito'>
            <div className =' '>
            <NavbarT/>
            <Cards/>
            </div>
        </div>
    )
}


export default MenuR;