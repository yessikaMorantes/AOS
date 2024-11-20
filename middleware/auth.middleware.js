import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { CustomError } from '../objects/error.object.js';

dotenv.config();

const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        CustomError.set([],"Autenticacion fallida", 403).reply(res);
        return;
    }

    const token = authHeader?.split(' ')[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            CustomError.set([],"Autenticacion fallida", 403).reply(res);
            return;
        }
        req.user = user;
        next();
    });
};

export default auth;
