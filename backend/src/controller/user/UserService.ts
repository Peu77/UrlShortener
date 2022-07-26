import {generateListener, RouteType, Service} from "@peu77/expresswrapper";
import {HttpStatus} from "http-status-ts";
import {AppDataSource} from "../../data-source";
import {User} from "../../entity/User";
import {createAuthtoken} from "../../guards/UserGuards";
import bcrypt from "bcrypt";

export function findUserByEmail(email: string): Promise<User> {
    return AppDataSource.manager.findOneBy(User, {email})
}

export const UserService: Service = {
    listeners: [
        generateListener(RouteType.POST, "register", async (data: any) => {
            // check if user already exists
            if (await findUserByEmail(data.email)) {
                return {
                    success: false,
                    message: "email already exists",
                    status: HttpStatus.BAD_REQUEST,
                    data: {}
                }
            }

            // create user
            const user: User = new User()
            user.email = data.email
            user.password = await bcrypt.hash(data.password, 10)
            user.createAt = new Date()
            await AppDataSource.manager.save(user)

            // create auth token
            const authToken = createAuthtoken(user)

            // return response
            return {
                success: true,
                message: "successfully created user",
                status: HttpStatus.OK,
                data: {
                    token: authToken
                }
            }
        }),

        generateListener(RouteType.GET, "login", async (data: any) => {
            // fetch user by email
            const user: User = await findUserByEmail(data.email)

            // check if user exists
            if (!user) {
                return {
                    success: false,
                    message: "user not found",
                    status: HttpStatus.NOT_FOUND,
                    data: {}
                }
            }

            // check if password is correct
            const isPasswordCorrect = await bcrypt.compare(data.password, user.password)
            if (!isPasswordCorrect) {
                return {
                    success: false,
                    message: "password is incorrect",
                    status: HttpStatus.BAD_REQUEST,
                    data: {}
                }
            }

            // create auth token
            const authToken = createAuthtoken(user)

            return {
                success: true,
                message: "successfully logged in",
                status: HttpStatus.OK,
                data: {
                    token: authToken
                }
            }
        }),

        generateListener(RouteType.GET, "get", async (data: any) => {
            return {
                success: true,
                message: "successfully got user",
                status: HttpStatus.OK,
                data: {
                    user: data.user
                }
            }
        })
    ]
}