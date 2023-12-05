import React from "react";
import "./AddBook.css";
import { useNavigate } from "react-router-dom";
import {listarTodasCategorias, salvarLivro} from "../../Api/ApiService";

export default function AddBook() { 
  const [categorias, setCategorias] = React.useState([]);

  React.useEffect(() => {
    getCategoriasLista();
  }, []);

  function getCategoriasLista() {
    listarTodasCategorias().then((response) => {
    setCategorias(response.data)
    })
      .catch((erro) => console.log(erro));
  }


    const navigate = useNavigate();

  const [categoria, setCategoria] = React.useState({});
  const [titulo, setTitulo] = React.useState("");
  const [autor, setAutor] = React.useState("");
  const [descricao, setDescricao] = React.useState(""); 
  const [pagina, setPagina] = React.useState(0);
  const [subtitulo, setSubtitulo] = React.useState("");
  const [anoPublicacao, setAnoPublicacao] = React.useState("");
  const [livro, setLivro] = React.useState({});

    const handlerSubmit = async (event) => {
        event.preventDefault();
        recoverBook();
        saveBook();
    };
    
    function recoverBook() {
        const livro = {
        titulo: titulo,
        autor:autor,
        categoria: categoria,
          descricao: descricao,
          pagina: pagina,
          subtitulo: subtitulo,
          anoPublicacao: anoPublicacao
        };
        setLivro(livro);
    }
    
    function saveBook() {
      salvarLivro(livro)
        .then(() => {
            navigate("/books");
            console.log("Livro registrado: " + livro);
        })
        .catch((erro) => console.log(erro));
    }
    

  return (
<div className="conteudoRegister">
    <h1>Cadastro</h1>
    <form onSubmit={handlerSubmit}>
        <label>
          titulo:
            <input type="text" name="titulo" onChange={(e)=>setTitulo(e.target.value)}/>
        </label>
        <label>
          titulo:
            <input type="text" name="subtitulo" onChange={(e)=>setSubtitulo(e.target.value)}/>
        </label>
        <label>
          Autor:
            <input type="text" name="autor" onChange={(e)=>setAutor(e.target.value)} />
        </label>
        <label>
          titulo:
            <input type="text" name="anoPublicacao" onChange={(e)=>setAnoPublicacao(e.target.value)}/>
        </label>
        <label>
          Descrição:
            <textarea name="descricao" rows="5" cols="33">
            </textarea>
          </label>
        <label>
          Categoria: 
          <select name="categoria" onChange={(e)=>setCategoria(e.target.value)}>
            {categorias.map((categoria) => (
              <option key={`categoria${categoria.idCategoria}`} value={categoria}>
                {categoria.nome}
              </option>
            ))}</select>
        </label>
        <label>
            N° de páginas:
            <input type="number" name="paginas"  min="10" max="2000" onChange={(e)=>setPagina(e.target.value)}/>
        </label>
        <button type="submit" value="Submit">
        Salvar
        </button>
    </form>
    </div>
    );
}