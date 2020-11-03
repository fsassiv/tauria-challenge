import { CrustContext } from '@context/crust';
import { SizeContext } from '@context/size';
import { ToppingsContext } from '@context/toppings';
import React, { useContext, useEffect, useState } from 'react';

const Header = () => {
  const [total, setTotal] = useState(0);
  const { size } = useContext(SizeContext);
  const { crust } = useContext(CrustContext);
  const { toppingsList, clearToppingsList } = useContext(ToppingsContext);

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

  useEffect(() => {
    clearToppingsList();
  }, [size]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <p>Customize your pizza</p>
          <span className="amount">You will pay: $ {total}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
