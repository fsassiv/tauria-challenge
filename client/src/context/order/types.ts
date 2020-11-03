import { ReactNode } from 'react';

export interface OrderTypes {
  total: number;
}

export interface OrderContextTypes {
  total: number;
  updateTotal: () => void;
}

export interface OrderContextComponentTypes {
  children: ReactNode;
}
