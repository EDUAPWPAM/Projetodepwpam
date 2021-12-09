import React from "react"
import { useParams } from 'react-router-dom'

const Noticia = props => (

    <div>
            <h1>Notícias</h1>
            <br></br>
            <br></br>
            <form action="http://google.com">
                <label>
                <input type="submit" value="Go to Google" />
                </label>
            </form>
        </div>
)

export default Noticia
