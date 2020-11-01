import { Request, Response, Router } from 'express';

const router = Router();

const toppings: string[] = [
  'Pepperoni',
  'Mushrooms',
  'Onions',
  'Sausage',
  'Bacon',
  'Extra cheese',
  'Black olives',
  'Green peppers',
  'Pineapple',
  'Spinach',
];

router.get('/', (_req: Request, res: Response) => {
  res.send(toppings);
});

export default router;
