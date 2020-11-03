import React, { createContext, useState } from 'react';
import { SizeContextComponentTypes, SizeContextTypes, SizeTypes } from './types';

const DEFAULT_VALUE = {
  size: null,
  setSize: () => {},
};

export const SizeContext = createContext<SizeContextTypes>(DEFAULT_VALUE);

const SizeContextComponent = (props: SizeContextComponentTypes) => {
  const { children } = props;

  const [size, setSize] = useState<SizeTypes | null>(null);

  return <SizeContext.Provider value={{ size, setSize }}>{children}</SizeContext.Provider>;
};

export default SizeContextComponent;
