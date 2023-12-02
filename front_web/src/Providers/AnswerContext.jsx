import React from "react";

export const AnswerContext = React.createContext();

export const AnswerProvider = (props) => {
  const [respostasSelecionadas, setRespostasSelecionadas] = React.useState([]);
  const [respostasAtuais, setrespostasAtuais] = React.useState(() => new Map());
  return (
    <AnswerContext.Provider
      value={{ respostasSelecionadas, setRespostasSelecionadas, respostasAtuais, setrespostasAtuais }}
    >
      {props.children}
    </AnswerContext.Provider>
  );
};
