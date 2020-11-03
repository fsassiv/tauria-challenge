import React, { createContext, useContext, useEffect, useState } from 'react';
import { CrustContext } from '../crust';
import { SizeContext } from '../size';
import { ToppingsContext } from '../toppings';
import { OrderContextComponentTypes, OrderContextTypes } from './types';

const DEFAULT_VALUE = {
  total: 0,
  updateTotal: () => {},
};

export const OrderContext = createContext<OrderContextTypes>(DEFAULT_VALUE);

const OrderContextComponent = (props: OrderContextComponentTypes) => {
  const { children } = props;
  const { size } = useContext(SizeContext);
  const { crust } = useContext(CrustContext);
  const { toppingsList } = useContext(ToppingsContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let subtotal = 0;
    let toppingsListLenth = toppingsList.length;
    let toppingsAmmount = 0;
    let extraToppingPrice = 0.5;

    if (size) subtotal += size.price;
    if (crust) subtotal += crust.price;
    if (toppingsListLenth > 3) {
      toppingsAmmount = (toppingsListLenth - 3) * extraToppingPrice;
      subtotal += toppingsAmmount;
    }

    setTotal(subtotal);
  }, [size, crust, toppingsList]);

  const updateTotal = () => {};

  return <OrderContext.Provider value={{ total, updateTotal }}>{children}</OrderContext.Provider>;
};

export default OrderContextComponent;
