
import express from 'express'
import { createUser, viewUser, viewUserByID } from '../controllers/userController.js';
import { verifyUser } from '../verifyToken.js';

const userRouter = express.Router()

userRouter.post('/', createUser);
userRouter.get('/:userName' , viewUser);
userRouter.get('/id/:id' , viewUserByID);

export default userRouter;