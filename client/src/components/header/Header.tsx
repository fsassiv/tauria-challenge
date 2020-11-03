import { OrderContext } from '@context/order/index';
import { SizeContext } from '@context/size';
import { ToppingsContext } from '@context/toppings';
import React, { useContext, useEffect } from 'react';

const Header = () => {
  const { size } = useContext(SizeContext);
  const { clearToppingsList } = useContext(ToppingsContext);
  const { total } = useContext(OrderContext);

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
