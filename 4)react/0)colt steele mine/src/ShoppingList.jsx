import { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingListForm from "./ShoppingListForm";
function ShoppingList() {
  const products = [
    {
      id: uuid(),
      product: "Banana",
      quantity: 3,
    },
    {
      id: uuid(),
      product: "Apple",
      quantity: 2,
    },
  ];
  const [items, setItems] = useState(products);
  const changeItems = (item) => {
    setItems((currItems) => {
      return [...currItems, { id: uuid(), ...item }];
    });
  };
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((i) => (
          <li id={i.id}>
            {i.product}-{i.quantity}
          </li>
        ))}
      </ul>
      <ShoppingListForm changeItems={changeItems} />
    </div>
  );
}
export default ShoppingList;
