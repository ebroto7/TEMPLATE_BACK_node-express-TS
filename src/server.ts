import express, {Request, Response} from 'express';
import userRoutes from './routes/user.routes';
import config from './config/config';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import authRouter from './routes/auth.routes';

const app = express()
app.use(cors())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(express.json())

const PORT = config.app.PORT

console.log(">>>>>",config.db.URI)

app.use("/users", userRoutes)
app.use("/auth", authRouter)

export default app