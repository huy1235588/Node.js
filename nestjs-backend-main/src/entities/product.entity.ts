import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('products')

export class ProductEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    price: number;
}