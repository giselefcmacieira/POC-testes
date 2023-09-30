import { deleteMovies, getMovies, postMovie, putMovie } from "@/controllers/movieControllers";
import { validateSchema } from "@/middlewares/validatePostSchema";
import { validatePutSchema } from "@/middlewares/validatePutSchema";
import { Router } from "express";

const movieRouter = Router()

movieRouter.post('/movie', validateSchema, postMovie)
movieRouter.put('/movie', validatePutSchema, putMovie)
movieRouter.get('/movie', getMovies)
movieRouter.delete('/movie/:id', deleteMovies)

export default movieRouter