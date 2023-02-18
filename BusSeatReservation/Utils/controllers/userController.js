import User from '../Models/User.js'

export const createUser = async (req,res) => {

    const newUser = new User(req.body)

    try{
        const savedUser = await newUser.save()
        res.status(200).json({success:true, message:"successfully created",data:savedUser})
    }catch(err){
        res.status(500).json({success:false, message:"creation failed"})
    }

}

export const viewUser = async (req,res) => {

    const id = req.params.id

    try{
        const user = await User.findById(id);

        res.status(200).json({success:true, message:"successfully retrieved",data:user})
    }catch(err){
        res.status(404).json({success:false, message:"retrieval failed"})
    }

}