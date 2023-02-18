
import express from 'express'
import { createBus, updateBus, deleteBus, viewBus, viewAllBus, getBusBySearch } from '../controllers/busController.js';
import { verifyAdmin, verifyUser } from '../verifyToken.js';
const busRouter = express.Router()

busRouter.post('/', createBus);
busRouter.put('/:id', updateBus);
busRouter.delete('/:id', deleteBus);
busRouter.get('/:id', viewBus);
busRouter.get('/', viewAllBus);
busRouter.get('/search/getBusBySearch', getBusBySearch);

export default busRouter;