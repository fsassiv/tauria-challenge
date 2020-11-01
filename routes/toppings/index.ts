import { Request, Response, Router } from 'express';
import { Topping } from './types';

const router = Router();

const toppings: Topping[] = [
  { label: 'Pepperoni', imgUrl: '' },
  { label: 'Mushrooms', imgUrl: '' },
  { label: 'Onions', imgUrl: '' },
  { label: 'Sausage', imgUrl: '' },
  { label: 'Bacon', imgUrl: '' },
  { label: 'Extra cheese', imgUrl: '' },
  { label: 'Black olives', imgUrl: '' },
  { label: 'Green peppers', imgUrl: '' },
  { label: 'Pineapple', imgUrl: '' },
  { label: 'Spinach', imgUrl: '' },
];

router.get('/', (_req: Request, res: Response) => {
  res.send(toppings);
});

export default router;
