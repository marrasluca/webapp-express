import express from 'express';

import upload from '../middlewares/multer.js';

import { index, show, destroy, storeReview, store} from '../controllers/movieController.js'

const router = express.Router()

router.get( '/', index);

router.get( '/:id', show);

router.delete( '/:id', destroy);

router.post( '/:id/reviews', storeReview );


//creazione di un nuovo libro
router.post ( '/', upload.single('image'), store)



export default router;