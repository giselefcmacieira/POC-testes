import { UpdateMovie } from "@/protocols/protocols";
import Joi from "joi";

export const movieUpdateSchema = Joi.object<UpdateMovie>({
    id: Joi.number().required(),
    status: Joi.boolean().required(),
    comment: Joi.string()
})