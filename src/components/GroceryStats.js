import React from "react";
import { useContext } from "react/cjs/react.development";
import { GroceryListContext } from "./GroceryList";
function GroceryStats() {
  const { groceryList } = useContext(GroceryListContext);
  return (
    <div className="grocery-stats">
      <p>
        Total Items:
        <span>
          {groceryList
            .map((grocery) => grocery.qty)
            .reduce((carry, current) => carry + parseInt(current), 0)}
        </span>
      </p>
    </div>
  );
}

export default GroceryStats;
