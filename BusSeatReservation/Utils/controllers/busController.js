import Bus from '../Models/Bus.js'

export const createBus = async (req,res) => {

    const newBus = new Bus(req.body)

    try{
        const savedBus = await newBus.save()
        res.status(200).json({success:true, message:"successfully created",data:savedBus})
    }catch(err){
        res.status(500).json({success:false, message:"creation failed"})
    }

}

export const updateBus = async (req,res) => {

    const id = req.params.id

    try{
        const updatedBus = await Bus.findByIdAndUpdate(id,{
            $set: req.body
        }, {new:true})

        res.status(200).json({success:true, message:"successfully updated",data:updatedBus})
    }catch(err){
        res.status(500).json({success:false, message:"updation failed"})
    }

}

export const updateBusAfterBooking = async (req,res) => {

    const id = req.params.id

    let oldBus
    try{
        const old = await Bus.findById(id)        
        oldBus = old
    }catch(err){
        console.log(err)
    }

    let fill = req.body.fill;

    fill.map((seat)=>{
        oldBus['vacant'][seat] = false
    });
    oldBus['availableSeats'] = oldBus['availableSeats'] - fill.length;

    try{
        const updatedBus = await Bus.findByIdAndUpdate(id,{
            $set: oldBus
        }, {new:true})

        res.status(200).json({success:true, message:"successfully updated",data:updatedBus})
    }catch(err){
        res.status(500).json({success:false, message:"updation failed"})
    }
    

}

export const updateBusAfterCancel = async (req,res) => {

    const id = req.params.id

    let oldBus
    try{
        const old = await Bus.findById(id)        
        oldBus = old
    }catch(err){
        console.log(err)
    }

    let fill = req.body.fill;

    oldBus['vacant'][fill] = true
    oldBus['availableSeats'] = oldBus['availableSeats'] + 1;

    try{
        const updatedBus = await Bus.findByIdAndUpdate(id,{
            $set: oldBus
        }, {new:true})

        res.status(200).json({success:true, message:"successfully updated",data:updatedBus})
    }catch(err){
        res.status(500).json({success:false, message:"updation failed"})
    }
    

}

export const updateBusAfterReset = async (req,res) => {

    const id = req.params.id

    let oldBus
    try{
        const old = await Bus.findById(id)        
        oldBus = old
    }catch(err){
        console.log(err)
    }

    let fill = req.body.fill;

    fill.map((seat)=>{
        oldBus['vacant'][seat] = true
    });
    oldBus['availableSeats'] = oldBus['availableSeats'] + fill.length;

    try{
        const updatedBus = await Bus.findByIdAndUpdate(id,{
            $set: oldBus
        }, {new:true})

        res.status(200).json({success:true, message:"successfully updated",data:updatedBus})
    }catch(err){
        res.status(500).json({success:false, message:"updation failed"})
    }
    

}


export const deleteBus = async (req,res) => {

    const id = req.params.id

    try{
        const deletedBus = await Bus.findByIdAndDelete(id)

        res.status(200).json({success:true, message:"successfully deleted",data:deletedBus})
    }catch(err){
        res.status(500).json({success:false, message:"deletion failed"})
    }

}

export const viewBus = async (req,res) => {

    const id = req.params.id

    try{
        const bus = await Bus.findById(id);

        res.status(200).json({success:true, message:"successfully retrieved",data:bus})
    }catch(err){
        res.status(404).json({success:false, message:"retrieval failed"})
    }

}

export const viewAllBus = async (req,res) => {

    try{
        const buses = await Bus.find({})

        res.status(200).json({success:true, count: buses.length, message:"successfully retrieved",data:buses})
    }catch(err){
        res.status(404).json({success:false, message:"retirieval failed"})
    }

}

export const getBusBySearch = async(req,res)=>{

    const from = new RegExp(req.query.from)
    const to = new RegExp(req.query.to)
    const on = new RegExp(req.query.on)

    try{

        const buses = await Bus.find({from,to,"departure":{$gte:on}})
        
        res.status(200).json({success:true, count: buses.length, message:"successfully retrieved",data:buses})
        return res
    }catch(err){
        res.status(404).json({success:false, message:"retrieval failed"})
        return res
    }

}