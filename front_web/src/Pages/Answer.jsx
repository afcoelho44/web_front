import React from "react";
import "../Pages/Answer.css";
import imagem from "../img/capaLivro.jpg";
import { useParams } from "react-router-dom";

export default function Answer() {
  const category = useParams();
  console.log(category);
  return (
    <div className="conteudoAnswer">
      <div className="AnswerText">
        <h2 className="subtituloAnswer"> Seu gênero favorito é </h2>
        <h1 className="tituloAnswer">{category.category}</h1>
        <h2 className="subtituloAnswer">
          Essas são as nossas sujestões para você!
        </h2>
      </div>
      <div className="recomendacao">
        <img src={imagem} className="imagemlivro"></img>
        <div className="dadosLivro">
          <h3>Nome do Livro</h3>
          <h3>Autor</h3>
        </div>
        <p>
          <h3>Sumário</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}
