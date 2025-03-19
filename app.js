// import dotenv from 'dotenv'; // importa dotenv
// dotenv.config(); // carica il file .env

import express from 'express';

import movieRouter from'./routers/movieRouter.js'

const app = express();
const port = 3002;


app.use( '/movies', movieRouter)

app.listen( port, () => {
    console.log(`Server movies in funzione sulla porta: ${port}`);
})