import express from 'express';
import { getCutomer } from '../../services/customer/getCustomer';
import { getCutomers } from '../../services/customer/getCutomers';
import zodValidator from '../../middleware/zodValidator';
import z from 'zod';
const customerRouter = express.Router();

customerRouter.get('/customers', async (_, res) => {
  const customers = await getCutomers();
  res.json({ customers });
});

const schema = z.object({
  name: z.string(),
});

customerRouter.get('/customer/:id', zodValidator(schema), async (req, res) => {
  const customer = await getCutomer(req.params.id);
  res.json({ customer });
});

export default customerRouter;
