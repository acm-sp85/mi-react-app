import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    brand: "",
    type: "",
    medium: "",
    category: "",
    amount: 0,
    purchasePrice: 0,
    marketPrice: 0,
    img: "",
    serialNumber: "",
    notes: "",
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

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    fetch("http://localhost:5000/equipment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    });
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
      img,
      serialNumber,
      notes,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Brand:
          <input
            name="brand"
            type="text"
            value={brand}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Item type:
          <select name="type" value={type} onChange={this.handleChange}>
            <option value=""></option>
            <option value="camera">Camera</option>
            <option value="lens">Lens</option>
          </select>
        </label>
        <label>
          Analog/Digital:
          <select name="medium" value={medium} onChange={this.handleChange}>
            <option value=""></option>
            <option value="digital">Digital</option>
            <option value="analog">Analog</option>
          </select>
        </label>
        <label>
          Category:
          <select name="category" value={category} onChange={this.handleChange}>
            <option value=""></option>
            <option value="photo">Photo</option>
            <option value="video">Video</option>
          </select>
        </label>
        <label>
          Amount:
          <input
            name="amount"
            type="number"
            value={amount}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Purchase Price:
          <input
            name="purchasePrice"
            type="number"
            value={purchasePrice}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Market Price:
          <input
            name="marketPrice"
            type="number"
            value={marketPrice}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Image link:
          <input
            name="img"
            type="text"
            value={img}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Serial Number:
          <input
            name="serialNumber"
            type="text"
            value={serialNumber}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Notes:
          <input
            name="notes"
            type="text"
            value={notes}
            onChange={this.handleChange}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
