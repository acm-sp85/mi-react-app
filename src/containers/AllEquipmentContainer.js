import React from "react";
import EqGrid from "../components/EqGrid";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class AllEquipmentContainer extends React.Component {
  state = {
    equipment: [],
    lenses: [],
    cameras: [],
    misc: [],
    recentlyAdded: [],
    wishList: [],
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
        });
      });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="form">
          <Form.Label>Category:</Form.Label>
          <Form.Control
            as="select"
            name="category"
            // value={category}
            // onChange={this.handleChange}
            size="sm"
          >
            <option value=""></option>
            <option value="camera">camera</option>
            <option value="lens">lens</option>
            <option value="misc">misc</option>
          </Form.Control>

          <Button type="submit">ADD</Button>
        </Form>
        <EqGrid className="" equipment={this.state.equipment} />
      </div>
    );
  }
}

export default AllEquipmentContainer;
