import "reflect-metadata"
import { DataSource } from "typeorm"
import { Link } from "./entity/Link"
import {User} from "./entity/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "pg",
    password: "pg",
    database: "pg",
    synchronize: true,
    logging: false,
    entities: [Link, User],
    migrations: [],
    subscribers: [],
})
