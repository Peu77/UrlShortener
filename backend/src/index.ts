import {AppDataSource} from "./data-source"
import {initControllers} from "@peu77/expresswrapper";
import express from "express"
import {LinkController} from "./controller/user/LinkController";
import cors from "cors";

AppDataSource.initialize().then(async () => {
    console.log("Database initialized")
    const app = express()
    app.use(cors())

    app.listen(3000, () => {
        initControllers(app, [
            LinkController
        ])
    })
}).catch(error => console.log(error))
