import sql from "mssql";
import config from '../config';

const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    requestTimeout: 20000, //timepo de respuesta para las consultas pesadas
    options: {
        encrypt: false, // for azure | OJO => NO USAR EL TRUE
        trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
    pool: {
        max: 5000
    }
};


export async function getConnection() {
    try {
        const pool = new sql.ConnectionPool(dbSettings);
        await pool.connect(dbSettings);
        const output = {
            "pool": pool,
        };
        return output;
    } catch (error) {
        console.log(error);
    }
}

getConnection();

export {sql};