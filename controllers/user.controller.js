import { CustomError } from "../objects/error.object.js";
import crypto from 'crypto';
import { getUserModel, insertUserModel } from "../models/user.model.js";
import { ObjectResponse } from "../objects/response.object.js";
import { Validator } from '../validators/validator.js';


export const getUser = [
    Validator.path('id'),
    Validator.validErrors,
    async (req, res) => {
        try {
            const { id } = req.params;
            const data = await getUserModel(id);

            if (!data || data.length === 0) {
                CustomError.set([], 'Usuario no encontrado', 404).reply(res);
                return;
            }
            ObjectResponse.set(true, data, 'Usuario encontrado exitosamente').reply(res);
        } catch (error) {
            console.error(error);
            CustomError.set([], 'Error al obtener el usuario', 500).reply(res);
        }
    }
]

export const insertUser = [
    Validator.body('name', true),
    Validator.body('lastname', true),
    Validator.body('dni', true),
    Validator.body('password', true),
    Validator.validErrors,
    async (req, res) => {
        try {
            const { name, lastname, dni, password } = req.body;
            const data = await insertUserModel(name, lastname, dni, crypto.createHash('sha256').update(password).digest('hex'));
            ObjectResponse.set(true, data, 'Usuario insertado exitosamente').reply(res);
        } catch (error) {
            console.error(error);
            CustomError.set([], 'Error al insertar el usuario', 500).reply(res);
        }
    }
]
