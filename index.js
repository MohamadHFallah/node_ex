import expres from 'express';
import { pgClient } from './src/config/db.js';
import { getCutomers } from './src/services/customer/getCutomers.js';
import { getCutomer } from './src/services/customer/getCustomer.js';
import { getProducts } from './src/services/product/getProducts.js';

const app = expres();

app.get('/', (_, res) => {
  res.json({ message: 'Hello' });
});

app.get('/customers', async (_, res) => {
  const customers = await getCutomers();
  res.json({ customers });
});

app.get('/customer/:id', async (req, res) => {
  const customer = await getCutomer(req.params.id);
  if (customer) {
   return res.json({ customer });
  }
  res.status(442)
  res.json({message:"bad params"})
});

app.get('/products', async (_, res) => {
  const products = await getProducts();
  res.json({ products });
});

const port = 4000;
app.listen(port, async () => {
  console.log(`Start server from localhost:${port}`);
  await pgClient.connect();
  console.log("Conneced to DB")
});
