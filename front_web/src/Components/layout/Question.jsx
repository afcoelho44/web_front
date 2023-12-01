import React from "react";
import Card from "./Card";

const Questions = ({ pergunta })=> { 
    console.log(pergunta);
    return (
        <Card id={ pergunta.idPergunta}>
            <h1 className="tituloTest">Pergunta n</h1>
            <div className="pergunta">
            <p className="conteudoPergunta">{ pergunta.conteudoPergunta}</p>
            </div>
            
       </Card> 
    );
}

export default Questions;

