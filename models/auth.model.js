import pgService from "../services/pg.service.js";

export const getUserAuthModel = async (dni, password) => {
    try {
        return await new pgService().connection.query('SELECT * FROM users WHERE dni = $1 AND password = $2',
            [dni, password]);
    } catch (error) {
        throw error;
    }
}
