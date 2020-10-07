import React from 'react'
import '../../styles/Menu.css'



class Menu  extends React.Component{
    render(){
        return(
            <div className ='flota row justify-content-center h-100'>
                <div className='contenedor col'>
                    <div className='cardM'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className='content'>
                            <h2>01</h2>
                            <h3>pinga</h3>
                            <p>Me chupa tre pingos</p>
                            <a href="#">Ver mas</a>
                        </div>
                    </div>
                </div>
                <div className='contenedor col'>
                    <div className='cardM'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className='content'>
                            <h2>02</h2>
                            <h3>pinga</h3>
                            <p>Me chupa tre pingos</p>
                            <a href="#">Ver mas</a>
                        </div>
                    </div>
                </div>
                <div className='contenedor col '>
                    <div className='cardM'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className=' content'>
                            <h2>03</h2>
                            <h3>pinga</h3>
                            <p>Me chupa tre pingos</p>
                            <a href="#">Ver mas</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu;