import React from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";

import EqListToUpdate from "../components/EqListToUpdate";
import FormToUpdate from "../components/FormToUpdate";
class UpdateItemContainer extends React.Component {
  state = {
    equipment: [],
    search: "",
    results: [],
    clickedItem: null,
  };

  componentDidMount() {
    fetch("http://localhost:5000/equipment")
      .then((result) => result.json())
      .then((data) => {
        this.setState({
          equipment: data,
          search: "",
          results: [],
        });
      });
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const toSearch = this.state.search.toLowerCase();
    const foundItems = this.state.equipment.filter(
      (item) =>
        item.name.toLowerCase().includes(toSearch) ||
        item.brand.toLowerCase().includes(toSearch) ||
        item.type.toLowerCase().includes(toSearch) ||
        item.notes.toLowerCase().includes(toSearch)
    );

    this.setState({
      results: foundItems,
    });
  };

  handleClickEdit = (event) => {
    console.log("EDIT " + event.target.id);

    if (
      !this.state.clickedItem ||
      event.target.id !== this.state.clickedItem.id
    ) {
      const NewClickedItem = this.state.equipment.find(
        (eq) => eq.id === event.target.id
      );
      this.setState({ clickedItem: { ...NewClickedItem } });
    } else {
      this.setState({ clickedItem: null });
    }
  };

  handleClickDelete = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/equipment/${event.target.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    })
      .then((result) => result.json())
      .then((data) => {
        // this.handleSubmit(event);
        let whatToDelete = this.state.results;

        console.log(whatToDelete);
        let alreadyDeleted = whatToDelete.filter(
          (item) => item.id !== event.target.id
        );
        let updatedEqList = this.state.equipment.filter(
          (item) => item.id !== event.target.id
        );
        console.log(alreadyDeleted);
        this.setState({
          results: alreadyDeleted,
          equipment: updatedEqList,
        });
      });
  };

  render() {
    console.log("rendering");
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit} className="form">
              <Form.Group>
                <Form.Label> Search Item to Update:</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  value={this.state.search}
                  onChange={this.handleChange}
                  size="sm"
                />
              </Form.Group>
              <Button type="submit">ADD</Button>
            </Form>
          </Col>
          <Col>
            <EqListToUpdate
              equipment={this.state.results}
              handleClickDelete={this.handleClickDelete}
              handleClickEdit={this.handleClickEdit}
            />
          </Col>
          <Col>
            {this.state.clickedItem && (
              <FormToUpdate equipment={this.state.clickedItem} />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UpdateItemContainer;
