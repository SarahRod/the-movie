import React, {Component} from 'react';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import PaginaInicial from './paginas/PaginaInicial.js';
import PaginaDetalhes from './paginas/PaginaDetalhes';

export class Rotas extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={PaginaInicial}/>

                    <Route path="/filmes-page=1" exact component={PaginaInicial}/>

                    <Route path="/series-page=1"exact  component={PaginaInicial}/>
                    
                    <Route path="/series/:id?"  exact component={PaginaDetalhes}/>

                    <Route path="/filmes/:id?" exact component={PaginaDetalhes}/>
                </Switch>
            </BrowserRouter>
        )
    }
}