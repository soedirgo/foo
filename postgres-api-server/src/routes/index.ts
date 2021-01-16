import { Router } from 'express'
export const router = Router()

router.use('/schemas', require('./schemas'))
