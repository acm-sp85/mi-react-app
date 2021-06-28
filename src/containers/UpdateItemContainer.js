import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import EqListToUpdate from "../components/EqListToUpdate";
import Eqdetails from "../components/Eqdetails";
import FormToUpdate from "../components/FormToUpdate";
class UpdateItemContainer extends React.Component {
  state = {
    equipment: [],
    search: "",
    results: [],
    clickedItem: [],
  };

  componentDidMount() {
    fetch("http://localhost:5000/equipment")
      .then((result) => result.json())
      .then((data) => {
        this.setState({
          equipment: data,
          search: "",
          results: [],
          clickedItem: [],
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

    console.log(foundItems);
  };
  handleHover = (event) => {
    const hoveredItem = this.state.equipment.find(
      (eq) => eq.id === event.target.id
    );
    console.log(hoveredItem);
  };
  handleClick = (event) => {
    const NewClickedItem = this.state.equipment.find(
      (eq) => eq.id === event.target.id
    );
    NewClickedItem === this.state.clickedItem
      ? this.setState({ clickedItem: [] })
      : this.setState({ clickedItem: NewClickedItem });
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
        {this.state.results ? (
          <EqListToUpdate
            equipment={this.state.results}
            handleClick={this.handleClick}
            handleHover={this.handleHover}
          />
        ) : (
          <div></div>
        )}
        <FormToUpdate equipment={this.state.clickedItem} />
      </div>
    );
  }
}

export default UpdateItemContainer;
