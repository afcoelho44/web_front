import "../Pages/Test.css";

export default function Test() {
  return (
    <div className="conteudoTest">
      <h1 className="tituloTest">Pergunta n</h1>
      <div className="pergunta">
        <p className="conteudoPergunta">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="respostas">
        <input
          type="radio"
          className="alternativa"
          name="opcao"
          value="resposta1"
        />
        Resposta 1 <br />
        <input
          type="radio"
          className="alternativa"
          name="opcao"
          value="resposta2"
        />
        Resposta 2 <br />
        <input
          type="radio"
          className="alternativa"
          name="opcao"
          value="resposta3"
        />
        Resposta 3<br />
        <input
          type="radio"
          className="alternativa"
          name="opcao"
          value="resposta4"
        />
        Resposta 4<br />
      </div>
    </div>
  );
}
