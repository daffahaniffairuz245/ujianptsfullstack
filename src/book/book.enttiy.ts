import {BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, } from "typeorm" 

@Entity()
export class Book extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    title : string;

    @Column()
    author : string;    

    @Column()
    year : number;

    @Column({ type: 'text' })
    deskripsi : string;

    @Column ({type : 'datetime', default : () => 'CURRENT_TIMESTAMP'})
    created_at : Date

    @Column ({type : 'datetime', default : () => 'CURRENT_TIMESTAMP'})
    updated_at : Date;
}