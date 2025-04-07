import { prisma } from "../../config/db";

export async function getProducts() {
  const result = await prisma.product.findMany();  
  return result;
}
