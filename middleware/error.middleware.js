import { ObjectResponse } from '../objects/response.object.js';
const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Error interno del servidor';

    res.status(statusCode).json(new ObjectResponse(false, [], message));
};

export default errorMiddleware;