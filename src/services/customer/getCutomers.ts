// import { pgClient } from "../../config/db";

import { prisma } from '../../config/db';

export async function getCutomers() {
  const customers = await prisma.customer.findMany();
  return customers;
}
