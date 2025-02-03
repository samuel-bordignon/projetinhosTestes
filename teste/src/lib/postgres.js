import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'teste',
  password: 'KWlu3155',
  port: 5432,
});

export default pool;

export async function executeQuery(query, params) {
  try {
    const result = await pool.query(query, params)
    return result.rows
  } catch (error) {
    console.error('Erro ao executar consulta:', error.message)
    throw new Error('Erro interno no servidor')
  }
}
