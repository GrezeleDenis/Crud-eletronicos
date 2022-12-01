import React from "react";


export default function Card(props) {
  // const {name, price, date, color} = props;

  return (
    <div className="card--container">
      <h1 className="card--tittle">-Eletrônico-</h1>
      <p className="card--name">Nome: {props.name}</p>
      <p className="card--price">Preço: R${props.price}</p>
      <p className="card--date">Ano: {props.date}</p>
      <p className="card--color">Cor: {props.color}</p>
    </div>
  )

};
