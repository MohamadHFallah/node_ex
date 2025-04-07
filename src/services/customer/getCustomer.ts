// import { pgClient } from "../../config/db";

import { prisma } from '../../config/db';

export async function getCutomer(customerId: string) {
  const result = await prisma.customer.findMany();
  return result;
}
