import React from "react";
import "../EqGrid.css";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function EqGrid(props) {
  const allEq = props.equipment.map((item) => {
    return (
      <Container key={item.id}>
        <div key={item.id} className="eq-avatar">
          <img
            src={item.img_url}
            className="eq-grid-img"
            id={item.id}
            className="eq-avatar"
            onMouseEnter={props.handleHover}
            onClick={props.handleClick}
          ></img>
          <p>
            {item.name}-{item.brand}
          </p>
        </div>
      </Container>
    );
  });
  return <div className="eq">{allEq}</div>;
}

export default EqGrid;
