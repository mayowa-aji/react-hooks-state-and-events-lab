import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(true)

  const handleTextChange = () => {
    setInCart(!inCart)
  }
  const textChange = inCart ? 'Remove from cart' : 'Add to Cart'
  const listClass= inCart ? 'in-cart' : ''
  const buttonClass= inCart ? 'remove' : 'add'


  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleTextChange} className={buttonClass}>{textChange}</button>
    </li>
  );
}

export default Item;
