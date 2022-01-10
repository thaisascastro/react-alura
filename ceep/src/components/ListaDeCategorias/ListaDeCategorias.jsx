import React, { Component, Fragment } from "react";
import './styles.css';

class ListaDeCategorias extends Component {
  render() {
    return (
      <Fragment className="lista-categorias">
      <ul className="lista-categorias_lista">
        <li className="lista-categorias_item">Categorias</li>
        <li>Categorias</li>
        <li>Categorias</li>
        <li>Categorias</li>
      </ul>
      <input type="text" className="lista-categorias_input"/>
      </Fragment>
    );
  }
}

export default ListaDeCategorias