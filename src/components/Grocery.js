function Grocery(props) {
  return props.groceryList.map((grocery, index) => (
    <div
      key={index}
      className={grocery.isPurchased ? "grocery-purchased" : "grocery-item"}
    >
      <div
        key={grocery.id}
        onClick={() => props.handlePurchaseItem(grocery.id)}
      >
        {grocery.name}
        <span className="item-qty">{grocery.qty}</span>
      </div>
    </div>
  ));
}

export default Grocery;
