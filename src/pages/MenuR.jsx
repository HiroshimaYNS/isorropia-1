import React from 'react'
import Cards from '../components/componentes_MenuR/Cards.jsx'
import '../styles/MenuR.css'
import NavbarMR from '../components/componentes_MenuR/NavbarMR'
import axios from 'axios'

class MenuR extends React.Component {
    state = {
        receta: [],
        recetaBackup:[]
    };

    componentDidMount() {
        this.traerRecetaDeApi();
    }

    traerRecetaDeApi() {
        axios.get("https://backend-isorropia.vercel.app/api/receta").then((respuesta) => {
            this.setState({ receta: respuesta.data, recetaBackup: respuesta.data });
        });
    }

    handleChangeFiltroInput = (e) => {
        const valorBuscar = e.target.value;
        if (valorBuscar !== "") {
            this.funcionInput(e.target.value);
        } else {
            this.setState({receta: this.state.recetaBackup});
        }
    }

    funcionInput(buscar) {
        const resultadosInput = this.state.recetaBackup.filter((receta) => {
            return (
                receta.Nombre_Receta.toLowerCase().indexOf(buscar.toLowerCase()) !== -1
            );
        });
        this.setState({ receta: resultadosInput });
    }

    render() {
        return (
            <div className='fondito'>
                <div className=' '>
                    <NavbarMR OnchangeFiltro={this.handleChangeFiltroInput} />
                    <Cards Recetas={this.state.receta} />
                </div>
            </div>
        )
    }
}
export default MenuR;