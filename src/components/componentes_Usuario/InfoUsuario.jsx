import React from 'react';
import '../../styles/Usuario.css'
import User from '../../images/User.png'

class InfoUsuario extends React.Component{
    render(){
        return(
            <div className='info_user'>
                <img className='imagen' src={User} alt='ImagenUser' />
                <h5>
                    {this.props.username}
                </h5>
            </div>
        )
    }
}
export default InfoUsuario;