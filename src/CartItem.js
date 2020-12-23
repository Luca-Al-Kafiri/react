import React from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { useGlobalContext } from "./context";

const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem, increase, decrease, quantity } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button onClick={() => removeItem(id)} className="remove-btn">
          remove
        </button>
      </div>
      <div>
        <button onClick={() => quantity(id, "INC")} className="amount-btn">
          <MdExpandLess />
        </button>
        <p className="amount">{amount}</p>
        <button onClick={() => quantity(id, "DEC")} className="amount-btn">
          <MdExpandMore />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
