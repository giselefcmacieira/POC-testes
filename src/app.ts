import express, { Express, Request, Response } from "express"
import "express-async-errors"
import cors from "cors"
import router from "./routes/indexRoute"
import errorHandler from "./middlewares/error-middlewares"

const app: Express = express()
app.use(cors())
app.use(express.json())
app.get("/health", (req: Request, res: Response) => res.send("ok!"));
app.use(router)

app.use(errorHandler)

export default app
