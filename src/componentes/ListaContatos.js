import React from "react";
import { Link } from "react-router-dom";
import CardContato from "./CardContato";

const ListaContatos = (props) => {
  console.log(props);

  const deletadorContatos = (id) => {
    props.getContactId(id);
  };

  const renderizarListaContatos = props.contatos.map((contato) => {
    return (
      <CardContato
        contato={contato}
        clickHander={deletadorContatos}
        key={contato.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Lista de contatos
        <Link to="/add">
          <button className="ui button blue right">Adicionar Contato</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderizarListaContatos}</div>
    </div>
  );
};

export default ListaContatos;
