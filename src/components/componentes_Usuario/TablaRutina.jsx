import React from 'react';
import '../../styles/Usuario.css'


class TablaRutina extends React.Component {
    render() {
        return (
            <div className='table-responsive-md'>
                <div className='box'>Horario de rutina de ejercicios</div>
                <table className="table table-orange table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Día y hora</th>
                            <th scope="col">Sesión N°1</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.listItems}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default TablaRutina;