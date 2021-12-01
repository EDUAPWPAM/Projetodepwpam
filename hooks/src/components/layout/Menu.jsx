import './Menu.css'
import React from "react"
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li> 
                    <Link to="/">Home</Link>
                </li>
                <li> 
                    <Link to="/Noticia/123">Notícia</Link>
                </li>
                <li> 
                    <Link to="/Comunidade">Comunidade</Link>
                </li>                                
                <li> 
                    <Link to="/conteudo03">Conteúdo 03</Link>
                </li>
                <li> 
                    <Link to="/conteudo04">Conteúdo 04</Link>
                </li>                                
            </ul>
        </nav>
    </aside>
)
export default Menu
