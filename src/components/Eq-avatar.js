import React from "react";
import { Container } from "react-bootstrap";

function EqAvatar(props) {
  const avatar = props.equipment.map((post) => {
    return (
      <Container key={post.id}>
        <div key={post.id} className="eq-avatar">
          <img
            src={post.img_url}
            alt="error"
            id={post.id}
            className="eq-avatar"
            onMouseEnter={props.handleHover}
            onClick={props.handleClick}
          ></img>
        </div>
      </Container>
    );
  });

  return <div className="row-of-avatars">{avatar}</div>;
}

export default EqAvatar;
