import React, { Component } from "react";
import './styles.css';

class ListaDeCategorias extends Component {

  _handleEventoInput(e) {
    console.log(e)

    if(e.key == "Enter") {
      let valorCategorias = e.target.value;

      this.props.adicionarCategorias(valorCategorias);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
      <ul className="lista-categorias_lista">
        {this.props.categorias.map((categorias, index) => {
          return <li key={index} className="lista-categorias_item">{categorias}</li>
        })}      
      </ul>
      <input type="text" 
      className="lista-categorias_input" 
      placeholder="Adicionar Categoria" 
      onKeyUp={this._handleEventoInput.bind(this)}/>
      </section>
    );
  }
}

export default ListaDeCategorias