import React, { useState } from "react";


const Answer = (props) => {
    return (
        <div className="resposta">
            <input
                type="radio"
                className="alternativa"
                name={`opcao${props.idPergunta}`}
                value={props.resposta.idResposta}
                checked={ props.isChecked(props.resposta.idResposta) }
                onChange={(event) => {
                    props.setRespostaSelecionada(event.target.value);
                }}
            />
            {props.resposta.conteudo}
        </div>
    );
};

export default Answer;
