import { pgClient } from '../../config/db.js';

export async function getProducts() {
  const result = await pgClient.query('select * from product');  
  return result.rows;
}
