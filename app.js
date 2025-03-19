import express from 'express';
import movieRouter from'./routers/movieRouter'

const app = express();
const port = 3000;


app.use( '/api/movies', movieRouter)

app.listen( port, () => {
    console.log(`Server movies in funzione sulla porta: ${port}`);
})