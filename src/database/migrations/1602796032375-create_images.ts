import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602796032375 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        queryRunner.createTable(

            new Table(

                {

                    name: "images",

                    columns: [
                        {

                            name: "id",

                            type: "integer",

                            unsigned: true, // The id column cannot have negative values

                            isPrimary: true,

                            isGenerated: true,

                            generationStrategy: "increment"

                        },

                        {

                            name: "path",

                            type: "varchar"

                        },

                        {
                            
                            name: "orphanage_id",

                            type: "integer"

                        }
                    ],

                    foreignKeys: [
                        {
                            
                            name: "imageOrphanage",

                            columnNames: ["orphanage_id"], // The column name of the current table

                            referencedTableName: "orphanages",

                            referencedColumnNames: ["id"],

                            onUpdate: "CASCADE", // If the orphanage id is updated, the images information are kept safe, i.e. their foreign key also change.

                            onDelete: "CASCADE" // If the orphanage is deleted from the database, so are the images.

                        }
                    ]

                }

            )
        
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("images");

    }

}
