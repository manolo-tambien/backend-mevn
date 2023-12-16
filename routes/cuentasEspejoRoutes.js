import express from 'express'
import {getAllCuentasEspejo} from '../controllers/cuentasEspejoController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/')
    .get(getAllCuentasEspejo)
    
export default router