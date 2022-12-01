import React from "react";


export default function Card(props) {
  const { name, price, date, color } = props;

  return (
    <div className="card--container">
      <h1 className="card--tittle">{props.name}</h1>
      <p className="card--price">R$ {props.price}</p>
      <p className="card--date">{props.date}</p>
      <p className="card--color">{props.color}</p>
    </div>
  )

  // return (
  //   <div className="card--container">
  //     <h1 className="card--tittle">{name}</h1> 
  //     <p className="card--price">R$ {price}</p>
  //     <p className="card--date">{date}</p>
  //     <p className="card--color">{color}</p>
  //   </div>
  // )
};
