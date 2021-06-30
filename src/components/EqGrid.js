import React from "react";
import "../EqGrid.css";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function EqGrid(props) {
  const allEq = props.equipment.map((item) => {
    return (
      <Col key={item.id} className="col-md-4">
        <img src={item.img_url} className="img-medium"></img>
      </Col>
    );
  });
  return <Row className="img-medium">{allEq}</Row>;
}

export default EqGrid;
