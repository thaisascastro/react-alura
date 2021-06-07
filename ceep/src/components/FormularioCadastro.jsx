import React, { Component } from "react";

export default class FormularioCadastro extends Component {
  render() {
    return (
      <form>
      <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva uma nota..." />
        <button>Cria Nota</button>
      </form>
    )
  }
}