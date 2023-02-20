import mongoose from "mongoose";

const busSchema = new mongoose.Schema(
    {
        busNo:{
            type:String,
            required: true,
            unique: true,
        },
        from:{
            type:String,
            required: true
        },
        departure:{
            type:Date,
            required: true,
        },
        to:{
            type:String,
            required: true
        },
        arrival:{
            type:Date,
            required: true,
        },
        totalSeats:{
            type:Number,
            required: true,
        },
        availableSeats:{
            type:Number,
            required: true,
        },
        fare:{
            type:Number,
            required: true
        },
        vacant:{
            type:Object,
            required: true
        }
    },
    {timestamps: true}
);

export default mongoose.model("Bus", busSchema);