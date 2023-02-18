import User from "../Models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async(req,res)=>{
    try{

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password,salt)

        const newUser = new User({
            username: req.body.username,
            phone: req.body.phone,
            password: hash,
            Type: "C"
        })

        await newUser.save()

        res.status(200);
        const jsonContent = JSON.stringify({success:true, message:"successfully added",data:newUser})
        res.end(jsonContent);
        return res;
    }catch(err){
        res.status(404);
        const jsonContent = JSON.stringify({success:false, message:"Addition failed"})
        res.end(jsonContent);
        return res;
    }
};

export const clogin = async(req,res)=>{

    
    const username = req.body.username

    try{

        const user = await User.findOne({username,"Type":"C"})

        if(!user){
            res.status(404);
            const jsonContent = JSON.stringify({success:false, message:"User not found"})
            res.end(jsonContent);
            return res;
        }

        
        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)

        if(!checkCorrectPassword){
            res.status(401);
            const jsonContent = JSON.stringify({success:false, message:"Incorrect usename/password"})
            res.end(jsonContent);
            return res;
        }

        const {password, Type, ...rest} = user._doc


        const token = jwt.sign({id:user._id, Type:user.Type}, process.env.JWT_SECRET_KEY, {expiresIn:"15d"});
        
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200)

        const jsonContent = JSON.stringify({token,Type,success:true, message:"Login Successful", data: {...rest}})
        res.end(jsonContent);
            
        return res;
    } catch(err) {
        res.status(500);
        const jsonContent = JSON.stringify({success:false, message:"Login Failed"})
        res.end(jsonContent);
        return res;
    }
};

export const alogin = async(req,res)=>{

    
    const username = req.body.username

    try{

        const user = await User.findOne({username,"Type":"A"})

        if(!user){
            res.status(404);
            const jsonContent = JSON.stringify({success:false, message:"User not found"})
            res.end(jsonContent);
            return res;
        }

        
        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)

        if(!checkCorrectPassword){
            res.status(401);
            const jsonContent = JSON.stringify({success:false, message:"Incorrect usename/password"})
            res.end(jsonContent);
            return res;
        }

        const {password, Type, ...rest} = user._doc


        const token = jwt.sign({id:user._id, Type:user.Type}, process.env.JWT_SECRET_KEY, {expiresIn:"15d"});
        

        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200)
        const jsonContent = JSON.stringify({token,Type,success:true, message:"Login Successful", data: {...rest}})
        res.end(jsonContent);
        return res;
    } catch(err) {
        res.status(500);
        const jsonContent = JSON.stringify({success:false, message:"Login Failed"})
        res.end(jsonContent);
        return res;
    }
};
