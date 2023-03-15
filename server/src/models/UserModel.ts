import mongoose, { Schema } from "mongoose";

interface UserSchema {
    name : string,
    email : string,
    phone : number,
    work : string,
    password: string,
    cnfPassword: string
}

const userSchema = new Schema<UserSchema>(
    {
        name: {
            type: String,
            trim: true,
            required: [true, 'Name must is provided.']
        },
        email: {
            type: String,
            required: [true, 'Email must is provided.']
        },
        phone: {
            type: Number,
            match: /^[0-9]{10}$/
        },
        work: {
            type: String,
            default: 'Developer'
        },
        password: String,
        cnfPassword: String
    }
)

const User = mongoose.model('user',userSchema)

export default User