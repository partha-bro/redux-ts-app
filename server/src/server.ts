import express, { Application,Request,Response } from 'express'
import cors from 'cors'
import 'dotenv/config'
import 'express-async-errors'
import router from './routes/Router'
import { connectDB } from './models/config'
import mongoose from 'mongoose'
import notFound from './middleware/notFound'
import errorMiddleware from './middleware/errorMiddleware'

// Application is a interface in express module
const server: Application = express()
server.use(express.json())
server.use(cors())

// routes
server.use('/api/v1/',router)

// middleware
server.use(notFound)
server.use(errorMiddleware)

const startServer = async (): Promise<void> => {
    const port : string | number = process.env.PORT || 5000
    const database : string = 'mernStackDB'
    const url : any= process.env.MONGODB_URL
    try{
        const success: typeof mongoose = await connectDB(url,database)
        console.log(`Mongo DB is successfully connect with ${success.connection.host}`)
        server.listen(port, ():void=>console.log(`Server is running on ${port}`))
    }catch(err:any){
        console.log(`Server is not running due to ${err}`)
    }
}

startServer()