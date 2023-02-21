
import express from 'express'
import {createBooking, deleteBooking, viewBookingBuses, viewIndividualBusBookings, viewBookingPassengers, viewBookingPassenger, viewAllBookings} from "../controllers/bookingController.js"
import { verifyAdmin, verifyUser } from '../verifyToken.js';
const bookingRouter = express.Router()

bookingRouter.post('/', createBooking);
bookingRouter.delete('/:id', deleteBooking);
bookingRouter.get('/', viewBookingBuses);
bookingRouter.get('/:id', viewIndividualBusBookings);
bookingRouter.post('/bus/:id', viewBookingPassengers);
bookingRouter.post('/passenger/:id', viewBookingPassenger);
bookingRouter.get('/user/:id', viewAllBookings);

export default bookingRouter;