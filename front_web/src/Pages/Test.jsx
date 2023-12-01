import React, { useState, useEffect } from 'react'; //adicionar estado a um componente de função, armazenar as perguntas recebidas da api.
import { listarTodasPerguntas } from  "../Api/ApiService"; 

import '../Pages/Test.css';
import Questions from '../Components/Questions';

export default function Test() {
  return (
    <div >
      <Questions/>
    </div>
  );
}

