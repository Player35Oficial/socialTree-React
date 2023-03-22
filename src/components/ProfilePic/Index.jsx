import React from "react";
import "./Index.css";

export default function ProfilePic() {
  return (
    <div className="profile-container">
      <img
        className="profile-img"
        src="https://avatars.githubusercontent.com/u/85082875?v=4"
        alt="Foto de Perfil"
      />
      <a href="https://instagram.com/player35_" target="_blank">
        @player35_
      </a>
    </div>
  );
}
