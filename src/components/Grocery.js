import React from "react";
import { useContext } from "react";
import { GroceryListContext } from "./GroceryList";
function Grocery() {
  const { groceryList, setGroceryList } = useContext(GroceryListContext);
  const handlePurchaseItem = (id) => {
    let updateGroceryItem = groceryList.map((grocery) => {
      if (grocery.id === id) {
        grocery.isPurchased = !grocery.isPurchased;
      }
      return grocery;
    });
    setGroceryList(updateGroceryItem);
  };

  const handleItemInc = (id) => {
    let incrementGroceryItem = groceryList.map((grocery) => {
      if (grocery.id === id) {
        grocery.qty = parseInt(grocery.qty) + 1;
      }
      return grocery;
    });
    setGroceryList(incrementGroceryItem);
  };

  const handleItemDec = (id) => {
    let decrementGroceryItem = groceryList.map((grocery) => {
      if (grocery.id === id) {
        grocery.qty = parseInt(grocery.qty) - 1;
      }
      return grocery;
    });
    decrementGroceryItem = decrementGroceryItem.filter((grocery) => {
      return grocery.qty > 0;
    });
    setGroceryList(decrementGroceryItem);
  };

  return groceryList
    ? groceryList.map((grocery, index) => (
        <div
          key={index}
          className={grocery.isPurchased ? "grocery-purchased" : "grocery-item"}
        >
          <div key={grocery.id} onClick={() => handlePurchaseItem(grocery.id)}>
            {grocery.name}
            <span className="item-qty">{grocery.qty}</span>
          </div>
          <div className="item-actions">
            <button onClick={() => handleItemInc(grocery.id)}>+</button>
            <button onClick={() => handleItemDec(grocery.id)}>-</button>
          </div>
        </div>
      ))
    : "No Item added";
}

export default Grocery;
