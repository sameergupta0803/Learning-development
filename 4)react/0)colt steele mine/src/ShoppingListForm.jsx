import { useState } from "react";
export default function ShoppingListForm({ changeItems }) {
  const [formData, setFormData] = useState({
    product: "",
    quantity: "",
  });
  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const changedValue = evt.target.value;
    setFormData((oldFormData) => {
      return { ...oldFormData, [changedField]: changedValue };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    changeItems(formData);
    setFormData({
      product: "",
      quantity: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product">Enter product name</label>
      <input
        type="text"
        placeholder="product"
        value={formData.product}
        onChange={handleChange}
        id="product"
        name="product"
      />
      <label htmlFor="product">Enter product name</label>
      <input
        type="number"
        placeholder="0"
        value={formData.quantity}
        onChange={handleChange}
        id="quantity"
        name="quantity"
      />
      <button>Submit</button>
    </form>
  );
}
