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
            <Answers respostas={props.answerList}
                idPergunta={props.pergunta.id}
                addRespostasAtuais={props.addRespostasAtuais} />
       </Card> 
    );
}

export default Question;
