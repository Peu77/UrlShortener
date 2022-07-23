import {AppDataSource} from "./data-source"
import {initControllers} from "@peu77/expresswrapper";
import express from "express"
import {LinkController} from "./controller/user/LinkController";

AppDataSource.initialize().then(async () => {
    console.log("Database initialized")
    const app = express()

    app.listen(3000, () => {
        initControllers(app, [
            LinkController
        ])
    })
}).catch(error => console.log(error))
