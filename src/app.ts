import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/modules/product/product.route';

const app: Application = express();
const port = 3000;

app.use(express.json());

// application routes
app.use('/api/products', ProductRoutes)


app.get('/', (req: Request, res: Response) => {
  res.send('assignment 2 is running');
});

export default app;
