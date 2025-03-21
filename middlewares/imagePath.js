function setImagePath( req, res, next ) {
    req.setImagePath = `${req.protocol}://${req.get('host')}/image/`
    next();
}

export default setImagePath