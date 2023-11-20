import "../Pages/Home.css";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/teste");
  }
  return (
    <div className="conteudo">
      <h1 className="titulo">
        Cansou da sua prateleira? Siga uma das nossas recomendações!
      </h1>
      <h2 className="subtitulo">É só fazer o teste</h2>
      <button className="botao" onClick={handleClick}>
        Iniciar Teste
      </button>
    </div>
  );
}
