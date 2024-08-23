import jwt from "jsonwebtoken";
import config from '../config/config';

const SECRET_TOKEN = config.secret_token;

export function generateToken(payload: any) {
   return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            SECRET_TOKEN,
            {
                expiresIn: 86400
            },
            (error, token) => {
                if (error) reject(error);
                resolve(token);
            }
        );
    });
}