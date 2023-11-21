import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "aplication/json",
  },
});

// (-----------------Categorias-------------------)
export const listarTodasCategorias = () => {
  api.get(`/categorias`);
};

// (-------------------Curtidos--------------------------)
export const listarLivrosCurtidosPorUsuario = (idUsuario) =>
  api.get(`/curtidos/${idUsuario}`);

export const adicionarLivrosAosCurtidos = (idUsuario, idLivro) =>
  api.post(`/${idUsuario}/adicionar/${idLivro}`);

export const removerLivrosDosCurtidos = (idUsuario, idLivro) =>
  api.delete(`/${idUsuario}/remover/${idLivro}`);

// (-----------------Livros------------------)

export const listarTodosLivros = () => api.get(`/livros`);

export const salvarLivro = (livro) => api.post(`/livros/cadastrar`, livro);

export const buscarLivroPeloId = (idLivro) => api.get(`livros/${idLivro}`);

export const buscarlivrosPorCategoria = (idCategoria) =>
  api.get(`/livros/categoria/${idCategoria}`);

export const buscarLivroPeloTitulo = (titulo) =>
  api.get(`/livros/titulo/${titulo}`);

export const deletarLivro = (idLivro) =>
  api.delete(`/livros/deletar/${idLivro}`);

export const atualizarLivro = (idLivro, livro) =>
  api.put(`/livros/atualizar/${idLivro}`, livro);

// (-----------------Perguntas------------------)

export const listarTodasPerguntas = () => api.get(`/api/perguntas`);

//(----------------------Respostas------------------------)

export const consultarRespostasPorIdPergunta = (idPergunta) =>
  api.get(`/api/respostas/pergunta/${idPergunta}`);

export const processarRespostas = (respostas) =>
  api.post(`/api/respostas/processar`, respostas);

export const listarTodasRespostas = () => api.get(`/api/respostas`);

// (-------------------Usuarios----------------------)

export const cadastrarUsuario = (usuario) =>
  api.post(`/usuarios/cadastrar`, usuario);
