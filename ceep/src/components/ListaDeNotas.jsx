import React, {Component} from "react";
import CardNota from "./CardNota/CardNota";


export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Trabalho", "Trabalho").map((categoria, index) => {
          return (
            <li key={index}>
              
              <CardNota/>
            </li>
          )
        })}
    </ul>
    )
  }
}