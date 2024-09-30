export class CustomError {

    constructor(message, statusCode) {
        this.message = message;
        this.statusCode = statusCode;
        this.name = this.constructor.name;
    }

    static set(message, statusCode) {
        return new CustomError(message, statusCode);
    }

    reply(next) {
        next(this);
    }
}
