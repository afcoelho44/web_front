import React from 'react';
import { listarTodosLivros } from '../../Api/ApiService';
import Book from '../../Components/layout/Book';
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
    <div>
      {livros.map((livro) => {
        return (<Book key={ livro.idLivro} livro={livro}></Book>);
      })}
    </div>
  );
}
