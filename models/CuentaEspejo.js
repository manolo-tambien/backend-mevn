import mongoose from 'mongoose'

const cuentasEspejoSchema = mongoose.Schema({
    gerente: {
        type: String,
        required: false,
        trim: true
    }, 
    cliente: {
        type: String,
        required: false,
        trim: true
    }, 
    linea_transportista: {
        type: String,
        required: false,
        trim: true
    }, 
    salidas: {
        type: Number,
        required: false,
        trim: true
    }, 
    url: {
        type: String,
        required: false,
        trim: true
    },
    usuario: {
        type: String,
        required: false,
        trim: true
    },  
    password: {
        type: String,
        required: false,
        trim: true
    }, 
    cuenta: {
        type: String,
        required: false,
        trim: true
    }, 
    estaciones: {
        type: String,
        required: false,
        trim: false
    }
})

const CuentasEspejo = mongoose.model('CuentasEspejo', cuentasEspejoSchema)

export default CuentasEspejo