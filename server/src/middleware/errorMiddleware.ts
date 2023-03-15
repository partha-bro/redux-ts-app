import {NextFunction, Request,Response} from 'express'
import CustomErrors from "../errors/customErrors"

const errorMiddleware = (err: TypeError,req: Request,res: Response, next: NextFunction) => {
    if(err instanceof CustomErrors){
        res.status(err.statusCode).json({message:err.message})
    }else{
        res.status(500).json({message:err.message})
    }
}

export default errorMiddleware