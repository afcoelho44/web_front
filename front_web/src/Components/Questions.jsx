import React from "react";
import { listarTodasPerguntas } from "../Api/ApiService";
import Question from "../Components/layout/Question";
import "../Components/Questions.css";

export default function Questions() { 

    const [perguntas, setPerguntas] =React.useState([]);
    React.useEffect(() => {
        listarTodasPerguntas().then((response) => {
        setPerguntas(response.data);
        }).catch((error) => {
            console.log(error);
        });
            }, []);
    
    return (
        <div className="container">
            {Array.isArray(perguntas) && perguntas.map((pergunta) => <Question pergunta={pergunta} key={ pergunta.idPergunta} />)}
        </div>
    );
}