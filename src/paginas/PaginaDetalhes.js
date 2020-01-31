import React, {Component} from 'react';
import $ from  'jquery';
import {Menu} from '../componentes/Menu.js';
import EstrelaMaior from '../recursos/icones/estrela-maior.png'
import MenuVoltar from '../componentes/MenuVoltar.js';
import AtoresItem from '../componentes/AtoresItem.js';



// Este componente está presente os detalhes do filme ou serie
class PaginaDetalhes extends Component{

    
    constructor(props){
        super();
        this.state = {
            item:[],
            ator:[]
        }   
    }

    
    carregarDadosItem(){

        const { id } = this.props.match.params;
        let nome = localStorage.getItem("nome");

        const url = `http://localhost:3000/${nome}/${id}`;

        $.ajax({
            url: url,
            type: 'GET',
            success: function (resposta) {

                this.setState({item:resposta});

                this.setState({ator:resposta.credits.cast});
                console.log(resposta);
                console.log(resposta.credits.cast);

            }.bind(this),
            error: function (data) {
                console.log('Erro:', data);

            }
        });

    }

    componentDidMount() {
        this.carregarDadosItem();
    } 

    render(){
        return(
            <div>
                <Menu/>
                <MenuVoltar/>
                {/* Card que mostrando mais detalhes sobre a serie pu filme */}
                {/* background  */}
                <div className="caixa-informacao-item" style={{ backgroundImage: `url(${this.state.item.backdrop_path})`}}>
                    <div className="caixa-transparente">
                        {/* Conatiner com as informacoes da serie pu filme */}
                    <div className="container text-white">
                        <div className="row mb-4 efeito-entrada">
                            {/* Imagem do filme */}
                            <div className="col-12 col-md-6 col-lg-4  text-center mb-2">
                                <img className="imagem-poster"src={this.state.item.poster_path} alt={this.state.item.title || this.state.item.name}/>
                            </div>
                            {/* Sinopse e outras informacoes */}
                            <div className="col-12 col-md-6 col-lg-8  ">
                                <h1>{this.state.item.title || this.state.item.name} </h1>
                                <div className="row mb-4">
                                    <div className="col-lg-1 col-2 col-md-2 pt-2">
                                        <img src={EstrelaMaior} alt="icone da estrela de classificação"/>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-3 pt-1 pl-0">
                                        <span className="fonte-media vermelho-texto font-weight-bold">{this.state.item.vote_average}</span>/10
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h2>Sinopse</h2>
                                        <p>{this.state.item.overview}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Lista dos atores que participaram da serie ou filme */}
                <div className="container mt-5">
                    <h2>Elenco</h2>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div class="box">
                            <div class="dummy">
                                {this.state.ator.map((ator) =>
                                    <AtoresItem ator={ator || ""} />
                                )} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}export default PaginaDetalhes;