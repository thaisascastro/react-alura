import React, {Component} from "react";
import './style.css';
import {ReactComponent as DeleteSVG} from "../../assets/delete.svg";

// para usar o react component usa-se o {ReactComponent as  .... (em maiúsculo))}

export default class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={() => console.log("Deleta")}/>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}