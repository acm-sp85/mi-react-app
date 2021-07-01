import React from "react";
import "../EqGrid.css";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function EqGrid(props) {
  const allEq = props.equipment.map((item) => {
    return (
      <Col>
        <Col key={item.id} className="col-md-4">
          <Row>
            <img src={item.img_url} className="img-medium" alt="missing img"></img>
          </Row>
        </Col>
        <Col>
          <Row>
            <h2>
              {item.brand}-{item.name}
            </h2>
          </Row>
          <Row>
            <p>{item.type} </p>
          </Row>
          <Row>
            <p>
              {item.category} / {item.medium}{" "}
            </p>
          </Row>
          <Row>
            <p>Paid: ${item.purchasePrice}</p>
          </Row>
          <Row>
            <p>Can sell for: ${item.marketPrice}</p>
          </Row>
          <Row>
            <p>Notes : {item.notes}</p>
          </Row>
        </Col>
      </Col>
    );
  });
  return <Row className="img-medium">{allEq}</Row>;
}

export default EqGrid;
