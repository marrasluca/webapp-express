import connection from '../data/db.js';

function index(req, res){
  const sql = 'SELECT * FROM movies'

  connection.query(sql, (err, results) => {
    if(err) return res.status(500).json({
        error: 'Errore lato Server Index function'
    })

    // res.json(results);

    const movies = results.map( movie => {
        return {
            ...movie,
            image: req.imagePath + book.image
        }
    })

    // res.json(movies)


  })
}

function show(req, res){
    const {id} = req.params;

    const movieSql = 'SELECT * FROM movies WHERE id=?'

    const reviewsSql = 'SELECT * FROM reviews WHERE movie_id=?'

    connection.query( movieSql, [id], (err,results) => {
            if(err) return res.status(500).json({
            error: 'Errore lato Server Show function'
    })

    if( results.length === 0 ) return res.status(404).json({
        error: 'Movie not found'
    })

    const movie = results[0]
    connection.query(reviewsSql, [id], (err,reviewsResults) => {
        if(err) return res.status(500).json({
            error: 'Errore lato Server Show function'
    })

       movie.reviews = reviewsResults;
       res.json(movie)
    })

})
}

function destroy(req, res){
    const {id} = req.params;

    const sql = 'DELETE FROM movies WHERE id = ?'

    connection.query( sql, [id], (err) => {
        if(err) return res.status(500).json({
            error: 'Errore lato Server Destroy function'
    })
        
    res.sendStatus(204)

    })
}

function storeReview(req, res){
    //recuperare l'id
    const { id } = req.params

    //recuperare le informazioni del body
    const { text, name, vote } = req.body

    //preparazione della query
    const sql = 'INSERT INTO reviews ( text, name, movie_id) VALUES (?,?,?,?)'

    //eseguiamo la query
    connection.query( sql, [text, name, vote, id], ( err, results ) => {
        if(err) return res.status(500).json({
            error: 'Database error StoreReview'
    })

    res.status(201)
    res.json({
        message: 'reviews Added',
        id: results.insertId
    })

    })

}

export{
    index, show, destroy, storeReview
}