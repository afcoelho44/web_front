import "../Pages/Home.css";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/test");
  }
  return (
    <div className="conteudoHome">
      <h1 className="tituloHome">
        Cansou da sua prateleira? Siga uma das nossas recomendações!
      </h1>
      <h2 className="subtituloHome">É só fazer o teste</h2>
      <button className="botaoHome" onClick={handleClick}>
        Iniciar Teste
      </button>
    </div>
  );
}
