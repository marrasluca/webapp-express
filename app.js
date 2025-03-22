// import dotenv from 'dotenv'; // importa dotenv
// dotenv.config(); // carica il file .env

import express from 'express';



const app = express();
import cors from 'cors';
const port = 3001;

import movieRouter from'./routers/movieRouter.js'
import imagePathMiddleware from "./middlewares/imagePath.js";


//middleware cors
app.use( 
    cors({
        origin: process.env.FRONTEND_APP,
    }

));

//middleware per gestire asset statici
app.use( express.static('public') )

//middleware per gestire le informazioni del body
app.use( express.json() )

//gestione delle immagini
app.use( imagePathMiddleware )

//rotta di test
app.get( '/', (req, res) => {
    res.send( 'Server movie tutto a posto' )
})



app.use( '/movies', movieRouter)

app.listen( port, () => {
    console.log(`Server movies in funzione sulla porta: ${port}`);
})