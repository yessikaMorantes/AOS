import express from 'express';
import { exports } from "./default.js";
import router from "../routes/index.route.js";
import pgService from '../services/pg.service.js';

export default class Server {

    constructor() {
        this.app = express();
        this.port = exports.port;
    }

    async connectionDB() {
        new pgService();
    }

    middleware() {
        this.app.use(express.json());
    }

    route() {
        this.app.use(router);
    }

    runServer() {
        this.app.listen(this.port, () => {
            console.log("Server on!!", this.port);
        })
    }

    load() {
        this.connectionDB();
        this.middleware();
        this.route();
        this.runServer();
    }

}
