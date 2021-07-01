import React from "react";
import "../Budget.css";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Budget(props) {
  return (
    <Container>
      <Row>
        <Col className="col-12">
          <h1>BUDGET OVERVIEW</h1>
        </Col>
      </Row>
      <Row>
        <Col className="col-6">
          <h2>Total cost of equipment: ${props.purchasedSum}</h2>
        </Col>
        <Col className="col-6">
          <h2>Second Hand Market Value: ${props.marketValueSum}</h2>
        </Col>
      </Row>
      <Row>
        <Col className="col-6">
          <img
            src="https://i.giphy.com/media/KDRv3QggAjyo/giphy.webp"
            className="img-gif"
          />
        </Col>
        <Col className="col-6">
          <img
            src="https://i.giphy.com/media/lptjRBxFKCJmFoibP3/giphy.webp"
            className="img-gif"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Budget;
