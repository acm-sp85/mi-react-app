import React from "react";

function EqDetails(props) {
  const item = props.equipment;
  return (
    <div key={item.id} className="eq-grid">
      <img src={item.img_url} className="eq-card-img" id={item.id}></img>
      <h1>
        {item.brand}-{item.name}
      </h1>
      <h3>{item.medium}</h3>
      <p>{item.type} </p>
      <p>{item.category} </p>
      <p># of items: {item.amount}</p>
    </div>
  );
}

export default EqDetails;
