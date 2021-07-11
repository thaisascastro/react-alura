import React, { Component } from "react";
import "./style.css";
export default class FormularioCadastro extends Component {

  constructor() {
    super();
    this.titulo = "";
    this.texto = "";
  }

  handleMudancaTitulo(event) {
    this.titulo = event.target.value
  }

  handleMudancaTexto(event) {
    this.texto = event.target.value
  }

  criarNota(event) {
    console.log(`uma nova nota foi criada {this.titulo} e {this.texto}.`)
  }

  render() {
    return (
      <form className="form-cadastro"
      onSubmit= {this.criarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudancaTitulo.bind(this)}
          // chamar função quando for desparado handler
          // {} significa evento JS
          // constructor -> guardar atributos ao clicar
          // _ -> significa privados a instância
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this.handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}
