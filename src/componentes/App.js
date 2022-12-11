import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from '../api/contatos';
import "./App.css";
import Cabecalho from "./Cabecalho";
import AdicionarContato from "./AdicionarContato";
import ListaContatos from "./ListaContatos";
import DetalhesContato from "./DetalhesContato";
import EditarContato from "./EditarContato";

function App() {
  const LOCAL_STORAGE_KEY = "contatos";
  const [contatos, definirContatos] = useState([]);

  const trazerContatos = async () => {
    const resposta = await api.get("/contatos");
    return resposta.data;
  }

  const adicionadorContatos = async (contato) => {
    console.log(contato);
    const requisicao = {
      id:uuid(),
      ...contato
    }

    const resposta = await api.post("/contatos", requisicao);
    console.log(resposta);
    definirContatos([...contatos, resposta.data]);
  };

  const editorContatos = async (contato) => {
    const resposta = await api.put(`/contatos/${contato.id}`, contato);
    const {id, nome, email} = resposta.data;
    definirContatos(contatos.map(contato => {
      return contato.id === id ? {...resposta.data} : contato
    }));
  };

  const removedorContatos = async (id) => {
    await api.delete(`/contatos/${id}`);
    const novaListaContatos = contatos.filter((contato) => {
      return contato.id !== id;
    });

    definirContatos(novaListaContatos);
  };

  useEffect(() => {
    const listarTodosContatos = async () => {
      const todosContatos = await trazerContatos();
      if(todosContatos) definirContatos(todosContatos);
    };

    listarTodosContatos();
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contatos));
  }, [contatos]);

  return (
    <div className="ui container">
      <Router>
        <Cabecalho />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ListaContatos
                {...props}
                contatos={contatos}
                getContactId={removedorContatos}
              />
            )}
          />

          <Route
            path="/add"
            render={(props) => (
              <AdicionarContato {...props} adicionadorContatos={adicionadorContatos} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditarContato {...props} editorContatos={editorContatos} />
            )}
          />


         <Route path="/contato/:id" component={DetalhesContato} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
