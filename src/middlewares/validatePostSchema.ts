import { invalidBodyError } from "@/errors/invalidBody";
import { movieSchema } from "@/schemas/movieSchema";
import { NextFunction, Request, Response } from "express";

export function validateSchema (req: Request, res: Response, next: NextFunction){
    const validation = movieSchema.validate(req.body, {abortEarly: false});
    if(validation.error){
        const errors = validation.error.details.map(detail => detail.message);
        throw invalidBodyError(errors)
    }
next();
}