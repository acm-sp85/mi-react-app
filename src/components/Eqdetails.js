import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function EqDetails(props) {
  const item = props.equipment;
  return (
    <Container>
      <Row>
        <Col>
          <img
            src={item.img_url}
            className="eq-card-img"
            id={item.id}
            alt="error"
          ></img>
        </Col>
        <Col className="eq-details">
          <h2>
            {item.brand}-{item.name}
          </h2>
          <p>Type: {item.type} </p>
          <p>Purchase Price: ${item.purchasePrice}</p>
          <p>Current Price: ${item.marketPrice}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default EqDetails;
