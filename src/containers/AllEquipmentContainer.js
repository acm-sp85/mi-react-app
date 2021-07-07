import React from "react";
import EqGrid from "../components/EqGrid";
import { Form, Container } from "react-bootstrap";

class AllEquipmentContainer extends React.Component {
  state = {
    equipment: [],
    lenses: [],
    cameras: [],
    misc: [],
    recentlyAdded: [],
    wishList: [],
    filtered: [],
  };

  componentDidMount() {
    fetch("http://localhost:5000/equipment")
      .then((result) => result.json())
      .then((data) => {
        const cameras = data.filter(
          (item) => item.type === "camera" && item.wishList !== true
        );
        const lenses = data.filter(
          (item) => item.type === "lens" && item.wishList !== true
        );
        const misc = data.filter(
          (item) => item.type === "misc" && item.wishList !== true
        );
        const wishList = data.filter((item) => item.wishList === true);
        const recentlyAdded = data.slice(-5, data.length);
        cameras.reverse();
        lenses.reverse();
        misc.reverse();
        recentlyAdded.reverse();
        wishList.reverse();

        this.setState({
          equipment: data,
          lenses: lenses,
          cameras: cameras,
          misc: misc,
          recentlyAdded: recentlyAdded,
          wishList: wishList,
          filtered: data,
        });
      });
  }

  handleChange = (event) => {
    event.preventDefault();
    if (event.target.value === "cameras") {
      this.setState({
        filtered: this.state.cameras,
      });
    } else if (event.target.value === "lenses") {
      this.setState({
        filtered: this.state.lenses,
      });
    } else if (event.target.value === "misc") {
      this.setState({
        filtered: this.state.misc,
      });
    } else {
      this.setState({
        filtered: this.state.equipment,
      });
    }
  };

  render() {
    return (
      <Container>
        <Form className="form">
          <Form.Label>Filter by Category:</Form.Label>
          <Form.Control
            as="select"
            name="filtered"
            // value={this.state.filtered}
            onChange={this.handleChange}
            size="sm"
          >
            <option value="all">all</option>
            <option value="cameras">camera</option>
            <option value="lenses">lens</option>
            <option value="misc">misc</option>
          </Form.Control>
        </Form>
        <EqGrid className="" equipment={this.state.filtered} />
      </Container>
    );
  }
}

export default AllEquipmentContainer;
