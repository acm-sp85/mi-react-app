import React from "react";
import EqDetails from "../containers/Eq-details";
import EqAvatar from "../containers/Eq-avatar";
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

  render() {
    return (
      <div className="home">
        <EqDetails equipment={this.state.equipment} />
        <EqAvatar equipment={this.state.equipment} />
        <Form />
      </div>
    );
  }
}

export default Home;
