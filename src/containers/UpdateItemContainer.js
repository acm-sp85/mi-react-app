import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import EqListToUpdate from "../components/EqListToUpdate";
import FormToUpdate from "../components/FormToUpdate";
class UpdateItemContainer extends React.Component {
  state = {
    equipment: [],
    search: "",
    results: [],
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
    const toSearch = this.state.search;

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
  handleHover = (event) => {
    const hoveredItem = this.state.equipment.find(
      (eq) => eq.id === event.target.id
    );
    console.log(hoveredItem);
  };
  handleClickEdit = (event) => {
    console.log("EDIT " + event.target.id);
    const NewClickedItem = this.state.equipment.find(
      (eq) => eq.id === event.target.id
    );
    NewClickedItem === this.state.clickedItem
      ? this.setState({ clickedItem: [] })
      : this.setState({ clickedItem: NewClickedItem });
  };

  handleClickDelete = (event) => {
    event.preventDefault();
    console.log("trying to DELETE" + event.target.id);

    fetch(`http://localhost:5000/equipment/${event.target.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    })
      .then((result) => result.json())
      .then((data) => {
        this.handleSubmit(event);
      });
  };

  render() {
    return (
      <div>
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
        <EqListToUpdate
          equipment={this.state.results}
          handleClickDelete={this.handleClickDelete}
          handleClickEdit={this.handleClickEdit}
        />

        {this.state.clickedItem && (
          <FormToUpdate equipment={this.state.clickedItem} />
        )}
      </div>
    );
  }
}

export default UpdateItemContainer;
