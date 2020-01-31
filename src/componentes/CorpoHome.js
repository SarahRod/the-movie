import React, { Component } from 'react';
import $ from 'jquery';
import {DOMINIO} from '../link_config.js'
import ListaItens from './ListaItens.js'


//Este componente se encontra o corpo da página inicial do site
class CorpoHome extends Component{

    // Construtor
    constructor() {
        super();
        this.state = {
            item: [],
            link:'filmes',

        }
    }

    // Função para visualizar a lista de filmes e series
    visualizarLista(e){
        
        this.setState({item: []});

        let url;

        switch (e) {
            
            case "filme":
                url = `${DOMINIO}/filmes?page=1`;
               this.setState({link:'filmes'});
               localStorage.setItem('nome', 'filmes' );
                break;
            case "serie":
                url = `${DOMINIO}/series?page=1`;
                this.setState({link:'series'});
                localStorage.setItem('nome', 'series');
                break;
            default:
                url = `${DOMINIO}/filmes`;
                localStorage.setItem('nome', 'filmes');

        }

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
        
            success: function (resposta) { 

                this.setState({item: resposta.results});

            }.bind(this),
            error: function (data) {

                console.log(data)
            }
        });
    }

    // chamando a função visualizarLista() para aparecer na tela
    componentDidMount() {
        
        this.visualizarLista();
    }

    render(){
        return(
            <div>
                <div className="caixa-filme-serie font-weight-bold">
                    <div className="container">
                        <span className="col-5 pointer" onClick={e => this.visualizarLista(e = "filme")}>Filmes</span>
                        <span className="col-5 pointer" onClick={e => this.visualizarLista(e = "serie")}>Series</span>
                    </div>
                    
                </div>
                {/* Lista que contem as informações da serie ou filme */}
                <section id="cards" className="container">
                    <div className="row">
                        {this.state.item.map((item) =>
                            <ListaItens item={item || ""} link={this.state.link}/>
                        )} 
                    </div>
                </section>
            </div>
            
        )
    }
}export default CorpoHome;
