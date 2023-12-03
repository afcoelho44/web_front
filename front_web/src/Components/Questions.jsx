import React from "react";
import { listarTodasPerguntas, processarRespostas, consultarRespostasPorId } from "../Api/ApiService";
import Question from "../Components/layout/Question";
import "../Components/Questions.css";
import { AnswerContext } from "../Providers/AnswerContext";
import { useNavigate } from "react-router-dom";

export default function Questions() {

    const navigate = useNavigate(); 
    const [perguntas, setPerguntas] = React.useState([]);
    const [respostas, setRespostas] = React.useState([]);
    const { respostasAtuais, setrespostasAtuais } = React.useContext(AnswerContext);
    const {respostasSelecionadas, setRespostasSelecionadas} = React.useContext(AnswerContext);
    React.useEffect(() => {
        listarTodasPerguntas().then((response) => {
        setPerguntas(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    function addRespostasAtuais(pergunta_resposta) { 
        let aux = respostasAtuais;
        if (respostasAtuais.get(pergunta_resposta.idPergunta)) { 
            respostasAtuais.delete(pergunta_resposta.idPergunta);
            aux.set(pergunta_resposta.idPergunta, pergunta_resposta);
            setrespostasAtuais(aux);
        } else {
            aux.set(pergunta_resposta.idPergunta, pergunta_resposta);
            setrespostasAtuais(aux);
        }
    }

    async function handleSubmit(event) { 
        event.preventDefault();
        let aux = Array.from(respostasAtuais);
        setRespostasSelecionadas(aux);
        if (respostasSelecionadas.length !== 0) {
            let auxRespostas = await returnAnswer();
            const categoria = (await processarRespostas(auxRespostas)).data;
            navigate(`/answer/${categoria}`);
        }
    }
    async function returnAnswer() { 
        let arrayRespostas = [];
        respostasSelecionadas.forEach(async pergunta_resposta => {
            let respostaAux = (await consultarRespostasPorId(pergunta_resposta[1].idResposta)).data;
            arrayRespostas.push(respostaAux);
        });
        setRespostas(arrayRespostas);
        return respostas;
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="container">
                {perguntas.map((pergunta) => <Question pergunta={pergunta} key={pergunta.idPergunta} addRespostasAtuais={ addRespostasAtuais } />)}
            </div>

        <button className="btn btn-primary" type="submit" >Salvar</button>
        </form>
    );
}