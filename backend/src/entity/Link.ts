import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm"

@Entity()
export class Link {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    url: string

    @CreateDateColumn()
    createAt: Date

}
