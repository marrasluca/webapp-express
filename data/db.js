//importazione pacchetto mysql2
import mysql2 from "mysql2"
// import dotenv from "dotenv";
// dotenv.config(); // carica il file .env

const connection = mysql2.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME

    // host: "localhost",
    // user: "root",
    // password: "root",
    // database: "webapp_express"
})

connection.connect((err) => {
    if( err ) throw err;

    console.log( "Connessione al DB avvenuta con successo" )
})

export default connection;