import {Request,Response} from 'express'

const notFound = (req: Request,res: Response): void => {
    res.status(404).json({message:"Routes doesn't exists"})
}

export default notFound