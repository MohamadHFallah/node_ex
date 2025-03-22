import express from 'express';
import { getProducts } from '../../services/product/getProducts';

const productRouter = express.Router();

productRouter.get('/products', async (_, res) => {
  const products = await getProducts();
  res.json({ products });
});

export default productRouter