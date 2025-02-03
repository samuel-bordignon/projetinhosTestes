import { executeQuery } from "@/lib/postgres" 

export async function GET(req, { params }) {
  const { table } = await params
  if (!table) {
    return new Response(JSON.stringify({ error: 'Parâmetros inválidos' }), { status: 400 })
  }

  try {
    const rows = await executeQuery(`SELECT * FROM ${table}`, [])
    return new Response(JSON.stringify(rows), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }
}

export async function POST(req, { params }) {
  const { table } = await params
  if (!table) {
    return new Response(JSON.stringify({ error: 'Parâmetros inválidos' }), { status: 400 })
  }

  try {
    const body = await req.json()
    const columns = Object.keys(body).join(', ')
    const values = Object.values(body)
    const placeholders = values.map((_, index) => `$${index + 1}`).join(', ')

    const query = `INSERT INTO ${table} (${columns}) VALUES (${placeholders}) RETURNING *`
    const rows = await executeQuery(query, values)

    return new Response(JSON.stringify(rows[0]), { status: 201 })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }
}
  