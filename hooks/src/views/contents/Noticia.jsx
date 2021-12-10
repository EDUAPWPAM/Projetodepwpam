import React from "react"
import { useParams } from 'react-router-dom'
import styles from '../../views/contents/estilonot.css';

const Noticia = props => (

    <div>
        <h1>Notícias</h1>
            <br></br>
            <br></br>
            <div id= "conteudo">
                <div class="artigo">
                    <p> Amistoso entre DS x MA acaba em 7x0 para o time da informática
                         em um jogo humilhante para a torcida de administração</p>
                    
                <form action="'../../views/contents/notamistoso'">
                    <input type="submit" value="Veja mais detalhes." />
                </form>
                </div>
            </div>
        </div>
)

export default Noticia
