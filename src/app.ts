import express, { Request, Response } from 'express';
const app = express();
import cors from 'cors';
import router from './route/Router';
import globalError from './utils/globalError';

app.use(cors());
app.use(express.json());


app.use('/api/v1',router)



app.get('/', async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      massage: 'backend setup project server running',
    });
  } catch (error) {
    console.log(error);
  }
});

app.all('*', (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    massage: 'Router not found data',
  });
});

app.use(globalError);

export default app;
