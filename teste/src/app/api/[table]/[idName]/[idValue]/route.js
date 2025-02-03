import { executeQuery } from "@/lib/postgres"

export async function GET(req, { params }) {
  const { table, idName, idValue } = await params
  try {
    // Validar a entrada para evitar SQL Injection
    if (!table || !idName || !idValue) {
      return new Response(
        JSON.stringify({ error: 'Parâmetros inválidos' }),
        { status: 400 }
      )
    }
    // Usando executeQuery no lugar de pool.query
    const result = await executeQuery(`SELECT * FROM ${table} WHERE ${idName} = $1`, [idValue])

    if (!result || result.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Registro não encontrado' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      )
    }


    return new Response(JSON.stringify(result[0]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Erro ao buscar dados:', error.message)
    return new Response(
      JSON.stringify({ error: 'Erro interno no servidor' }),
      { status: 500 }
    )
  }
}

export async function PUT(req, { params }) {
  const { table, idName, idValue } = params

  try {
    const body = await req.json()
    const updates = Object.keys(body)
      .map((key, index) => `${key} = $${index + 1}`)
      .join(', ')
    const values = [...Object.values(body), idValue]

    // Usando executeQuery no lugar de pool.query
    const query = `UPDATE ${table} SET ${updates} WHERE ${idName} = $${values.length} RETURNING *`
    const result = await executeQuery(query, values)

    if (result.rows.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Registro não encontrado' }),
        { status: 404 }
      )
    }

    return new Response(JSON.stringify(result[0]), {
      message: 'Registro atualizado com sucesso',
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Erro ao atualizar registro:', error.message)
    return new Response(
      JSON.stringify({ error: 'Erro interno no servidor' }),
      { status: 500 }
    )
  }
}

export async function DELETE(req, { params }) {
  const { table, idName, idValue } = params

  try {
    // Usando executeQuery no lugar de pool.query
    const query = `DELETE FROM ${table} WHERE ${idName} = $1 RETURNING *`
    const result = await executeQuery(query, [idValue])

    if (result.rows.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Registro não encontrado' }),
        { status: 404 }
      )
    }

    return new Response(JSON.stringify(result[0]), {
      message: 'Registro deletado com sucesso',
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Erro ao deletar registro:', error.message)
    return new Response(
      JSON.stringify({ error: 'Erro interno no servidor' }),
      { status: 500 }
    )
  }
}
