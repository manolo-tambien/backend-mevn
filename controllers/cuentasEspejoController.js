
import CuentasEspejo from "../models/CuentaEspejo.js";
import { validateObjectId, handleNotFoundError, formatDate } from '../utils/index.js'



const getAllCuentasEspejo = async (req, res) => {
    try {
        const cuentas_espejo = await CuentasEspejo.find()
        //const services = await Services.find()   
        res.json(cuentas_espejo)
    } catch (error) {
        console.log(error)
    }
}

const updateCuentaEspejo = async (req, res) => {
    const { id } = req.params

    // Validar por object id
    if (validateObjectId(id, res)) return

    const cuentaEspejo = await CuentasEspejo.findById(id)
    if (!cuentaEspejo) {
        return handleNotFoundError('La cuenta espejo no existe', res)
    }

    const {
        gerente,
        cliente,
        linea_transportista,
        salidas, 
        url,
        usuario,
        cuenta,
        estaciones
    } = req.body
    
    cuentaEspejo.gerente = gerente
    cuentaEspejo.cliente = cliente
    cuentaEspejo.linea_transportista = linea_transportista
    cuentaEspejo.salidas = salidas
    cuentaEspejo.url = url
    cuentaEspejo.usuario = usuario
    cuentaEspejo.cuenta = cuenta
    cuentaEspejo.estaciones = estaciones

    try {
        const result = await cuentaEspejo.save()

        res.json({
            msg: 'Cuenta espejo actualizada'
        })
    } catch (error) {
        console.log(error)
    }
}


export {
    getAllCuentasEspejo,
    updateCuentaEspejo
}