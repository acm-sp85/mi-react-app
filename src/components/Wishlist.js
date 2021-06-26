import React from "react";

function Wishlist(props) {
  const avatar = props.equipment.map((post) => {
    return (
      <div key={post.id} className="eq-grid">
        <img
          src={post.img_url}
          id={post.id}
          className="eq-grid-img"
          onMouseEnter={props.handleHover}
          onClick={props.handleClick}
        ></img>
      </div>
    );
  });

  return <div>{avatar}</div>;
}

export default Wishlist;
