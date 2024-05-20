import sql from "mssql";
import config  from '../config';

const dbSettings_Precenso2024 = {
    user:     config.dbUser_Precenso2024,
    password: config.dbPassword_Precenso2024,
    server:   config.dbServer_Precenso2024,
    database: config.dbDatabase_Precenso2024,
    requestTimeout: 20000,
    options: {
         encrypt: false,
         trustServerCertificate: true,
    },
    pool: {
        max: 5000
    }
};

 
export async function  getConnection() {
    try {
        const precenso2024 = new sql.ConnectionPool(dbSettings_Precenso2024);

        await precenso2024.connect(dbSettings_Precenso2024);

        const output = {
            "precenso2024": precenso2024,
        };

        //console.log(pool);
        //console.log(output);
        return output;
    } catch (error) {
        console.log(error);
    }
}

getConnection();

export {sql};