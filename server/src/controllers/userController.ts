import { Request,Response } from "express";
import CustomErrors from "../errors/customErrors";
import User from "../models/UserModel";

const getAllUsers = async (req:Request,res:Response): Promise<void> => {
    const users = await User.find({})
    if(!users) throw new CustomErrors(204,'Users are not Found!')
    res.status(200).json({data:users})
}

export { getAllUsers }