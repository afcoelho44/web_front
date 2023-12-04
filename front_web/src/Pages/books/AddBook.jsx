import React from "react";
import "./AddBook.css";
import { useNavigate } from "react-router-dom";
import {listarTodasCategorias} from "../../Api/ApiService";

export default function AddBook() { 
  const [categorias, setCategorias] = React.useState({});

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
  const [classificacao, setClassificacao] = React.useState(0);
  const [avaliacao, setAvaliacao] = React.useState(0);
  const [subtitulo, setSubtitulo] = React.useState("");
  const [anoPublicacao, setAnoPublicacao] = React.useState("");

    const handlerSubmit = async (event) => {
        event.preventDefault();
        // recoverUser();
        // saveUser();
    };
    
    function recoverUser() {
        const User = {
        nome: nome,
        cpf:CPF,
        email: email,
        senha: password,
        };
        setNewUser(User);
    }
    
    function saveUser() {
        // cadastrarUsuario(newUser)
        // .then(() => {
        //     navigate("/painel/usuario");
        //     console.log("Usuario registrado: " + newUser);
        // })
        // .catch((erro) => console.log(erro));
    }
    

  return (
<div className="conteudoRegister">
    <h1>Cadastro</h1>
    <form onSubmit={handlerSubmit}>
        <label>
          titulo:
            <input type="text" name="nomtituloe" onChange={(e)=>setTitulo(e.target.value)}/>
        </label>
        <label>
          Autor:
            <input type="text" name="autor" onChange={(e)=>setAutor(e.target.value)} />
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
              <option key={categoria.id} value={categoria}>
                {categoria.nome}
              </option>
            ))}</select>
        </label>
        <label>
            N° de páginas:
            <input type="number" name="email" onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label>
            Senha:
            <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <button type="submit" value="Submit">
        Salvar
        </button>
    </form>
    </div>
    );
}