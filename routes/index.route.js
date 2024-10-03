import { Router } from "express";
import Producto from "./producto.route.js"
import Auth from "./auth.route.js"
import Default from './default.route.js';
import Usuario from './user.route.js';

const router = Router();

const generalRouters =[
    {path: '/auth' , route : Auth},
    {path: '/product' , route : Producto},
    {path: '/user' , route : Usuario},
    {path: '/' , route : Default},

];

generalRouters.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;