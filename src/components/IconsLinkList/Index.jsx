import React from "react";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import "./Index.css";

export default function IconsLinkList() {
  return (
    <div className="icon-list-container">
      <ul className="icon-list">
        <li className="icon-list-item">
          <a href="https://www.linkedin.com/in/yuri-player35/">
            <img src={linkedin} alt="linkedin icon" />
          </a>
        </li>
        <li className="icon-list-item">
          <a href="https://github.com/Player35Oficial">
            <img src={github} alt="github icon" />
          </a>
        </li>
        <li className="icon-list-item">
          <a href="https://instagram.com/player35">
            <img src={instagram} alt="instagram icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}
