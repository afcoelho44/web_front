import React from "react";
import Answer from "./layout/Answer";
import { consultarRespostasPorIdPergunta } from "../Api/ApiService";



export default function Answers(idPergunta) { 
    const [respostas, setRespostas] = React.useState([]);
    
    React.useEffect(() => {
        let data = idPergunta; // Assign the object directly to data
        let id = data.idPergunta; // Access the id property of the object
        console.log(data);
        console.log(id);
        consultarRespostasPorIdPergunta(id).then((response) => {
           setRespostas(response.data);
        }).catch((error) => {
            console.log(error);
        });
        console.log(respostas);
    }, []);
    
    return (
        <>
        {Array.isArray(respostas) && respostas.map((resposta) => <Answer resposta={resposta} key={resposta.idResposta} />)}
        </>
    );
}