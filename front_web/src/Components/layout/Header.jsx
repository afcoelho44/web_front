import "../layout/Header.css";
import imglogin from "../../img/usuario-do-circulo.png";

export default function Header() {
  return (
    <div className="conteudoHeader">
      <nav>
        <ul className="menu">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/books" className="nav-link">
              Books
            </a>
          </li>
        </ul>
        <a href="/" className="logo">
          IWE
        </a>
        <a href="/users/add" className="login">
          <img src={imglogin}></img>
        </a>
      </nav>
    </div>
  );
}
