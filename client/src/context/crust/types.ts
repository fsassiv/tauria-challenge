import { ReactNode } from 'react';

export interface CrustTypes {
  label: string;
  price: number;
}

export interface CrustContextTypes {
  crust: CrustTypes | null;
  setCrust: (crust: CrustTypes) => void;
}

export interface CrustContextComponentTypes {
  children: ReactNode;
}
