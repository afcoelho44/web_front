import React from "react";
import "./UsersRegister.css";
import { useNavigate } from "react-router-dom";
import { cadastrarUsuario } from "../../Api/ApiService";

export default function UsersRegister() { 
    
    const navigate = useNavigate();

    const [nome, setNome] = React.useState("");
    const [CPF, setCPF] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [newUser, setNewUser] = React.useState({});


    const handlerSubmit = async (event) => {
        event.preventDefault();
        recoverUser();
        saveUser();
    };
    
    function recoverUser() {
        const User = {
        nome: nome,
        cpf:CPF,
        email: email,
        senha: password,
        };
        setNewUser(User);
    }
    
    function saveUser() {
        cadastrarUsuario(newUser)
        .then(() => {
            navigate("/painel/usuario");
            console.log("Usuario registrado: " + newUser);
        })
        .catch((erro) => console.log(erro));
    }
    

    return (
<div className="conteudoRegister">
    <h1>Cadastro</h1>
    <form onSubmit={handlerSubmit}>
        <label>
            Nome:
            <input type="nome" name="nome" onChange={(e)=>setNome(e.target.value)}/>
        </label>
        <label>
            CPF:
            <input type="cpf" name="cpf" onChange={(e)=>setCPF(e.target.value)} />
        </label>
        <label>
            Email:
            <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label>
            Senha:
            <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <button type="submit" value="Submit">
        Salvar
        </button>
    </form>
    </div>
    );
}