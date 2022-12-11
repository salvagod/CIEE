import React from "react";
import { Link } from "react-router-dom";
import user from "../imagens/user.png";

const CardContato = (props) => {
  const { id, nome, email } = props.contato;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{ pathname: `/contato/${id}`, state: { contato: props.contato } }}
        >
          <div className="header">{nome}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link
        to={{ pathname: `/edit`, state: { contato: props.contato } }}
        >
      <i
        className="edit alternate outline icon"
        style={{ color: "blue", marginTop: "7px" }}
      ></i>
      </Link>
    </div>
  );
};

export default CardContato;
