import { pgClient } from "../../config/db";



export async function getCutomer(customerId:string) {
  if (customerId) {
    const result = await pgClient.query('select * from customer where id=$1', [
      customerId,
    ]);
    return result.rows[0];
  }
  return null;
}
