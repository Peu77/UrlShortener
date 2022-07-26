import {RouteType, generateListener, Service} from "@peu77/expresswrapper";
import {HttpStatus} from "http-status-ts";
import {Link} from "../../entity/Link";
import {AppDataSource} from "../../data-source";

// function which generate 5 random characters
function generateRandomString(length: number): string {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

// delete all links which older than 1 hour
function checkExpired() {
    AppDataSource.manager.find(Link).then(links => {
        const now: number = Date.now()

        links.filter(link => {
            const createAt: Date = link.createAt
            // check if createAt is more than 2 minutes ago
            return now - createAt.getTime() > 60 * 60 * 1000
        }).forEach(link => {
            const id = link.id
            AppDataSource.manager.remove(link).then(() => {
                console.log("delete link", id, link.url)
            })
        })
    })
}

setInterval(checkExpired, 1000 * 2)
setTimeout(checkExpired, 1000 * 2)

export const LinkService: Service = {
    listeners: [
        generateListener(RouteType.POST, "create", async (data: any) => {
            const link: Link = new Link()
            link.id = generateRandomString(5)
            link.url = data.url
            link.createAt = new Date()
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

            if (!link) {
                return {
                    success: false,
                    message: "link not found",
                    status: HttpStatus.NOT_FOUND,
                    data: {}
                }
            }

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