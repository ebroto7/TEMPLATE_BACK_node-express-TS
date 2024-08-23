import dotenv from 'dotenv'

if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: '.env.production' })
} else {
    dotenv.config({ path: '.env.development' })
}


const ENV = process.env.NODE_ENV ?? 'development'


type TConfig = {
    [key: string]: EnvironmentConfig
}
type EnvironmentConfig = {
    app: AppConfig
    db: MongodbConfig;
    secret_token: string
}

type MongodbConfig = {
    URI: string
}

type AppConfig = {
    PORT: string | number
}

// configuramos los puertos a utilizar
const CONFIG: TConfig = {
    development: {
        app: {
            PORT: process.env.PORT || 4001
        },
        db: {
            URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/development'
        },
        secret_token: process.env.SECRET_TOKEN || 'secret'


    },
    production: {
        app: {
            PORT: process.env.PORT || 4001
        },
        db: {
            URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/production'
        },
        secret_token: process.env.SECRET_TOKEN || 'secret'
    }
}

// exportamos

export default CONFIG[ENV]