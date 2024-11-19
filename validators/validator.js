import { body, param, validationResult } from 'express-validator';
import { CustomError } from '../objects/error.object.js';

export class Validator {
    static body(field, mandatory = true) {
        switch (field) {
            case 'dni':
                const dni = body('dni')
                    .isString().notEmpty().withMessage('El DNI debe ser una cadena de texto')
                    .isNumeric().withMessage('El DNI debe contener solo números')
                    .isLength({ min: 7, max: 10 }).withMessage('El DNI debe tener entre 7 y 10 dígitos');
                return !mandatory ? dni.optional() : dni.notEmpty();
            case 'password':
                const password = body('password')
                    .isString().notEmpty().withMessage('La contraseña debe ser una cadena de texto')
                    .isLength({ min: 8 }).withMessage('La contraseña debe tener minimo 8 caracteres');
                return !mandatory ? password.optional() : password.notEmpty();
            case 'name':
                const name = body('name')
                    .isString().notEmpty().withMessage('El nombre debe ser una cadena de texto');
                return !mandatory ? name.optional() : name.notEmpty();
            case 'lastname':
                const lastname = body('lastname')
                    .isString().notEmpty().withMessage('El apellido debe ser una cadena de texto');
                return !mandatory ? lastname.optional() : lastname.notEmpty();
            case 'category':
                const category = body('category')
                    .isString().notEmpty().withMessage('La categoria debe ser una cadena de texto');
                return !mandatory ? category.optional() : category.notEmpty();
            case 'price':
                const price = body('price')
                    .isFloat().withMessage('El precio debe ser un decimal')
                    .isFloat({ min: 0 }).withMessage('El precio no puede ser negativo');
                return !mandatory ? price.optional() : price.notEmpty();
            case 'stock':
                const stock = body('stock')
                    .isInt().withMessage('El stock debe ser numerico')
                    .isInt({ min: 0 }).withMessage('El stock no puede ser negativo');
                return !mandatory ? stock.optional() : stock.notEmpty();
            case 'description':
                const description = body('description')
                    .isString().notEmpty().withMessage('La descripcion debe ser una cadena de texto');
                return !mandatory ? description.optional() : description.notEmpty();
        }
    }
    static path(field) {
        switch (field) {
            case 'id':
                return param('id')
                    .isInt().withMessage('El id debe ser numerico')
                    .isInt({ min: 0 }).withMessage('El id no puede ser negativo');
        }
    }
    static validErrors = (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            CustomError.set(errors, 'Error del usuario', 400).reply(res);
            return;
        }
        next();
    };
}
