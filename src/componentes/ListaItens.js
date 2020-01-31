import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Estrela from '../recursos/icones/estrela.png';


// Este componente lista todos os filmes e series do site 
class ListaItens extends Component{

    constructor(props){
        super();

        this.state = {
            item: props.item
            
        }

    }
    
    render(){
        return(
            <div className="col-6 col-md-4 col-lg-3 mt-5 mb-3" >
                <div class="card rounded-0 card-filme">
                    {/* Imagem do card */}
                    <img class="card-img-top" src={this.state.item.poster_path} alt={this.state.item.title|| this.state.item.name} style={{minHeight: 240+ 'px'}}/>
                    {/* Corpo do card com algumas informações */}
                    <div class="card-body pt-2">
                        {/* Titulo do filme ou serie  e uma pequena sinopse */}
                        <div className="row">
                            <div className="col-12" style={{height: 200 + 'px'}} >
                                <p className="font-weight-bold text-center">{this.state.item.title|| this.state.item.name}</p>
                                <p className=" text-justify">{this.state.item.overview.substring(0,100)}...</p>
                            </div>
                        </div>
                        {/* Avaliação do filme ou serie e link para ler mais */}
                        <div className="row ">
                            <div className="col-2" >
                                <img src={Estrela} alt="ícone de avaliação - estrela"/>
                            </div>
                            <div className="col-12 col-md-4 col-lg-4 pt-1" >
                                <p className="cinza fonte-pequena">{this.state.item.vote_average}/10</p>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 pt-1 text-right" >
                                <Link to={`/${this.props.link}/${this.state.item.id}`} className="cinza fonte-pequena pointer">
                                    Ler Mais
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        )
    }
}export default ListaItens;