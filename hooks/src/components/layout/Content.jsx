import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import Home from '../../views/contents/Home'
import Noticia from '../../views/contents/Noticia'
import Comunidade from '../../views/contents/Comunidade'
import Conteudo03 from '../../views/contents/Conteudo03'
import NaoEncontrado from '../../views/contents//NaoEncontrado'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/Noticia/:usuario">
                <Noticia />
            </Route>
            <Route path="/Comunidade">
                <Comunidade />
            </Route>
            <Route path="/conteudo03">
                <Conteudo03 />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>            
        </Switch>
    </main>
)
export default Content
