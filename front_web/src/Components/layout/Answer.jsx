import React from "react";


const Answer = ({ resposta }) => {
    return (
    <div className="resposta">
    <input
        type="radio"
        className="alternativa"
        name="opcao"
        value={resposta.idResposta}
    />{resposta.conteudo}
    <br />
    </div>
);
};

export default Answer;
