import dotenv from 'dotenv'
import colors from 'colors'
import { db } from '../config/db.js'
//import Services from '../models/Services.js'
//import { services } from './beautyServices.js'

// Define the structure of the CuentaEspejo structure in database
import CuentasEspejo from '../models/CuentaEspejo.js'
// Represent the exact data of the table on database
import { cuentasEspejo } from "./cuentasEspejo.js";

// Add here the proper imports that you want add to the seed process...

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