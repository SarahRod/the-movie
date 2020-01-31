import React,{Component} from 'react';

// Cabeçalho da Página inicial 
export class Header extends Component{
    render(){
        return(
            // Componente do Header da página inicial
            <header>
                <div className="jumbotron  background-header-home text-white mb-0">
                    <div className="container efeito-entrada">
                        {/* titulo e subtitulo do site - pagina inicial */}
                        <h1 className="display-4 mt-5">{this.props.titulo}</h1>
                        <div className="col-12 col-lg-4 col-md-12 ">
                            <h2 className="mt-5 mb-5" >{this.props.subtitulo}</h2>
                        </div>
                        <span className="btn-vermelho btn-lg  rounded-1 ml-4">Bora maratonar?</span>
                    </div>
                </div>
            </header>
                
            
        )
    }
}