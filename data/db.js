//importazione pacchetto mysql2
import mysql2 from "mysql2"

const connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: " webapp_express"
})

connection.connect((err) => {
    if( err ) throw err;

    console.log( "Connessione al DB avvenuta con successo" )
})

export default connection;