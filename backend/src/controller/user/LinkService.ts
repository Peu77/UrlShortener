import {RouteType, generateListener, Service} from "@peu77/expresswrapper";
import {HttpStatus} from "http-status-ts";
import {Link} from "../../entity/Link";
import {AppDataSource} from "../../data-source";

export const LinkService: Service = {
    listeners: [
        generateListener(RouteType.POST, "create", async (data: any) => {
            const link: Link = new Link()
            link.url = data.url
            await AppDataSource.manager.save(link)

            return {
                success: true,
                message: "successfully created link",
                status: HttpStatus.OK,
                data: {
                    url: link.id
                }
            }
        }),

        generateListener(RouteType.GET, "get", async (data: any) => {
            const link: Link = await AppDataSource.manager.findOneBy(Link, {id: data.id})
            return {
                success: true,
                message: "successfully got link",
                status: HttpStatus.OK,
                data: {
                    url: link.url,
                    id: link.id
                }
            }
        })
    ]
}