import React from "react";
import Eqdetails from "../components/Eqdetails.js";

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
        <Eqdetails equipment={this.state.equipment} />
      </div>
    );
  }
}

export default AllEquipmentContainer;
