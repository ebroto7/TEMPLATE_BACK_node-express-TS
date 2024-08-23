import { Request, Response } from "express";
import { generateToken } from "../libs/jwt";
import bcrypt from "bcryptjs";
import UserModel from "../model/user.model";


export const register = async (req: Request, res: Response) => {
    try {
    const { name, email, password } = req.body;
        const emailFound = await UserModel.findOne({ email })
        if (emailFound ) return res.status(400).send({ message: "El email ya está registrado" });
        
        const nameFound = await UserModel.findOne({ name })
        if (nameFound) return res.status(400).send({ message: "El nombre ya está registrado" });

        const passHash = await bcrypt.hash(password, 10)
        const newUser = new UserModel({
            name,
            email,
            password: passHash
        });
        const userSaved = await newUser.save();

        const token = await generateToken({ id: userSaved._id })

        res.cookie('token', token)

        res.status(200).send({
            
                id: userSaved._id,
                name: userSaved.name,
                email: userSaved.email,
                role: userSaved.role
            
        });
    } catch (error) {
        console.log(">>>>> register error", error);
        res.status(500).send({ message: "Error al registrar" });
    }
}


export const login = async (req: Request, res: Response)  => {

    const { email, password } = req.body;

    try {
        const userFound = await UserModel.findOne({ email })
        if (!userFound) return res.status(400).send({ message: "Usuario no encontrado" });

        const isMatch = await bcrypt.compare(password, userFound.password)
        if (!isMatch) return res.status(400).send({ message: "Contraseña incorrecta" });


        const token = await generateToken({ id: userFound._id })

        res.cookie('token', token)

        res.status(200).send({
            
                id: userFound._id,
                name: userFound.name,
                email: userFound.email,
                role: userFound.role
            
        });
    } catch (error) {
        console.log(">>>>> register error", error);
        res.status(500).send({ message: "Error al registrar" });
    }
}

export const logout = async (req: Request, res: Response)  => {
    res.clearCookie('token')
    res.status(200).send({ message: "EL usuario ha cerrado sesión" });
}

export const profile = async (req: Request, res: Response)  => {
    console.log(">>>>> user authorized", req.body);
    const userFound = await UserModel.findById(req.body.id);
    console.log(">>>>> userFound", userFound);

    if (!userFound) return res.status(400).send({ message: "Usuario no encontrado" });

    res.status(200).send({ message: "Perfil de usuario", userFound: {
        id: userFound._id,
        name: userFound.name,
        email: userFound.email,
        role: userFound.role
    } });
}
