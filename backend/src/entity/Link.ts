import {Entity, Column, PrimaryColumn} from "typeorm"

@Entity()
export class Link {

    @PrimaryColumn()
    id: string

    @Column()
    url: string

    @Column()
    createAt: Date
}
