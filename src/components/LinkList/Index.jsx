import React from "react";
import "./Index.css";

export default function LinkList() {
  return (
    <div className="list-container">
      <ul className="list">
        <li className="list-item">
          <a href="https://www.linkedin.com/in/yuri-player35/">
            Conheça minha História no Linkedin!
          </a>
        </li>
        <li className="list-item">
          <a href="https://github.com/Player35Oficial">
            Acompanhe meu Desenvolvimento no Github
          </a>
        </li>
        <li className="list-item">
          <a href="https://instagram.com/player35">
            Faça amizade comigo no Instagram &#x1F9E1;
          </a>
        </li>
      </ul>
    </div>
  );
}
