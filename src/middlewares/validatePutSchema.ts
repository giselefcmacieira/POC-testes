import { invalidBodyError } from "@/errors/invalidBody";
import { movieUpdateSchema } from "@/schemas/movieUpdateSchema";
import { NextFunction, Request, Response } from "express";

export function validatePutSchema (req: Request, res: Response, next: NextFunction){
    const validation = movieUpdateSchema.validate(req.body, {abortEarly: false});
    if(validation.error){
        const errors = validation.error.details.map(detail => detail.message);
        throw invalidBodyError(errors)
    }
next();
}