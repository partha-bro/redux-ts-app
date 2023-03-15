import mongoose from "mongoose";

export async function connectDB(url:string,database:string): Promise<typeof mongoose> {
    return mongoose.connect(url+database)
}