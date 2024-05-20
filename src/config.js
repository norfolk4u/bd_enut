import dotenv from 'dotenv';
dotenv.config()
 
export default {
    port: process.env.PORT || 4500,
    
    dbUser: process.env.DB_USERNAME || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbServer : process.env.DB_SERVER || '',
    dbDatabase : process.env.DB_DATABASE || '',

    dbUser2: process.env.DB_USERNAME2 || '',
    dbPassword2: process.env.DB_PASSWORD2 || '',
    dbServer2 : process.env.DB_SERVER2 || '',
    dbDatabase2 : process.env.DB_DATABASE2 || '',

    dbUser_UneteDev: process.env.DB_USERNAME_UNETE_DEV || '',
    dbPassword_UneteDev: process.env.DB_PASSWORD_UNETE_DEV || '',
    dbServer_UneteDev : process.env.DB_SERVER_UNETE_DEV || '',
    dbDatabase_UneteDev : process.env.DB_DATABASE_UNETE_DEV || '',

    dbUser_Precenso2024: process.env.DB_USERNAME_PRECENSO2024 || '',
    dbPassword_Precenso2024: process.env.DB_PASSWORD_PRECENSO2024 || '',
    dbServer_Precenso2024 : process.env.DB_SERVER_PRECENSO2024 || '',
    dbDatabase_Precenso2024 : process.env.DB_DATABASE_PRECENSO2024 || '',
}