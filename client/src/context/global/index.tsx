import React from 'react';
import CrustContextComponent from '../crust';
import OrderContextComponent from '../order';
import SizeContextComponent from '../size';
import ToppingsContextComponent from '../toppings';
import { GlobalContexttProps } from './types';

const GlobalContext = (props: GlobalContexttProps) => {
  const { children } = props;
  return (
    <SizeContextComponent>
      <CrustContextComponent>
        <ToppingsContextComponent>
          <OrderContextComponent>{children}</OrderContextComponent>
        </ToppingsContextComponent>
      </CrustContextComponent>
    </SizeContextComponent>
  );
};

export default GlobalContext;
