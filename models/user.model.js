import pgService from "../services/pg.service.js";

export const getUserModel = async (id) => {
    try {
        return await new pgService().connection.query('SELECT * FROM users WHERE id = $1', id);
    } catch (error) {
        throw error;
    }
}

export const insertUserModel = async (name, lastname, dni, password) => {
    try {
        return await new pgService().connection.query('INSERT INTO users (name, lastname, dni, password) values($1, $2, $3, $4) returning *',
            [name, lastname, dni, password]
        );
    } catch (error) {
        throw error;
    }
};


