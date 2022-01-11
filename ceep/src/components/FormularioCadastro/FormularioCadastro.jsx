import React, { Component } from "react";
import "./style.css";
export default class FormularioCadastro extends Component {

  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(event) {
    this.titulo = event.target.value
    event.stopPropagation();
  }

  _handleMudancaTexto(event) {
    this.texto = event.target.value
    event.stopPropagation();
  }

  _criarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo, this.texto)
  }

  render() {
    return (
      <form className="form-cadastro"
      onSubmit= {this._criarNota.bind(this)}
      >
        <select className="form-cadastro-input">
          {this.props.categorias.map(categorias => {
            return (
              <option>{categorias}</option>
            )
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
          // chamar função quando for desparado handler
          // {} significa evento JS
          // constructor -> guardar atributos ao clicar
          // _ -> significa privados a instância
          // preventDefault -> prevenir o evento sem carregar página
          // stopPropagation -> impedir que desencadeie event click
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}
