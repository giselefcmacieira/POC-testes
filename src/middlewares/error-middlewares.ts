import { error } from "@/protocols/protocols";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";


export default function errorHandler(error: error, req: Request, res: Response, next: NextFunction){
    if (error.type === "invalidBody") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    }
    if(error.type === "conflict"){
        return res.status(httpStatus.CONFLICT).send(error.message)
    }
    if(error.type === "badRequest"){
        return res.status(httpStatus.BAD_REQUEST).send(error.message)
    }
    console.log(error)
    res.status(500).send("Foi mal, deu alguma coisa errada com o servidor 😢");
}