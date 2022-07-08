import React from "react";

function Card(props) {
return (

<div className="card" style={{"width": "18rem"}}>
  <img className="card-img-top" src={props.img} alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">{props.titulo}</h5>
    <p className="card-text">{props.p}</p>
    <a href="#" className="btn btn-primary">{props.go}</a>
  </div>
</div>
);
}
export default Card;