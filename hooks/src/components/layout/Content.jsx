import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import Home from '../../views/contents/Home'
import Noticia from '../../views/contents/Noticia'
import Comunidade from '../../views/contents/Comunidade'
import Sobre from '../../views/contents/Sobre'
import notamistoso from '../../views/contents/notamistoso'




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

            <Route path="/notamistoso">
                <notamistoso />
            </Route>

        </Switch>
    </main>
)
export default Content
