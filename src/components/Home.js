import React from "react";
import EqDetails from "./Eq-details";
import EqAvatar from "./Eq-avatar";
import Form from "./Form";

class Home extends React.Component {
  state = {
    equipment: [],
  };

  componentDidMount() {
    fetch("http://localhost:5000/equipment")
      .then((result) => result.json())
      .then((data) =>
        this.setState({
          equipment: data,
        })
      );
  }

  handleHover = (event) => {
    const hoveredItem = this.state.equipment.find(
      (eq) => eq.id === event.target.id
    );
    console.log(hoveredItem);
  };

  updateStateFromForm = (newEquipment) => {
    this.setState({
      equipment: [...this.state.equipment, newEquipment],
    });
  };

  render() {
    return (
      <div className="home">
        <EqDetails equipment={this.state.equipment} />
        <EqAvatar
          equipment={this.state.equipment}
          handleHover={this.handleHover}
        />
        <Form update={this.updateStateFromForm} />
      </div>
    );
  }
}

export default Home;
