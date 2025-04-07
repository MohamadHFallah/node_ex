import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function addCustomer(customerData) {  
//   ! TODO: you have to hash password  
    try {
    const customer = await prisma.customer.create({
      data: customerData,
    });
    return customer;
  } catch (error) {
    throw new Error(`Failed to add customer: ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
}
