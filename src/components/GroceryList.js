import GroceryForm from "./GroceryForm";
import Grocery from "./Grocery";
import { useState } from "react";

function GroceryList() {
  const [groceryList, setGroceryList] = useState([]);
  const addGroceryItem = (grocery) => {
    /** check for empty string at the time of form submission */
    if (!grocery.name || grocery.name === "") {
      return;
    }

    let item_exits = false;
    let updateExistingItems = groceryList.map((item) => {
      if (item.name.toLowerCase() === grocery.name.toLowerCase()) {
        item.qty += 1;
        item_exits = true;
      }
      return item;
    });

    /** if found the existing product in the item list then update quantity */
    if (item_exits) {
      setGroceryList(updateExistingItems);
      return;
    }

    const newGroceryItem = [grocery, ...groceryList];
    setGroceryList(newGroceryItem);
  };

  const handlePurchaseItem = (id) => {
    let updateGroceryItem = groceryList.map((grocery) => {
      if (grocery.id === id) {
        grocery.isPurchased = !grocery.isPurchased;
      }
      return grocery;
    });
    setGroceryList(updateGroceryItem);
  };

  const handlerItemReset = (e) => {
    const shouldReset = window.confirm("Are you sure you want to reset items?");
    if (shouldReset === true) {
      setGroceryList([]);
    }
  };

  return (
    <>
      <h1>Add Grocery Item</h1>
      <GroceryForm onSubmit={addGroceryItem} />
      <button type="button" id="item-reset" onClick={handlerItemReset}>
        Clear Items
      </button>
      <div className="grocery-items">
        <Grocery
          groceryList={groceryList}
          handlePurchaseItem={handlePurchaseItem}
        />
      </div>
    </>
  );
}
export default GroceryList;
