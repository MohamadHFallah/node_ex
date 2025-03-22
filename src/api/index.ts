import express from 'express';
import productRouter from './product/router';
import customerRouter from './customer/router';

const router = express.Router();

router.use(productRouter);
router.use(customerRouter);

export default router;