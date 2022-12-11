import React from "react";
import { Link } from "react-router-dom";
import user from "../imagens/user2.png";

const DetalhesContato = (props) => {
  const { nome, email } = props.location.state.contato;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{nome}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Voltar para a lista de contatos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DetalhesContato;
