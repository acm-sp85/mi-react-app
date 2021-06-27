import React from "react";
import "../EqGrid.css";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function EqGrid(props) {
  const allEq = props.equipment.map((item) => {
    return (
      <Container key={item.id} className="eq-grid">
        <img src={item.img_url} className="eq-grid-img"></img>
      </Container>
    );
  });
  return <div className="eq">{allEq}</div>;
}

export default EqGrid;
