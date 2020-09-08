import {Entity,PrimaryGeneratedColumn,Column, ManyToOne}  from "typeorm"
import {Category} from "./category";

@Entity()
export class Specialty {
    @PrimaryGeneratedColumn({name: "id", type: "int", unsigned: true})
    id: number 
    
    @ManyToOne(type => Category, category => category.specialties, {eager: true})
    category: Category

    @Column({name: "name", nullable: false, type:"varchar", length: 250})
    name: string

    @Column({name: "description", nullable: true, type: "varchar", length: 250})
    description: string

    @Column({name: "isActive", nullable: false, default: true})
    isActive: boolean
}