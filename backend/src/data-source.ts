import "reflect-metadata"
import { DataSource } from "typeorm"
import { Link } from "./entity/Link"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "pg",
    password: "pg",
    database: "pg",
    synchronize: true,
    logging: false,
    entities: [Link],
    migrations: [],
    subscribers: [],
})
