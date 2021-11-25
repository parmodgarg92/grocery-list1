import React from "react";
import GroceryList from "./components/GroceryList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="to-do-form">
        <GroceryList></GroceryList>
      </div>
    </div>
  );
}

export default App;
