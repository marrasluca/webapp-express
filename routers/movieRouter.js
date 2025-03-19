import express from 'express';

import { index, show, destroy } from '../controllers/movieController'

const router = express.Router()

router.get( '/', index);

router.get( '/:id', show);

router.delete( '/:id', destroy);



export default router