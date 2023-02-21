import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        bus_id:{
            type:ObjectId,
            required: true,
        },
        user_id:{
            type:ObjectId,
            required: true,
        },
        phone:{
            type:Number,
            required: true
        },
        email:{
            type:String,
            required: true,
        },
        name:{
            type:String,
            required: true,
        },
        age:{
            type:Number,
            required: true,
        },
        gender:{
            type:String,
            required: true
        },
        seat:{
            type:String,
            required: true
        }
    },
    {timestamps: true}
);

export default mongoose.model("Booking", bookingSchema);