import express from 'express'
const app = express()
import { PG_API_PORT } from './constants'
import { router } from './routes'
import pkg from '../package.json'
app.use(express.json())
app.use(router)
app.get('/', (req, res) =>
    res.status(200).json({
        status: 200,
        name: pkg.name,
        version: pkg.version,
        documentation: 'https://supabase.github.io/pg-api/',
    })
)
