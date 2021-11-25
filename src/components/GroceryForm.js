import { useState } from "react";

function GroceryForm(props) {
  const [inputText, setInputText] = useState("");

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Date.now(),
      name: inputText.charAt(0).toUpperCase() + inputText.slice(1),
      qty: 1,
    });

    setInputText("");
  };
  return (
    <form id="to-do-form" onSubmit={handleSubmit}>
      <input
        type="text"
        id="list-text"
        placeholder="Enter Item"
        value={inputText}
        onChange={handleInput}
      />
      <button type="submit" id="add-item">
        Add
      </button>
    </form>
  );
}

export default GroceryForm;
