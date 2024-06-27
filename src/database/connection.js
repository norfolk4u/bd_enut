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

const dbSettings_Unete = {
    user:     config.dbUser_Unete,
    password: config.dbPassword_Unete,
    server:   config.dbServer_Unete,
    database: config.dbDatabase_Unete,
    requestTimeout: 50000,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
    pool: {
        max: 5000
    }
};



export async function getConnection() {
    try {
        const pool = new sql.ConnectionPool(dbSettings);
        const unete = new sql.ConnectionPool(dbSettings_Unete);

        await pool.connect(dbSettings);
        await unete.connect(dbSettings_Unete);

        const output = {
            "pool": pool,
            "unete": unete,
        };
        return output;
    } catch (error) {
        console.log(error);
    }
}

getConnection();

export {sql};