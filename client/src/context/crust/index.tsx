import React, { createContext, useState } from 'react';
import { CrustContextComponentTypes, CrustContextTypes, CrustTypes } from './types';

const DEFAULT_VALUE = {
  crust: null,
  setCrust: () => {},
};

export const CrustContext = createContext<CrustContextTypes>(DEFAULT_VALUE);

const CrustContextComponent = (props: CrustContextComponentTypes) => {
  const { children } = props;

  const [crust, setCrust] = useState<CrustTypes | null>(null);

  return <CrustContext.Provider value={{ crust, setCrust }}>{children}</CrustContext.Provider>;
};

export default CrustContextComponent;
