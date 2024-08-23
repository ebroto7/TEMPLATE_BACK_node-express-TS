import {Router, Request, Response} from 'express'  

import { getAllUsers, deleteUser } from '../controllers/user.controllers'

const userRoutes = Router()


userRoutes.get("/", getAllUsers)
userRoutes.delete("/:id", deleteUser)



export default userRoutes