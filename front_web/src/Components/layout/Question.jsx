import React from "react";
import Card from "./Card";
import Answers from "../Answers";


const Question = (props)=> { 
    return (
        <Card id={ props.pergunta.idPergunta}>
            <h1 className="tituloTest">Sobre você, me diga: </h1>
            <div className="pergunta">
            <p className="conteudoPergunta">{ props.pergunta.conteudoPergunta}</p>
            </div>
            <Answers idPergunta={props.pergunta.idPergunta} addRespostasAtuais={ props.addRespostasAtuais} />
       </Card> 
    );
}

export default Question;
