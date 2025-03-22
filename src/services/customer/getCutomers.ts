import { pgClient } from "../../config/db";


export async function getCutomers() {
  const result = await pgClient.query('select * from customer');
  return result.rows;
}
