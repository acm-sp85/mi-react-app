import React from "react";

function EqAvatar(props) {
  const avatar = props.equipment.map((post) => {
    return (
      <div key={post.id} className="eq-avatar">
        <img src={post.img_url} className="eq-avatar"></img>
      </div>
    );
  });

  return <div className="row-of-avatars">{avatar}</div>;
}

export default EqAvatar;
