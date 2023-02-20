
import express from 'express'
import { createBus, updateBus, deleteBus, viewBus, viewAllBus, getBusBySearch, updateBusAfterBooking } from '../controllers/busController.js';
import { verifyAdmin, verifyUser } from '../verifyToken.js';
const busRouter = express.Router()

busRouter.post('/', createBus);
busRouter.put('/:id', updateBus);
busRouter.put('/bus/:id', updateBusAfterBooking);
busRouter.delete('/:id', deleteBus);
busRouter.get('/:id', viewBus);
busRouter.get('/', viewAllBus);
busRouter.get('/search/getBusBySearch', getBusBySearch);

export default busRouter;