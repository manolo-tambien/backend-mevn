import mongoose from 'mongoose'
import colors from 'colors'

export const db = async () => {
    try {
        // Added the parameter dbName for specify the name of the database when the script runs
        const db = await mongoose.connect(process.env.MONGO_URI,{
            dbName: 'CuentasEspejoDB'
        })
        const url = `${db.connection.host}:${db.connection.port}`
        console.log( colors.green(`MongoDB se conectó correctamente:`), colors.bgWhite(url))
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}