import { Router } from "express";
import { register, login, logout, profile } from "../controllers/auth.controller";
import { authRequired } from "../middlewares/auth.middleware";
import { validateSchema } from "../middlewares/validator.middleware";

import { loginSchema, registerSchema } from "../schemas/auth.schema";

const authRouter = Router()

authRouter.post('/register', validateSchema(registerSchema), register)
authRouter.post('/login', validateSchema(loginSchema) , login)
authRouter.post('/logout', logout)

authRouter.get('/profile', authRequired, profile)

export default authRouter