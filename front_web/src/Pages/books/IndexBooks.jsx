import React from 'react';
import { listarTodosLivros } from '../../Api/ApiService';
import Book from '../../Components/layout/Book';
import './IndexBooks.css';
export default function IndexBooks() {

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
    <div className='container'>
      {livros.map((livro) => {
        return (<Book key={ livro.idLivro} livro={livro}></Book>);
      })}
    </div>
  );
}
