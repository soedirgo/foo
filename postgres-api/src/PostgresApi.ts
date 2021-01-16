import PostgresApiSchema from './PostgresApiSchema'

export default class PostgresApi {
    schema: PostgresApiSchema

    constructor(
        connectionString: string,
    ) {
        this.schema = new PostgresApiSchema(connectionString)
    }
}
