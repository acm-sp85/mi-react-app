import React from "react";
import "../EqGrid.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function EqGrid(props) {
  const allEq = props.equipment.map((item) => {
    return (
      <Container key={item.id}>
        <div key={item.id} className="">
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
          <Button type="submit" onClick={props.handleClickEdit} id={item.id}>
            EDIT ITEM
          </Button>
          <Button type="submit" onClick={props.handleClickDelete} id={item.id}>
            DELETE ITEM
          </Button>
        </div>
      </Container>
    );
  });
  return <div className="eq">{allEq}</div>;
}

export default EqGrid;
