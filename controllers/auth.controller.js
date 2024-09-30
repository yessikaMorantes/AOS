import jwt from 'jsonwebtoken';
import { ObjectResponse } from '../objects/response.object.js';

export const login = async (req, res) => {
    //todo: create a login with admin
    const user = { id: 1, username: 'example' };
    const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: '1h' });
    ObjectResponse.set(true, token, 'Autenticacion exitosa').reply(res);
}
