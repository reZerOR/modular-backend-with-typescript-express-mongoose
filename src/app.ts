import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port = 3000;

app.use(express.json());

// application routes

app.get('/', (req: Request, res: Response) => {
  res.send('assignment 2 is running');
});

export default app;
