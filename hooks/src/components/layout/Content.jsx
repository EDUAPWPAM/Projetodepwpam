import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import Home from '../../views/contents/Home'
import Noticia from '../../views/contents/Noticia'
import Comunidade from '../../views/contents/Comunidade'
import Sobre from '../../views/contents/Sobre'
import Amistoso from '../../views/contents/Amistoso'



const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/Noticia">
                <Noticia />
            </Route>
            <Route path="/Comunidade">
                <Comunidade />
            </Route>
            <Route path="/Sobre">
                <Sobre />
            </Route>
            <Route path="/Amistoso">
                <Amistoso />
            </Route>

        </Switch>
    </main>
)
export default Content
