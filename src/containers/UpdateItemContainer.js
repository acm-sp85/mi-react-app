import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import EqGrid from "../components/EqGrid";
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

    console.log(foundItems);
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
          <EqGrid equipment={this.state.results} />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default UpdateItemContainer;
