import React from "react";
import "../EqGrid.css";
import { Container, Button } from "react-bootstrap";

function EqGrid(props) {
  const allEq = props.equipment.map((item) => {
    return (
      <Container key={item.id}>
        <div key={item.id} className="">
          <img
            src={item.img_url}
            alt="error"
            className="eq-grid-img"
            id={item.id}
            // className="eq-avatar"
            onMouseEnter={props.handleHover}
            onClick={props.handleClick}
          ></img>
          <p>
            {item.name}-{item.brand}
          </p>
          <Button
            type="submit"
            onClick={props.handleClickEdit}
            id={item.id}
            className="btn-sm"
          >
            EDIT
          </Button>
          <Button
            type="submit"
            className="btn btn-danger btn-sm"
            onClick={props.handleClickDelete}
            id={item.id}
          >
            DELETE
          </Button>
        </div>
      </Container>
    );
  });
  return <div className="eq">{allEq}</div>;
}

export default EqGrid;
