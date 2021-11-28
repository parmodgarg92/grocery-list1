import React from "react";
import GroceryForm from "./GroceryForm";
import Grocery from "./Grocery";
import { useState } from "react";
import GroceryStats from "./GroceryStats";

export const GroceryListContext = React.createContext();
function GroceryList() {
  const [groceryList, setGroceryList] = useState([]);
  return (
    <GroceryListContext.Provider value={{ groceryList, setGroceryList }}>
      <h1>Add Grocery Item</h1>
      <GroceryForm />
      <div className="grocery-items">
        <Grocery />
      </div>
      <GroceryStats />
    </GroceryListContext.Provider>
  );
}
export default GroceryList;
