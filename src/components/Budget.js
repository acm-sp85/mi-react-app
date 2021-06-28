import React from "react";

function Budget(props) {
  return (
    <div>
      <h1>THIS IS BUDGET</h1>
      <p>Total cost of equipment: ${props.purchasedSum}</p>
      <p>Second Hand Market Value: ${props.marketValueSum}</p>
    </div>
  );
}

export default Budget;
