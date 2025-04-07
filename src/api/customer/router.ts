import express from 'express';
import { getCutomer } from '../../services/customer/getCustomer';
import { getCutomers } from '../../services/customer/getCutomers';
import zodValidator from '../../middleware/zodValidator';
import z from 'zod';
import { addCustomer } from '../../services/customer/addCustomer';
const customerRouter = express.Router();

customerRouter.get('/customers', async (_, res) => {
  const customers = await getCutomers();
  res.json({ customers });
});

customerRouter.get('/customer/:id', async (req, res) => {
  const customer = await getCutomer(req.params.id);
  res.json({ customer });
});

//  For Creattion customer
const customrSchema = z.object({
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2),
  user_name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

customerRouter.post(
  '/customer/',
  zodValidator(customrSchema),
  async (req, res) => {
    const customer = await addCustomer(req.body);
    res.json({ customer });
  }
);

export default customerRouter;
