import React from "react";
import CardBook from "./CardBook";
import Modal from 'react-modal';
import { TbX } from "react-icons/tb";


Modal.setAppElement('#root');

const Book = (props) => { 
    const [modalIsOpen, setIsOpen] = React.useState(false);

        function openModal() {
    setIsOpen(true);
    }

    function closeModal() {
    setIsOpen(false);
    }

    return (
        <CardBook id={ props.livro.idLivro}>
            <div className="recomendacao" onClick={openModal}>
                {/* <img src={imagem} className="imagemlivro"></img> */}
                <div className="dadosLivro">
                    <h3>Nome do Livro : {props.livro.titulo}</h3>
                    <h3>Autor: { props.livro.autor}</h3>
            </div>
            <p>
                <strong>Sumário</strong><br />
                    { props.livro.descricao}
                </p>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel='Modal Exemplo' className="modal"
                overlayClassName="modal-overlay" closeTimeoutMS={200}>
                <TbX onClick={closeModal}/>
                <div className="conteudoModal">
                <h2>{props.livro.titulo}</h2>
                <h4>Subtitulo: { props.livro.subtitulo }</h4>
                <h4>Categoria: {props.livro.categoria.nome}</h4>
                <h4>Autor: {props.livro.autor}</h4>
                <h4>N° de páginas: {props.livro.pagina}</h4>
                <h4>Classificação: {props.livro.classificacao}</h4>
                <h4>Ano de publicação: { props.livro.anoPublicação}</h4>
                <p>
                    <strong>Sumário</strong><br />
                    { props.livro.descricao}
                </p>
                
                </div>
                
        </Modal>
       </CardBook> 
    );
}

export default Book;
