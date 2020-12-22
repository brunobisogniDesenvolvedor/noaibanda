import {MigrationInterface, QueryRunner , Table} from "typeorm";

export class CreateClient1608622381419
 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'clients',
                columns : [
                    {
                        name: 'id', 
                        type: 'varchar',
                        isPrimary :true,
                        generationStrategy: 'uuid',
                        default: 'uuid_genarate_v4()',
                    },
                    {
                     name: 'name' ,
                     type: 'varchar',    
                    },
                    {
                        name: 'email', 
                        type : 'varchar',
                        isUnique: true,
                    },
                    {
                        name : 'age',
                        type : ' varchar',
                        isUnique: true, 
                    }, 
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Users');
    }

}
