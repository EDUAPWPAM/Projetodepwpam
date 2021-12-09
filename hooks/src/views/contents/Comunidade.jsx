import React from "react"
<link rel="stylesheet" type="text/css" href="estilocont.css"></link>

const Comunidade = props => (
    <div>
        
        <h1>Comunidade</h1>
        <p>Aqui serão realizados aberturas de pedidos para o site ou duvidas da matéria</p>
        <br></br>
        <br>
        </br>
        
    <form>
    <label>
        E-mail:
        <br></br>
        <input type="email" required="required" name="email" 
        id="text2" size="61" placeholder="Digite seu email aqui" 
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" autofocus=""></input>
        <br></br>
        <input type="reset" value="Limpar"></input>
        &nbsp;
        <input type="submit" value="Confirmar"></input>
        
    </label>  
    </form>
    <br></br>
    <br></br>

    <form>
    <label>
        <textarea id="textarea" name="textarea " 
        required="required" rows="15" cols="60" 
        placeholder="Deixe aqui sua mensagem aqui." autofocus="" ></textarea>
        <br></br>
        <input type="reset" value="Limpar"/>
        &nbsp;
        <input type="submit" value="Confirmar"/>
    </label>
    </form>
    
    

    </div>
)

export default Comunidade
