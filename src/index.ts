import express from 'express';
import { pgClient } from './config/db';
import { getProducts } from './services/product/getProducts';
import { getCutomers } from './services/customer/getCutomers';
import productRouter from './api/product/router';
import router from './api';
import zodValidator from './middleware/zodValidator';

const app = express();

app.get('/', (_, res) => {
  res.json({ message: 'Hello' });
});

// app.get('/customers', async (_, res) => {
//   const customers = await getCutomers();
//   res.json({ customers });
// });

// app.get('/customer/:id', async (req, res) => {
//   // const customer:any = await getCutomer(req.params.id);
//   // if (customer) {
//   //   return res.json({ customer });
//   // }
//   res.status(442);
//   res.json({ message: 'bad params' });
// });

// app.get('/products', async (_, res) => {
//   const products = await getProducts();
//   res.json({ products });
// });

app.use('/api', router);

const port = 4000;
app.listen(port, async () => {
  console.log(`Start server from localhost:${port}`);
  await pgClient.connect();
  console.log('Conneced to DB');
});
