import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602716774685 implements MigrationInterface {

    // Make changes (create a table, create a new field, delete a field)
    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(
            
            new Table(
                {
                    name: "orphanages", // The name of the table
                    
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
                            name: "name",

                            type: "varchar"
                        },

                        {
                            name: "latitude",

                            type: "decimal",

                            scale: 10,

                            precision: 2
                        },

                        {
                            name: "longitude",

                            type: "decimal",

                            scale: 10,

                            precision: 2
                        },

                        {
                            name: "about",

                            type: "text"
                        },

                        {
                            name: "instructions",

                            type: "text"
                        },

                        {
                            name: "opening_hours",

                            type: "varchar"
                        },

                        {
                            name: "open_on_weekends",

                            type: "boolean",

                            default: false
                        }
                    ]
                }
            )
        );
    }

    // Undo the changes made by the up method
    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("orphanages");

    }

}
