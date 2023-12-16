import dotenv from 'dotenv'
import colors from 'colors'
import { db } from '../config/db.js'
import Services from '../models/Services.js'
import CuentasEspejo from '../models/CuentaEspejo.js'
import { services } from './beautyServices.js'
import { cuentasEspejo } from "./cuentasEspejo.js";

dotenv.config()
await db()

async function seedDB() {
    try {
        //await Services.insertMany(services)
        await CuentasEspejo.insertMany(cuentasEspejo)
        console.log(colors.green.bold('Se agregaron los datos correctamente'))
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

async function clearDB() {
    try {
        await Services.deleteMany()
        console.log(colors.red.bold('Se eliminaron los datos'))
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

if(process.argv[2] === '--import') {
    seedDB()
} else {
    clearDB()
}