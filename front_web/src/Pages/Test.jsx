import React, { useState, useEffect } from 'react'; //adicionar estado a um componente de função, armazenar as perguntas recebidas da api.
import { listarTodasPerguntas } from  "../Api/ApiService"; 

import '../Pages/Test.css';
import Questions from '../Components/Questions';

export default function Test() {
  const [perguntas, setPerguntas] = useState([]);

  useEffect(() => { //faz a requisição a api para buscar todas as perguntas
    // Função para buscar e definir as perguntas no estado
    const fetchPerguntas = async () => {
      try {
        const response = await listarTodasPerguntas();
        console.log('Resposta da API:', response.data); // Verifique a resposta da API no console
        setPerguntas(response.data);
      } catch (error) {
        console.error('Erro ao obter perguntas:', error);
      }
    };

    // Chamada da função de busca quando o componente monta
    fetchPerguntas();
  }, []); // O array vazio [] garante que o useEffect é executado apenas uma vez ao montar o componente

  console.log('Perguntas no estado:', perguntas); // Verifique se as perguntas estão sendo armazenadas no estado

  return (
    <div >
      <Questions/>
    </div>
  );
}

/*Estado (useState): Imagine o estado como um armário onde podemos guardar informações. Aqui, estamos criando um armário chamado perguntas para guardar informações sobre as perguntas.
useEffect: É como uma instrução que diz: "Quando o site começar, faça isso." Aqui, quando o site começa, ele vai buscar (ou "pegar") as perguntas da API (uma espécie de servidor de informações).
fetchPerguntas: É como enviar uma carta para a API pedindo informações (perguntas, neste caso) e, quando a resposta (as perguntas) chegar, guardamos essas perguntas no armário perguntas.
Renderização condicional: Aqui, o código diz: "Se tiver perguntas, mostre-as. Se não tiver, diga que não há perguntas."
Componente de visualização: Aqui, estamos usando um loop para pegar cada pergunta e mostrá-la na página. É como fazer uma lista de coisas que queremos mostrar.
Espaço para respostas: Há um espaço reservado para mostrar respostas, mas no momento está vazio. Isso é como deixar um espaço na página para mostrar as respostas, mas ainda não colocamos nada lá.

Resumindo, o código pega perguntas de um lugar especial na internet (a API), guarda essas perguntas em um lugar especial no código (o estado perguntas), e depois mostra essas perguntas na página web.*/


