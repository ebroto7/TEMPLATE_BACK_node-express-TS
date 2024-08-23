import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config";


const SECRET_TOKEN = config.secret_token;

export const authRequired = async (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.cookies
    if (!token) return res.status(401).send({ message: "Usuario No autorizado" });

    jwt.verify(token, SECRET_TOKEN, (error: any, user:any ) => {
        if (error) return res.status(401).send({ message: "Usuario No autorizado" });
        req.body = user;
        next();
    });

}