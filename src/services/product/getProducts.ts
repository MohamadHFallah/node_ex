import { pgClient } from "../../config/db";


export async function getProducts() {
  const result = await pgClient.query('select * from product');  
  return result.rows;
}
