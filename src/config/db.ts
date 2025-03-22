import pg from 'pg';
import 'dotenv/config';

const { Client } = pg;

const client = new Client({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT ? Number.parseInt(process.env.PG_PORT) : 5432,
  database: process.env.PG_DATABASE,
});

export { client as pgClient };
