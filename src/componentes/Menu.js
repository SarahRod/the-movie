import React ,{Component}from 'react';
import Logo from '../recursos/icones/logoEmpresa.png';
import {Link} from 'react-router-dom';


// Este componente é o menu do site 
export class Menu extends Component{
    render(){
        return(
            // Menu do site e nome da empresa
            <nav className="navbar navbar-expand-lg fixed-top vermelho-texto preto-2">
                <Link className="navbar-brand vermelho-texto font-weight-bold" to={`/`} >
                    <img src={Logo} className="img-fluid" alt="SmartMovies"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        )
    }
}

