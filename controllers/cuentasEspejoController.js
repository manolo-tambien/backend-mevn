 
import CuentasEspejo from "../models/CuentaEspejo.js";
 
 

const getAllCuentasEspejo = async (req, res) => {
    try {
        const cuentas_espejo = await CuentasEspejo.find()
        //const services = await Services.find()   
        res.json(cuentas_espejo)
    } catch (error) {
        console.log(error)
    }
}
 

  

export {
    getAllCuentasEspejo
}