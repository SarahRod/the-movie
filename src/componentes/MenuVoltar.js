import React, {Component} from 'react';
import {Link} from 'react-router-dom';


// Este componente é o menu para voltar a página home do site
class MenuVoltar extends Component{
    render(){
        return(
            // Botão para voltar ao menu do site
            <div className="caixa-voltar">
                <div className="row dark">
                    <div className="col-12 danger">
                        <Link className="btn btn-outline-light" to={`/`} >
                            Voltar para Home
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}export default MenuVoltar;