import { Request, Response, Router } from 'express';
import { Topping } from './types';

const router = Router();

const toppings: Topping[] = [
  {
    id: '1',
    label: 'Pepperoni',
    imgUrl: 'https://richmeats.capetown/wp-content/uploads/2017/03/176.png',
  },
  {
    id: '2',
    label: 'Mushrooms',
    imgUrl: 'https://post.greatist.com/wp-content/uploads/sites/3/2020/02/278858_2200-732x549.jpg',
  },
  {
    id: '3',
    label: 'Onions',
    imgUrl:
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/08/10/fn_red-onions-getty_s4x3.jpg.rend.hgtvcom.476.357.suffix/1597096320410.jpeg',
  },
  { id: '4', label: 'Sausage', imgUrl: 'https://www.southsidemarket.com/wp-content/uploads/2017/07/HeroFinal-36.jpg' },
  { id: '5', label: 'Bacon', imgUrl: 'https://acessocultural.com.br/wp-content/uploads/2019/11/bacon.jpg' },
  {
    id: '6',
    label: 'Extra cheese',
    imgUrl: 'https://shreekrishnavadapav.co.uk/wp-content/uploads/2017/11/cheese-600x600.jpg',
  },
  { id: '7', label: 'Black olives', imgUrl: 'https://www.sulkem.co.nz/wp-content/uploads/420736675.jpg' },
  {
    id: '8',
    label: 'Green peppers',
    imgUrl:
      'https://render.fineartamerica.com/images/rendered/default/greeting-card/images-medium-5/red-yellow-green-peppers-john-ayo.jpg?&targetx=0&targety=-53&imagewidth=700&imageheight=606&modelwidth=700&modelheight=500&backgroundcolor=6E310E&orientation=0',
  },
  { id: '9', label: 'Pineapple', imgUrl: 'https://5.imimg.com/data5/WT/GN/ZH/SELLER-3722283/pineapple-500x500.jpg' },
  {
    id: '10',
    label: 'Spinach',
    imgUrl: 'https://www.jessicagavin.com/wp-content/uploads/2020/01/how-to-cook-spinach-10-1200-500x500.jpg',
  },
];

router.get('/', (_req: Request, res: Response) => {
  res.send(toppings).status(200);
});

export default router;
