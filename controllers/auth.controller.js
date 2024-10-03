import jwt from 'jsonwebtoken';
import { ObjectResponse } from '../objects/response.object.js';
import { CustomError } from '../objects/error.object.js';
import { getUserAuthModel } from "../models/auth.model.js";
import crypto from 'crypto';
import { Validator } from '../validators/validator.js';

export const login = [
    Validator.body('dni', true),
    Validator.body('password', true),
    Validator.validErrors,
    async (req, res) => {
        try {
            const { dni, password } = req.body;
            const data = await getUserAuthModel(dni, crypto.createHash('sha256').update(password).digest('hex'));

            if (!data || data.length === 0) {
                CustomError.set([], 'Autenticacion fallida', 500).reply(res);
                return;
            }
            const token = jwt.sign(data[0], process.env.SECRET_KEY, { expiresIn: '1h' });
            ObjectResponse.set(true, token, 'Autenticacion exitosa').reply(res);
        } catch (error) {
            console.error(error);
            CustomError.set([], 'Autenticacion fallida', 500).reply(res);
        }
    }
]
