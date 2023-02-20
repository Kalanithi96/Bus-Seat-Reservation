import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import busRouter from './routes/buses.js';
import userRouter from './routes/users.js';
import authRouter from './routes/auth.js';
import bookingRouter from './routes/bookings.js';
import stripe from 'stripe'

const Stripe = stripe(process.env.SECRET_KEY);

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin:true,
    credentials:true,
}

mongoose.set("strictQuery",false);
const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log('MongoDB Database connected');
    } catch(err){
        console.log('MongoDB Database not connected');
    }
}

/*
app.get("/", (req,res)=>{
    res.send("api is working");
});
*/
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/buses',busRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/booking',bookingRouter)

app.listen(port, ()=>{
    connect();
    console.log('server listening on port',port);
});

app.post('/payment', async (req,res)=>{
    let status, error;
    const {token, amount} = req.body;
    try {
        await Stripe.charges.create({
            source: token.id,
            amount,
            curresny: 'inr',
        })
        status = "success"
    } catch (error) {
        status = "failure";
    }
    res.json([error,status])
})