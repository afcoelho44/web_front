import React from "react";
import { listarTodasPerguntas } from "../Api/ApiService";
import Question from "../Components/layout/Question";

export default function Questions() { 

    const [perguntas, setPerguntas] =React.useState([]);
    React.useEffect(() => {
        let data = [];
        listarTodasPerguntas().then((response) => {
           setPerguntas(response.data);
        }).catch((error) => {
            console.log(error);
        });
            }, []);
    
    return (
        <div className="container">
            <h1>Questions</h1>
            {Array.isArray(perguntas) && perguntas.map((pergunta) => <Question pergunta={pergunta} key={ pergunta.idPergunta} />)}
        </div>
    );
}