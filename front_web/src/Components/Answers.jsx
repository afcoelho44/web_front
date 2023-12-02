import React, { useState }from "react";
import Answer from "./layout/Answer";
import { consultarRespostasPorIdPergunta } from "../Api/ApiService";



export default function Answers(props) { 
    const [respostas, setRespostas] = React.useState([]);
    let data = props; // Assign the object directly to data
    let id = data.idPergunta; // Access the id property of the object
    React.useEffect(() => {
       
        consultarRespostasPorIdPergunta(id).then((response) => {
            setRespostas(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const [respostaSelecionada, setRespostaSelecionada] = useState(0);

    function isChecked(idResposta) {
        if (respostaSelecionada == idResposta) {
            // console.log(respostaSelecionada);
            let pergunta_resposta = {
                idPergunta: id,
                idResposta: idResposta
            }
            props.addRespostasAtuais(pergunta_resposta);
            return true;
        }
        return false;
    }



    return (
        <div className="resposta-container">
            {respostas.map((resposta) => <Answer resposta={resposta} key={resposta.idResposta} idPergunta={id} isChecked={isChecked} setRespostaSelecionada={ setRespostaSelecionada} />)}
        </div>
    );
}