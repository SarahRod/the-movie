import React, { Component} from 'react';
import {Menu} from '../componentes/Menu.js';
import {Header} from '../componentes/Header.js';
import CorpoHome from '../componentes/CorpoHome.js'
import PageProgress from 'react-page-progress';


// Este componente é a pagina inicial do site junto com os seus componentes complementares
class PaginaInicial extends Component{

    render(){
        return(
                <div style={{background: '#faf8f7'}}>
                    <div className="z-index">
                        <PageProgress color={'rgb(245, 0, 0)'} height={5}/>
                    </div>
                    <Menu />
                        <Header titulo="SmartMovies" 
                            subtitulo="Aqui você encontra o melhor conteúdo de filmes e séries"
                            className="jumbotron background-header-home text-white pl-0 pr-0"/>
                    <CorpoHome/>
                </div>
            
        )
    }
}export default PaginaInicial;
