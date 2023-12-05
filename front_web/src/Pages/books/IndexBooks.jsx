import React from 'react';
import { listarTodosLivros } from '../../Api/ApiService';
import Book from '../../Components/layout/Book';
import './IndexBooks.css';
import { useNavigate } from 'react-router-dom';
export default function IndexBooks() {

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
      <div>
        <button onClick={()=>navigate("/books/saved")}>Livros Salvos</button>
        <button>Editar Livro</button>
        <button>Deletar Livro</button>
        <button onClick={()=>navigate("/books/add")}>Adicionar Livro</button>
      </div>
    <div className='container'>
      {livros.map((livro) => {
        return (<Book key={ livro.idLivro} livro={livro}></Book>);
      })}
    </div>
    </div>
  );
}
