import { useState } from "react";
import "../users/Login.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    navigate("/");
  }
  return (
    <div className="conteudoLogin">
      <h1>Login</h1>
      <form>
        <label>
          Email:
          <input type="email" name="name" />
        </label>
        <label>
          Senha:
          <input type="password" name="password" />
        </label>
        <button type="submit" value="Submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
