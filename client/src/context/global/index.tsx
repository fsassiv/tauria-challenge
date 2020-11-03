import React from 'react';
import CrustContextComponent from '../crust';
import SizeContextComponent from '../size';
import { GlobalContexttProps } from './types';

const GlobalContext = (props: GlobalContexttProps) => {
  const { children } = props;
  return (
    <SizeContextComponent>
      <CrustContextComponent>{children}</CrustContextComponent>
    </SizeContextComponent>
  );
};

export default GlobalContext;
