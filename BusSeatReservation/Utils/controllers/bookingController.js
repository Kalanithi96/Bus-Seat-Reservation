import { ObjectId } from 'mongodb'
import Booking from '../Models/Booking.js'

export const createBooking = async (req,res) => {

    const newBooking = new Booking(req.body)

    try{
        const savedBooking = await newBooking.save()
        res.status(200).json({success:true, message:"successfully created",data:savedBooking})
    }catch(err){
        res.status(500).json({success:false, message:"creation failed"})
    }

}


export const deleteBooking = async (req,res) => {

    const id = req.params.id;
    
    try{
        const deletedBooking = await Booking.findByIdAndDelete(id)

        res.status(200).json({success:true, message:"successfully deleted",data:deletedBooking})
    }catch(err){
        res.status(500).json({success:false, message:"deletion failed"})
    }

}

export const viewBookingBuses = async (req,res) => {

    try{
        const bookings = await Booking.aggregate([  {$group:{'_id':'$bus_id','count':{$sum:1}}},
                                                    {$lookup:{
                                                        from:"buses",
                                                        localField:"_id",
                                                        foreignField:"_id",
                                                        as: "bus_details"
                                                    }}
                                                ]);

        res.status(200).json({success:true, message:"successfully retrieved",data:bookings})
    }catch(err){
        res.status(404).json({success:false, message:"retrieval failed"})
    }

}

export const viewBookingPassengers = async (req,res) => {

    const id = req.params.id
    const u_id = req.body.u_id;

    try{
        const booking = await Booking.find({'bus_id':id,'user_id':u_id})

        res.status(200).json({success:true, message:"successfully retrieved",data:booking})
    }catch(err){
        res.status(404).json({success:false, message:"retrieval failed"})
    }

}


export const viewAllBookings = async (req,res) => {

    
    const id = new ObjectId(req.params.id)
    
    try{
        const bookings = await Booking.aggregate([  {$match:{user_id:id}},
                                                    {$group:{'_id':'$bus_id','count':{$sum:1}}},
                                                    {$lookup:{
                                                        from:"buses",
                                                        localField:"_id",
                                                        foreignField:"_id",
                                                        as: "bus_details"
                                                    }}
                                                ]);

        res.status(200).json({success:true, message:"successfully retrieved",data:bookings})
    }catch(err){
        res.status(404).json({success:false, message:"retirieval failed"})
    }

}
