import React from "react";
import Card from "./Card";
import Answers from "../Answers";


const Question = ({ pergunta })=> { 
    console.log(pergunta);
    return (
        <Card id={ pergunta.idPergunta}>
            <h1 className="tituloTest">Sobre você, me diga: </h1>
            <div className="pergunta">
            <p className="conteudoPergunta">{ pergunta.conteudoPergunta}</p>
            </div>
            <Answers idPergunta={pergunta.idPergunta} />
       </Card> 
    );
}

export default Question;
