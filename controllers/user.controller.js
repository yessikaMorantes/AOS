import { CustomError } from "../objects/error.object.js";
import crypto from 'crypto';
import { getUserModel, insertUserModel } from "../models/user.model.js";
import { ObjectResponse } from "../objects/response.object.js";

export async function getUser(req, res, next) {
    try {
        const { id } = req.params;
        const data = await getUserModel(id);

        if (!data || data.length === 0) {
            CustomError.set('Usuario no encontrado', 404).reply(next);
        }
        ObjectResponse.set(true, data, 'Usuario encontrado exitosamente').reply(res);
    } catch (error) {
        console.error(error);
        CustomError.set('Error al obtener el usuario', 500).reply(next);
    }
}

export async function insertUser(req, res, next) {
    try {
        const { name, lastname, dni, password } = req.body;
        const data = await insertUserModel(name, lastname, dni, crypto.createHash('sha256').update(password).digest('hex'));
        ObjectResponse.set(true, data, 'Usuario insertado exitosamente').reply(res);
    } catch (error) {
        console.error(error);
        CustomError.set('Error al insertar el usuario', 500).reply(next);
    }
}
