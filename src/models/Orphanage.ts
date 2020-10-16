import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';

import Image from './Image';

@Entity("orphanages")
export default class Orphanage {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    // The first parameter is a function that returns a type of the return
    // Second parameter: given an image, what is the field inside the image
    // that returns the inverse relationship, i.e, the orphanage.
    @OneToMany(

        () => Image,

        image => image.orphanage, 

        {
            // This will automatically insert and update the associated images
            cascade:["insert", "update"]
        }

    )
    @JoinColumn({ name: "orphanage_id"}) // The column that establishes the relationship
    images: Image[];

}