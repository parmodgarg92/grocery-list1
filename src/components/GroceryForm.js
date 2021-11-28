import React from "react";
import { useContext, useState } from "react";
import { GroceryListContext } from "./GroceryList";

function GroceryForm() {
  const { groceryList, setGroceryList } = useContext(GroceryListContext);
  const [inputText, setInputText] = useState("");

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const grocery = {
      id: Date.now(),
      name: (inputText.charAt(0).toUpperCase() + inputText.slice(1)).trim(),
      qty: 1,
    };

    /** check for empty string at the time of form submission */
    if (!grocery.name || grocery.name === "") {
      return;
    }

    let item_exits = false;
    let updateExistingItems = [];
    if (groceryList) {
      updateExistingItems = groceryList.map((item) => {
        if (
          item.name.toLowerCase().trim() === grocery.name.toLowerCase().trim()
        ) {
          item.qty += 1;
          item_exits = true;
        }
        return item;
      });

      /** if found the existing product in the item list then update quantity */
      if (item_exits) {
        setGroceryList(updateExistingItems);
        setInputText("");
        return;
      }
    }

    const newGroceryItem = [grocery, ...groceryList];
    setGroceryList(newGroceryItem);

    setInputText("");
  };

  const handlerItemReset = (e) => {
    const shouldReset = window.confirm("Are you sure you want to reset items?");
    if (shouldReset === true) {
      setGroceryList([]);
    }
  };

  return (
    <form id="to-do-form" onSubmit={handleSubmit}>
      <input
        type="text"
        id="list-text"
        placeholder="Enter Item"
        value={inputText}
        onChange={handleInput}
        required
      />
      <button type="submit" id="add-item">
        Add
      </button>
      <button type="button" id="item-reset" onClick={handlerItemReset}>
        Clear Items
      </button>
    </form>
  );
}

export default GroceryForm;
