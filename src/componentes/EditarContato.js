import React from "react";

class EditarContato extends React.Component {
  constructor(props) {
    super (props);
    const {id, nome, email} = props.location.state.contato;
    this.state = {
      id,
      nome,
      email,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.nome === "" || this.state.email === "") {
      alert("Todos os campos são obrigatórios.");
      return;
    }
    this.props.editorContatos(this.state);
    this.setState({ nome: "", email: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Editar Contato</h2>
        <form className="ui form" onSubmit={this.update}>
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
          <button className="ui button blue">Editar</button>
        </form>
      </div>
    );
  }
}

export default EditarContato;
