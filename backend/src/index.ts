import {AppDataSource} from "./data-source"
import {initControllers} from "@peu77/expresswrapper";
import express from "express"
import {LinkController} from "./controller/user/LinkController";
import cors from "cors";


AppDataSource.initialize().then(async () => {
    console.log("Database initialized")
    const app = express()
    app.use(cors())

    app.listen(4000, () => {
        initControllers(app, [
            LinkController
        ])
    })
}).catch(error => console.log(error))


const createAt = new Date().getTime() - 1000 * 60 * 3
const now = Date.now()

// check if createAt is more than 2 minutes ago

if (now - createAt > 2 * 60 * 1000) {
    console.log("two minutes ago")
}