import {User} from "../entity/User";
import jwt from "jsonwebtoken";
import {GuardFunction} from "@peu77/expresswrapper";
import {HttpStatus} from "http-status-ts";
import {AppDataSource} from "../data-source";

export function createAuthtoken(user: User) {
    return jwt.sign({
        id: user.id,
        email: user.email,
        createAt: user.createAt
    }, process.env.JWT_SECRET, {expiresIn: "1h"})
}

// user token auth guard

export const userAuthGuard: GuardFunction = async (data: any) => {
    const token = data.headers.authorization

    if (!token) {
        return {
            success: false,
            message: "token not found",
            status: HttpStatus.UNAUTHORIZED,
            data: {}
        }
    }

    // check if token is valid with
    const jwtResponse: { err: any, decoded: any } = {
        err: undefined,
        decoded: undefined
    }
    await jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        jwtResponse.err = err
        jwtResponse.decoded = decoded
    })

    if (jwtResponse.err) {
        return {
            success: false,
            message: "invalid token",
            status: HttpStatus.UNAUTHORIZED,
            data: {}
        }
    }

    const user: User = await AppDataSource.manager.findOneBy(User, {id: jwtResponse.decoded.id})
    // check if user exists
    if (!user) {
        return {
            success: false,
            message: "user not found",
            status: HttpStatus.NOT_FOUND,
            data: {}
        }
    }

    return {
        success: true,
        message: "successfully authenticated",
        status: HttpStatus.OK,
        data: {
            user
        }
    }
}