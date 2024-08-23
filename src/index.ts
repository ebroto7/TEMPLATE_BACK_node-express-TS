import app from "./server";
import config from "./config/config";
import connectDB from "./DB/conect";

const PORT = config.app.PORT

connectDB().then(() => {
    console.log('DB connected')

    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`)
    })
}
).catch((error) => {
    console.log('DB connection error', error)
})

