import React, { createContext, useState } from 'react';
import { ToppingsContextComponentTypes, ToppingsContextTypes, ToppingTypes } from './types';

const DEFAULT_VALUE = {
  toppingsList: [],
  updateToppingsList: () => {},
  clearToppingsList: () => {},
  removeTopping: (topping: ToppingTypes) => {},
};

export const ToppingsContext = createContext<ToppingsContextTypes>(DEFAULT_VALUE);

const ToppingsContextComponent = (props: ToppingsContextComponentTypes) => {
  const { children } = props;

  const [toppingsList, setToppingsList] = useState<ToppingTypes[]>([]);

  const updateToppingsList = (topping: ToppingTypes) => {
    let toppingFound = toppingsList.filter((item) => item.id === topping.id).length > 0;

    if (!toppingFound) {
      setToppingsList([...toppingsList, topping]);
    }

    if (toppingFound) {
      removeTopping(topping);
    }
  };

  const clearToppingsList = () => setToppingsList([]);

  const removeTopping = (topping: ToppingTypes) => {
    let updatedToppingsList: ToppingTypes[] = toppingsList.filter((item) => item.id !== topping.id);
    setToppingsList(updatedToppingsList);
  };

  return <ToppingsContext.Provider value={{ toppingsList, updateToppingsList, clearToppingsList, removeTopping }}>{children}</ToppingsContext.Provider>;
};

export default ToppingsContextComponent;
