import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required: true,
            unique: true,
        },
        phone:{
            type:Number,
            required: true,
            unique: true,
        },
        password:{
            type:String,
            required: true,
        },
        Type:{
            type:String,
            required: true,
        },
    },
    {timestamps: true}
);

export default mongoose.model("User", userSchema);