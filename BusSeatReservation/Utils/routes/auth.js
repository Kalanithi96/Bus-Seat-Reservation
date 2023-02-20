import express from 'express'
import { register,clogin, alogin } from '../controllers/authController.js'

const authRouter = express.Router()

authRouter.post('/register',register)
authRouter.post('/customerLogin',clogin)
authRouter.post('/adminLogin',alogin)

export default authRouter
