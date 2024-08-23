import { Document, Schema, model } from "mongoose";

enum Role {
    ADMIN = 'admin',
    USER = 'user'
}


interface IUserDocument extends Document {
    name: string;
    email: string;
    password: string;
    role: string;
}

const UserSchema = new Schema<IUserDocument>(
    {
        name: {
            type: String,
            min: 3,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            min: 6,
            max: 12,
            required: true,
        },
        role: {
            type: String,
            default: Role.USER
        },
    },
    {
        timestamps: true, 
        versionKey: false
    }
)

const UserModel = model<IUserDocument>('User', UserSchema)

export default UserModel