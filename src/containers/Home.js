import React from "react";
import EqAvatar from "../components/Eq-avatar";
import RecentItems from "../components/Recent-items";
import Wishlist from "../components/Wishlist";
import Form from "../components/Form";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import EqDetails from "../components/Eqdetails";

class Home extends React.Component {
  state = {
    equipment: [],
    cameras: [],
    lenses: [],
    misc: [],
    recentlyAdded: [],
    wishList: [],
    clickedItem: [],
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

  handleClick = (event) => {
    const NewClickedItem = this.state.equipment.find(
      (eq) => eq.id === event.target.id
    );
    NewClickedItem === this.state.clickedItem
      ? this.setState({ clickedItem: [] })
      : this.setState({ clickedItem: NewClickedItem });
  };

  updateStateFromForm = (newEquipment, type) => {
    switch (type) {
      case "lens":
        this.setState({
          lenses: [newEquipment, ...this.state.lenses],
        });
        break;
      case "camera":
        this.setState({
          cameras: [newEquipment, ...this.state.cameras],
        });
        break;
      case "misc":
        this.setState({
          misc: [newEquipment, ...this.state.misc],
        });
        break;
    }
  };

  render() {
    {
    }

    return (
      <div className="home">
        <Container className="container-fluid" className="corpus">
          <Row>
            <Col className="col-2">
              <Form update={this.updateStateFromForm} />
            </Col>
            <Col className="col-8">
              <Row id="banner-info">
                {this.state.clickedItem === [] ? null : (
                  <EqDetails equipment={this.state.clickedItem} />
                )}
              </Row>
              <Row id="rows-display" className="components">
                <h3>Cameras</h3>
                <EqAvatar
                  equipment={this.state.cameras}
                  handleHover={this.handleHover}
                  handleClick={this.handleClick}
                />
                <h3>Lenses</h3>
                <EqAvatar
                  equipment={this.state.lenses}
                  handleHover={this.handleHover}
                  handleClick={this.handleClick}
                />
                <h3>Miscellaneous</h3>
                <EqAvatar
                  equipment={this.state.misc}
                  handleHover={this.handleHover}
                  handleClick={this.handleClick}
                />
              </Row>
            </Col>
            <Col className="col-2">
              <h5>Recently Added</h5>
              <RecentItems
                equipment={this.state.recentlyAdded}
                handleHover={this.handleHover}
                handleClick={this.handleClick}
              />

              <h5>Wishlist</h5>
              <Wishlist
                equipment={this.state.wishList}
                handleClick={this.handleClick}
                handleClick={this.handleClick}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
