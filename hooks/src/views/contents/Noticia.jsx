import React from "react"
import { useParams } from 'react-router-dom'

const Noticia = props => (

    <div>
            <h1>Notícias</h1>
            <br></br>
            <br></br>
            <form action="http://google.com">
                <label>
                <input type="submit" value="Amistoso entre DS x MA acaba com o time de informatica vencedor por 7x0.
                Clique e veja mais sobre o assunto"  />
                </label>
            </form>
        </div>
)

export default Noticia
