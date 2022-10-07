import express from 'express';

import productsRouter from './routes/product.router';
import userRouter from './routes/users.router';
import orderRouter from './routes/orders.router';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
