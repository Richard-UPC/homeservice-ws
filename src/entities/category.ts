import {Entity,PrimaryGeneratedColumn,Column, OneToMany}  from "typeorm";
import {Specialty} from "./specialty";

@Entity()
export class Category {
    @PrimaryGeneratedColumn({name: "id", type: "int", unsigned: true})
    id: number 
    
    @Column({name: "name", nullable: false, type:"varchar", length: 250})
    name: string

    @Column({name: "description", nullable: true, type: "varchar", length: 250})
    description: string

    @OneToMany(type => Specialty, specialty => specialty.category)
    specialties: Specialty[];

    @Column({name: "isActive", nullable: false, default: true})
    isActive: boolean
}