import {Controller, DependencyImpl, DependencyOptions, RouteType} from "@peu77/expresswrapper";
import {UserService} from "./UserService";
import {userAuthGuard} from "../../guards/UserGuards";

const emailDependency: DependencyImpl = new DependencyImpl("email", [
    DependencyOptions.isEmailOption
])

const passwordDependency: DependencyImpl = new DependencyImpl("password", [
    DependencyOptions.getMinLengthOption(6)
])

export const UserController: Controller = {
    prefix: "/user",
    service: UserService,
    routes: [
        {
            type: RouteType.POST,
            path: "register",
            dependencies: [
                emailDependency,
                passwordDependency
            ],
            guards: []
        },

        {
            type: RouteType.GET,
            path: "login",
            dependencies: [
                emailDependency,
                passwordDependency
            ],
            guards: []
        },

        {
            type: RouteType.GET,
            path: "get",
            dependencies: [],
            guards: [userAuthGuard]
        }
    ]
}