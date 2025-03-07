import { pgClient } from '../../config/db.js';

export async function getCutomers() {
  const result = await pgClient.query('select * from customer');
  return result.rows;
}
