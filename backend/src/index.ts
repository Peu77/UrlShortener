import {AppDataSource} from "./data-source"
import {initControllers} from "@peu77/expresswrapper";
import express from "express"
import {LinkController} from "./controller/link/LinkController";
import cors from "cors";
import {UserController} from "./controller/user/UserController";
import env from "@bergerapi/env";

env();

AppDataSource.initialize().then(async () => {
    console.log("Database initialized")
    const app = express()
    app.use(cors())

    app.listen(4000, () => {
        initControllers(app, [
            LinkController, UserController
        ])
    })
}).catch(error => console.log(error))