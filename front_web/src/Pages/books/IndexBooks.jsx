import React from 'react';
import { listarTodosLivros } from '../../Api/ApiService';
import Book from '../../Components/layout/Book';
import './IndexBooks.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthContext';
export default function IndexBooks() {

  const { user } = React.useContext(AuthContext);

  const navigate = useNavigate();
  const [livros, setLivros] = React.useState([]);

  React.useEffect(() => {
    getBooks();
    
  }, []);

  function getBooks() {
    listarTodosLivros().then((response) => {
      setLivros(response.data);
    }).catch((error) => {
      console.log(error);
    });
    
  }

  return (
    <div>
      <div className='containerBotoes'>
        {user.isAdmin && <button className="botaoLivros" onClick={() => navigate("/books/saved")}>Livros Salvos</button>}
       {!user.isAdmin && <button className="botaoLivros">Editar Livro</button>}
        {!user.isAdmin && <button className="botaoLivros">Excluir Livro</button>}
        {!user.isAdmin && <button className="botaoLivros" onClick={()=>navigate("/books/add")}>Adicionar Livro</button>}
      </div>
    <div className='container'>
      {livros.map((livro) => {
        return (<Book key={ livro.idLivro} livro={livro}></Book>);
      })}
    </div>
    </div>
  );
}
