import { pgClient } from '../../config/db.js';

export async function getCutomer(customerId) {
  if (customerId) {
    const result = await pgClient.query('select * from customer where id=$1', [
      customerId,
    ]);
    return result.rows[0];
  }
  return null;
}
