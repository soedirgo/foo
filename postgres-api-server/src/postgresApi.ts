import PostgresApi from '@supabase/postgres-api'
import { PG_CONNECTION } from './constants'
export const postgresApi = new PostgresApi(PG_CONNECTION)
