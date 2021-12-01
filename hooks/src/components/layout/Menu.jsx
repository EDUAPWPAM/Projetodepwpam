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
                    <Link to="/Sobre">Sobre</Link>
                </li>                         
            </ul>
        </nav>
    </aside>
)
export default Menu
