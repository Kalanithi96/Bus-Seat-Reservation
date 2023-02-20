
import express from 'express'
import {createBooking, deleteBooking, viewBookingBuses, viewBookingPassengers, viewAllBookings} from "../controllers/bookingController.js"
import { verifyAdmin, verifyUser } from '../verifyToken.js';
const bookingRouter = express.Router()

bookingRouter.post('/', createBooking);
bookingRouter.delete('/:id', deleteBooking);
bookingRouter.get('/', viewBookingBuses);
bookingRouter.get('/bus/:id', viewBookingPassengers);
bookingRouter.get('/user/:id', viewAllBookings);

export default bookingRouter;