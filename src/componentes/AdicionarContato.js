import React from "react";

class AdicionarContato extends React.Component {
  state = {
    nome: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.nome === "" || this.state.email === "") {
      alert("Todos os campos são obrigatórios.");
      return;
    }
    this.props.adicionadorContatos(this.state);
    this.setState({ nome: "", email: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Adicionar Contato</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={this.state.nome}
              onChange={(e) => this.setState({ nome: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Adicionar</button>
        </form>
      </div>
    );
  }
}

export default AdicionarContato;
