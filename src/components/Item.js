import React, {useState} from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(true)

  const handleAddToCart = () => {
    setAddToCart(!addToCart)
  }

  const addItem = addToCart ? 'Add to Cart' : 'Remove From Cart'

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className="add">{addItem}</button>
    </li>
  );
}

export default Item;
