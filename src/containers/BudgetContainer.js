import React from "react";
import Budget from "../components/Budget";
import { Container } from "react-bootstrap";

class BudgetContainer extends React.Component {
  state = {
    equipment: [],
    purchasedSum: 0,
    marketValueSum: 0,
  };

  componentDidMount() {
    fetch("http://localhost:5000/equipment")
      .then((result) => result.json())
      .then((data) => {
        const equipment = data.filter((item) => item.wishList !== true);

        let purchasedSum = 0;
        let marketValueSum = 0;
        equipment.map(
          (item) =>
            (purchasedSum =
              purchasedSum +
              parseInt(item.purchasePrice, 10) * parseInt(item.amount,10))
        );
        equipment.map(
          (item) =>
            (marketValueSum =
              marketValueSum +
              parseInt(item.marketPrice,10) * parseInt(item.amount,10))
        );

        this.setState({
          equipment: equipment,
          purchasedSum: purchasedSum,
          marketValueSum: marketValueSum,
        });
      });
  }

  render() {
    return (
      <Container>
        <Budget
          purchasedSum={this.state.purchasedSum}
          marketValueSum={this.state.marketValueSum}
        />
      </Container>
    );
  }
}

export default BudgetContainer;
