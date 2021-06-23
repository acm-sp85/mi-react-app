import React from "react";

function EqDetails(props) {
  const items = props.equipment.map((post) => {
    return (
      <div key={post.id} className="eq-card">
        <img src={post.img_url} className="eq-card-img"></img>
        <h1>
          {post.brand}-{post.name}
        </h1>
        <h3>{post.medium}</h3>
        <p>{post.type} </p>
        <p>{post.category} </p>
        <p># of items: {post.amount}</p>
      </div>
    );
  });

  return <div className="row-of-cards">{items}</div>;
}

export default EqDetails;
