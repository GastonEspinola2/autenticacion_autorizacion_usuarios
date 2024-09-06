import { createConnection } from 'mysql2/promise'
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from '../config/env.js';

export const connection = async () =>{
    try {
        const dataBaseConnection = await createConnection({
            host:DB_HOST,
            user:DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME,
        })
        return dataBaseConnection;
    } catch (error) {
        console.error("ocurrio un error con la base de datos");
    }
}