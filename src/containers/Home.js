import React from "react";
import EqDetails from "../components/Eq-details";
import EqAvatar from "../components/Eq-avatar";
import RecentItems from "../components/Recent-items";
import Wishlist from "../components/Wishlist";
import Form from "../components/Form";

class Home extends React.Component {
  state = {
    equipment: [],
    cameras: [],
    lenses: [],
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

  handleHover = (event) => {
    const hoveredItem = this.state.equipment.find(
      (eq) => eq.id === event.target.id
    );
    console.log(hoveredItem);
  };

  updateStateFromForm = (newEquipment, type) => {
    this.setState({
      lenses: [newEquipment, ...this.state.lenses],
    });
  };

  render() {
    {
    }

    return (
      <div className="home">
        {/* <EqDetails equipment={this.state.equipment} /> */}
        <h1>Cameras</h1>
        <EqAvatar
          equipment={this.state.cameras}
          handleHover={this.handleHover}
        />
        <h1>Lenses</h1>
        <EqAvatar
          equipment={this.state.lenses}
          handleHover={this.handleHover}
        />
        <h1>Miscellaneous</h1>
        <EqAvatar equipment={this.state.misc} handleHover={this.handleHover} />
        <h1>Recently Added</h1>
        <RecentItems
          equipment={this.state.recentlyAdded}
          handleHover={this.handleHover}
        />
        <h1>Wishlist</h1>
        <Wishlist equipment={this.state.wishList} />
        <Form update={this.updateStateFromForm} />
      </div>
    );
  }
}

export default Home;
