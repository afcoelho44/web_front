import React, { useState }from "react";
import Answer from "./layout/Answer";
import { consultarRespostasPorIdPergunta } from "../Api/ApiService";



export default function Answers(props) { 
    const [respostas, setRespostas] = React.useState([]);
    setRespostas(props.respostas);
    // React.useEffect(() => {
    //     consultarRespostasPorIdPergunta(id).then((response) => {
    //         setRespostas(response.data);
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // }, []);

    const [respostaSelecionada, setRespostaSelecionada] = useState(0);

    function alterarRespostaSelecionada(idResposta) {
        setRespostaSelecionada(idResposta);
    }
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
        {respostas.map((resposta) =>
            <Answer resposta={resposta}
                key={resposta.idResposta}
                idPergunta={props.idPergunta}
                isChecked={isChecked}
                alterarRespostaSelecionada={alterarRespostaSelecionada} />)}
    </div>
    );
}
