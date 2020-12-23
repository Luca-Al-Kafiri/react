import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import data from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const defaultState = {
    loading: false,
    cart: data,
    amount: 0,
    total: 0,
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "INC", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DEC", payload: id });
  };

  const quantity = (id, type) => {
    dispatch({ type: "QUANTITY", payload: { id, type } });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        quantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
