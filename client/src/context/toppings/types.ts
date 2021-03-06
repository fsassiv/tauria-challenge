import { ReactNode } from 'react';

export interface ToppingTypes {
  id: string;
  label: string;
  imgUrl: string;
}

export interface ToppingsContextTypes {
  toppingsList: ToppingTypes[];
  updateToppingsList: (topping: ToppingTypes) => void;
  clearToppingsList: () => void;
  removeTopping: (topping: ToppingTypes) => void;
}

export interface ToppingsContextComponentTypes {
  children: ReactNode;
}
