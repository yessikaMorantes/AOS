import { ObjectResponse } from "../objects/response.object.js";
export class CustomError {

    constructor(data, message, statusCode) {
        this.message = message;
        this.statusCode = statusCode;
        this.data = data;
    }

    static set(data, message, statusCode) {
        return new CustomError(data, message, statusCode);
    }

    reply(res) {
        res.status(this.statusCode).json(new ObjectResponse(false, this.data, this.message));
    }
}
