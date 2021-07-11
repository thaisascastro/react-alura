import React, {Component} from "react";
import CardNota from "../CardNota/CardNota";
import "./style.css";

export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of("Trabalho", "Trabalho", "Trabalho").map((categoria, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              
              <CardNota/>
            </li>
          )
        })}
    </ul>
    )
  }
}