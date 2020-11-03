import { Request, Response, Router } from 'express';
import { Crust } from './types';

const router = Router();

const crusts: Crust[] = [
  { label: 'Thin', price: 2 },
  { label: 'Thick', price: 4 },
];

router.get('/', (_req: Request, res: Response) => {
  res.send(crusts).status(200);
});

export default router;
