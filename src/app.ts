import express, {Express} from "express"
import "express-async-errors"
import cors from "cors"
import router from "./routes/indexRoute"
import errorHandler from "./middlewares/error-middlewares"

const app: Express = express()
app.use(cors())
app.use(express.json())

app.use(router)

app.use(errorHandler)

const port: number = Number(process.env.PORT) || 5000
app.listen(port, () => console.log(`Server is up and running on port ${port}`))
