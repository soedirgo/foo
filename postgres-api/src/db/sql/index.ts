import { readFileSync } from 'fs'

export const schemas = readFileSync('./schemas.sql', 'utf-8')
