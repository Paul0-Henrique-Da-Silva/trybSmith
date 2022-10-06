import express from 'express';

import productsRouter from './routes/product.router';
import userRouter from './routes/users.router';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', userRouter);

export default app;
