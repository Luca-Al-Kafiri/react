import React from "react";

const reducer = (state, action) => {
  if (action.type === "CLEAR") {
    const emptyCart = [];
    return { ...state, cart: emptyCart };
  }

  if (action.type === "REMOVE") {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }

  if (action.type === "QUANTITY") {
    const newCart = state.cart
      .map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "INC") {
            return { ...item, amount: item.amount + 1 };
          }
          if (action.payload.type === "DEC") {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: newCart };
  }

  if (action.type === "GET_TOTAL") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const itemTotal = cartItem.price * cartItem.amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += cartItem.amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, amount, total };
  }

  return state;
};

export default reducer;
