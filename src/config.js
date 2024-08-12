import dotenv from 'dotenv';

dotenv.config()

export default {
    port: process.env.PORT || 4500,

    dbUser: process.env.DB_USERNAME || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbServer : process.env.DB_SERVER || '',
    dbDatabase : process.env.DB_DATABASE || '',

    dbUser_Unete: process.env.DB_USERNAME_UNETE || '',
    dbPassword_Unete: process.env.DB_PASSWORD_UNETE || '',
    dbServer_Unete : process.env.DB_SERVER_UNETE || '',
    dbDatabase_Unete : process.env.DB_DATABASE_UNETE || '',

    

}