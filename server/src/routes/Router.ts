import { Router } from "express";
import { getAllUsers } from "../controllers/userController";
const router : Router = Router()

router.get('/users',getAllUsers)

export default router