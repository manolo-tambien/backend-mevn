import mongoose from 'mongoose';
import colors from 'colors';

export const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const db = mongoose.connection;
        const url = `${db.host}:${db.port}`;
        console.log(colors.cyan(`MongoDB se conectó correctamente: ${url}`));

        // Verificar si la base de datos y la colección existen, si no, crearlas
        const adminDb = db.useDb('admin');
        const databases = await adminDb.admin().listDatabases();
        const dbExists = databases.databases.some(db => db.name === 'mi_base_de_datos');

        if (!dbExists) {
            await adminDb.db('mi_base_de_datos').createCollection('mi_coleccion');
            console.log(colors.green('Base de datos y colección creadas correctamente'));
        } else {
            const collections = await adminDb.db('mi_base_de_datos').listCollections().toArray();
            const collectionExists = collections.some(col => col.name === 'mi_coleccion');
            if (!collectionExists) {
                await adminDb.db('mi_base_de_datos').createCollection('mi_coleccion');
                console.log(colors.green('Colección creada correctamente'));
            }
        }
    } catch (error) {
        console.error(colors.red(`Error: ${error.message}`));
        process.exit(1);
    }
};
