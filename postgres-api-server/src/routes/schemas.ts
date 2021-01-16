import { Router } from 'express'
import { DEFAULT_SYSTEM_SCHEMAS } from '../constants'
import { postgresApi } from '../postgresApi'

export const router = Router()

router.get('/', async (req, res) => {
    const schemas = postgresApi.schema.getAll()
    return res.status(200).json(schemas)
})

router.post('/', async (req, res) => {
    const newSchema = postgresApi.schema.add(req.body)
    return res.status(200).json(newSchema)
})

router.patch('/:id', async (req, res) => {
    const id: number = parseInt(req.params.id)
    const updatedSchema = postgresApi.schema.update(id, req.body)
    return res.status(200).json(updatedSchema)
})

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const deletedSchema = postgresApi.schema.delete(id)
    return res.status(200).json(deletedSchema)
})
