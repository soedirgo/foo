import { types, Client } from 'pg'
types.setTypeParser(20, parseInt)

export const query = async (connectionString, sql) => {
    const client = new Client({ connectionString })
    const results = await client.query(sql)
    return { data: results.rows, error: null }
}
