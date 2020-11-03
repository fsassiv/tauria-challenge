import { ReactNode } from 'react';

export interface SizeTypes {
  label: string;
  price: number;
  maxIngredients: number;
}

export interface SizeContextTypes {
  size: SizeTypes | null;
  setSize: (size: SizeTypes) => void;
}

export interface SizeContextComponentTypes {
  children: ReactNode;
}
