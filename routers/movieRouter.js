import express from 'express';

import { index, show, destroy, storeReview } from '../controllers/movieController.js'

const router = express.Router()

router.get( '/', index);

router.get( '/:id', show);

router.delete( '/:id', destroy);

router.post( '/:id/reviews', storeReview );



export default router;