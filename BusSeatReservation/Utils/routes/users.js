
import express from 'express'
import { createUser, viewUser } from '../controllers/userController.js';
import { verifyUser } from '../verifyToken.js';

const userRouter = express.Router()

userRouter.post('/', createUser);
userRouter.get('/:userName' , viewUser);

export default userRouter;