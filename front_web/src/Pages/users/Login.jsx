import React, { useState } from "react";
import "../users/Login.css";
import { useNavigate } from "react-router-dom";
import { autenticarUsuario } from "../../Api/ApiService";
import { AuthContext } from "../../Providers/AuthContext";


export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState({});
  const { setAutenticar, setUser, user, autenticar} = React.useContext(AuthContext);



  function recoverUser() {
    const User = {
      email: email,
      senha: password,
    };
    setNewUser(User);
  }
  function authenticateUser() {
    autenticarUsuario(newUser)
      .then((resposnse) => {
        setUser(resposnse.data);
        setAutenticar(true);
        console.log("Usuario autenticado: " + newUser);
      })
      .catch((erro) => {
        console.log(erro);
        setAutenticar(false);
      });
  }
  function handleSubmit(event) {
    event.preventDefault();
    recoverUser();
    authenticateUser();
    if(autenticar){
      navigate("/");
    }
  }
  return (
    <div className="conteudoLogin">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
        </label>
        <label>
          Senha:
          <input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}}/>
        </label>
        <button type="submit" value="Submit">
          Entrar
        </button>
      </form>
      <a href="/users/register">Não tem conta? Cadastre-se</a>
    </div>
  );
}
