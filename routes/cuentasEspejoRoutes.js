import express from 'express'
import {getAllCuentasEspejo, updateCuentaEspejo} from '../controllers/cuentasEspejoController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/')
    .get(authMiddleware, getAllCuentasEspejo)

router.route('/:id')
    .put( updateCuentaEspejo)
    
export default router