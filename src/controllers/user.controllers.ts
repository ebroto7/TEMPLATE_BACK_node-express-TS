import { Response, Request } from "express";
import UserModel  from "../model/user.model";



export const getAllUsers = async (req: Request, res: Response) => {

    try {
        const allUsers = await UserModel.find()
        res.status(200).json(allUsers)

    } catch (error) {
        res.status(500).json(error)
    }
   
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        await UserModel.findByIdAndDelete(id)
        res.status(200).json({message: 'User deleted'})

    } catch (error) {
        res.status(500).json(error)
    }
}