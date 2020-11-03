import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import crustsRoute from './routes/crust';
import sizesRoute from './routes/sizes';
import toppingsRoute from './routes/toppings';

const PORT = process.env.PORT || 3000;
const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('/', (_req: Request, res: Response) => {
  res.redirect('http://localhost:5000');
});

app.use('/api/crusts', crustsRoute);
app.use('/api/toppings', toppingsRoute);
app.use('/api/sizes', sizesRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}. API endpoint http://localhost:3000`);
});
