import express from 'express'
import { register,clogin, alogin } from '../controllers/authController.js'

const router = express.Router()

router.post('/register',register)
router.post('/customerLogin',clogin)
router.post('/adminLogin',alogin)

export default router
