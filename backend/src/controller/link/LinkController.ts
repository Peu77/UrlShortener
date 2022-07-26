import {Controller, DependencyImpl, RouteType} from "@peu77/expresswrapper"
import {LinkService} from "./LinkService";
import {urlDependencyOption} from "../../dependencyOptions/DependencyOptions";

export const LinkController: Controller = {
    prefix: "/link",
    service: LinkService,
    routes: [
        {
            path: "create",
            type: RouteType.POST,
            dependencies: [
                new DependencyImpl("url", [
                    urlDependencyOption
                ])
            ],
            guards: [],
        },
        {
            path: "get",
            type: RouteType.GET,
            dependencies: [
                new DependencyImpl("id", [])
            ],
            guards: []
        }
    ]
}