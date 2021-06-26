import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class FormSubmit extends Component {
  state = {
    name: "",
    brand: "",
    type: "",
    medium: "",
    category: "",
    amount: 0,
    purchasePrice: 0,
    marketPrice: 0,
    img_url: "",
    serialNumber: "",
    notes: "",
    favorite: false,
    wishList: false,
  };

  handleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };
  handleCheckBox = () => {
    this.state.wishList === false
      ? this.setState({ wishList: true })
      : this.setState({ wishList: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/equipment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((newEquipment) => this.props.update(newEquipment, this.state.type));
  };
  render() {
    const {
      name,
      brand,
      type,
      medium,
      category,
      amount,
      purchasePrice,
      marketPrice,
      img_url,
      serialNumber,
      notes,
    } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} className="form">
        <Form.Group>
          <Form.Label> Name:</Form.Label>
          <Form.Control
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
            size="sm"
          />
          <Form.Label> Brand:</Form.Label>
          <Form.Control
            name="brand"
            type="text"
            value={brand}
            onChange={this.handleChange}
            size="sm"
          />
          <Form.Label> Item Type:</Form.Label>
          <Form.Control
            as="select"
            name="type"
            value={type}
            onChange={this.handleChange}
            size="sm"
          >
            <option value=""></option>
            <option value="camera">Camera</option>
            <option value="lens">Lens</option>
            <option value="misc">Miscelaneuos</option>
          </Form.Control>
          <Form.Label>Analog/Digital:</Form.Label>
          <Form.Control
            as="select"
            name="medium"
            value={medium}
            onChange={this.handleChange}
            size="sm"
          >
            <option value=""></option>
            <option value="digital">Digital</option>
            <option value="analog">Analog</option>
          </Form.Control>
          <Form.Label>Category:</Form.Label>
          <Form.Control
            as="select"
            name="category"
            value={category}
            onChange={this.handleChange}
            size="sm"
          >
            <option value=""></option>
            <option value="photography">Photo</option>
            <option value="video">Video</option>
          </Form.Control>
          <Form.Label> Amount:</Form.Label>
          <Form.Control
            name="amount"
            type="number"
            value={amount}
            onChange={this.handleChange}
            size="sm"
          />
          <Form.Label> Purchase Price:</Form.Label>
          <Form.Control
            name="purchasePrice"
            type="number"
            value={purchasePrice}
            onChange={this.handleChange}
            size="sm"
          />
          <Form.Label> Market Price:</Form.Label>
          <Form.Control
            name="marketPrice"
            type="number"
            value={marketPrice}
            onChange={this.handleChange}
            size="sm"
          />
          <Form.Label> Image Link:</Form.Label>
          <Form.Control
            name="img_url"
            type="text"
            value={img_url}
            onChange={this.handleChange}
            size="sm"
          />
          <Form.Label>Serial Number:</Form.Label>
          <Form.Control
            name="serialNumber"
            type="text"
            value={serialNumber}
            onChange={this.handleChange}
            size="sm"
          />
          <Form.Label>Notes:</Form.Label>
          <Form.Control
            name="notes"
            type="text"
            value={notes}
            onChange={this.handleChange}
            size="sm"
          />
          <Form.Label>Whislist!!</Form.Label>
          <Form.Check
            type="checkbox"
            name="wishList"
            onChange={this.handleCheckBox}
            size="sm"
          />
        </Form.Group>
        <Button type="submit">ADD</Button>
      </Form>
    );
  }
}
