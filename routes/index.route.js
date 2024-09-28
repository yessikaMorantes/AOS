import { Router } from "express";
import Producto from "./producto.route.js"
import Auth from "./auth.route.js"
import Error from './error.route.js';
import Default from './default.route.js';

const router = Router();

const generalRouters =[
    {path: '/auth' , route : Auth},
    {path: '/product' , route : Producto},
    //{path: '/error', route: Error},
    {path: '/' , route : Default},

];

generalRouters.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;