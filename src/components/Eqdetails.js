import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function EqDetails(props) {
  const item = props.equipment;
  return (
    <Container>
      <Row>
        <Col>
          <img src={item.img_url} className="eq-card-img" id={item.id}></img>
        </Col>
        <Col className="eq-details">
          <h2>
            {item.brand}-{item.name}
          </h2>
          <h3>{item.medium}</h3>
          <p>{item.type} </p>
          <p>{item.category} </p>
          <p># of items: {item.amount}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default EqDetails;
