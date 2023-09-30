import { Router } from "express";
import movieRouter from "./movieRoute";

const router = Router()

router.use(movieRouter)

export default router