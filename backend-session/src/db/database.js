
import { createConnection } from 'mysql2/promise'

export const connection = async () =>{
    try {
        const dataBaseConnection = await createConnection({
            host:"localhost",
            user:"root",
            database: "db_system",
        })
        return dataBaseConnection;
    } catch (error) {
        console.error("ocurrio un error con la base de datos");
    }
}