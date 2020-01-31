import React, {Component} from 'react';

// Este componente encontra-se a lista de atores participantes da serie ou filme
class AtoresItem extends Component{
    
    // Construtor
    constructor(props){
        super();

        this.state = {
            ator: props.ator
            
        }

    }
    render(){
        return(
            // Lista de atores participantes
            <div class="elenco-atores efeito-entrada" >
                <img class="tamanho-imagem rounded-circle"  alt="" src={this.state.ator.profile_path}/>
                <p class="text-center mt-2 font-weight-bold ">{this.state.ator.name}</p>
                <p class="text-center mt-2">{this.state.ator.character}</p>
            </div>         
        )
    }
}export default AtoresItem; 