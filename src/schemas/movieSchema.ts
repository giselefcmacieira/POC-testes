import { CreateMovie } from "@/repositories/movieRepository";
import Joi from "joi";

export const movieSchema = Joi.object<CreateMovie>({
    name: Joi.string().required(),
    platformId: Joi.number().integer().required(),
    type: Joi.string().required(),
    status: Joi.boolean().required(),
    comment: Joi.string()
})