import { Request, Response, Router } from 'express';

const router = Router();

interface Topping {
  label: string;
  imgUrl: string;
}

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
