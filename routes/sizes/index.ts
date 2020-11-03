import { Request, Response, Router } from 'express';
import { Size } from './types';

const router = Router();

const sizes: Size[] = [
  { label: 'Small', price: 8, maxIngredients: 5 },
  { label: 'Medium', price: 10, maxIngredients: 7 },
  { label: 'Large', price: 12, maxIngredients: 9 },
];

router.get('/', (_req: Request, res: Response) => {
  res.send(sizes).status(200);
});

export default router;
