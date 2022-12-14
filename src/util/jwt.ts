import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';

export const signJWT = async (id: ObjectId): Promise<string> => {
    let token = await jwt.sign({ _id: id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
    return token
}

export const decodeJWT = async (token: string) => {
    let decode = await jwt.verify(token, process.env.JWT_SECRET);
    return decode;
}